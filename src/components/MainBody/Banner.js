import React, { useEffect, useState } from 'react'
import './Banner.css'
import CoverImg from '../../assets/CoverImage.jpg'
import { BsFillPlayFill } from 'react-icons/bs';
import { PiWarningCircleBold } from 'react-icons/pi';

const API_KEY = 'https://api.themoviedb.org/3/trending/all/day?api_key=c2cc9c816cdcb8472761d6a1d3fe9fa1';

function Banner() {

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

   function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + ' ...' : string;
   }

   function getRandomNumber() {
      return Math.floor(Math.random() * 20) + 1;
   }
   const randomIndex = getRandomNumber();
   const randomTitle = movie.results && movie.results.length > 0 ? movie.results[randomIndex].title : '';
   const randomBackdropPath = movie.results && movie.results.length > 0 ? movie.results[randomIndex].backdrop_path : '';

   return (
      <header className='banner'
         style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomBackdropPath})`,
            backgroundPosition: 'center center'
         }}
      >
         <div className='banner__contents'>
            <h1 className='banner__title'>{randomTitle}</h1>
            <h1 className='banner__description'>{truncate(`"Lucifer" Charismatic fallen angel solves crimes in LA with detective partner. Redemption, supernatural powers, and captivating characters drive this addictive series. Intense, witty, and thought-provoking.`, 150)}</h1>
            <br />
            <div className='banner__buttons'>
               <button className='banner__button__play'>
                  <div className='play__svg'><BsFillPlayFill /></div>
                  <div className='play__text'>Play</div>
               </button>
               <button className='banner__button__more' >
                  <div className='more__svg'><PiWarningCircleBold /></div>
                  <div className='more__text'>More Info</div>
               </button>
            </div>
         </div >
         <div className='banner__fadeBottom' />
         <div className='movies__list' >
            {movie.results && movie.results.map((movie) => (
               <div key={movie.id} className="movie">
                  <h2>{movie.title}</h2>
               </div>
            ))}
            {movie.results && movie.results.map((movie) => (
               <div key={movie.id} className="movie">
                  <h2>{movie.title}</h2>
               </div>
            ))}
         </div>
      </header>





   )
}

export default Banner