import React,{ useEffect, useState } from 'react'
import './MainPage.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/MainBody/Banner'
import Slider from './components/Slider/Slider';

const API_KEY = 'https://api.themoviedb.org/3/trending/all/day?api_key=c2cc9c816cdcb8472761d6a1d3fe9fa1';

function MainPage() {

   const [isLoading, setIsLoading] = useState(true);
   const [movie, setMovie] = useState([]);
   const [isError, setIsError] = useState({ show: "false", msg: "" });

   const getMovies = async (url) => {
      try {
         const res = await fetch(url);
         const data = await res.json();
         // console.log(data);
         setMovie(data)
      } catch (error) {
         console.log(error);
      }
   }

   console.log(movie);

   useEffect(() => {
      getMovies(API_KEY);
   }, [])

   function getRandomNumber() {
      return Math.floor(Math.random() * 20) + 1;
   }
   const randomIndex = getRandomNumber();
   const randomTitle = movie.results && movie.results.length > 0 ? movie.results[randomIndex].title : '';
   const randomBackdropPath = movie.results && movie.results.length > 0 ? movie.results[randomIndex].backdrop_path : '';

   return <>
      <Navbar />
      <Banner randomBackdropPath={randomBackdropPath} randomTitle={randomTitle} />

      <div className='movies__list' >
         <Slider movieALl={movie}/>
      </div>

   </>
}

export default MainPage