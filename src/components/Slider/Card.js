import React from 'react'
import './Card.css'

function Card({movie}) {
   return (
      <div className='myCard'>
         {movie.results && movie.results.map((movie) => (
            <div key={movie.id} className="movie">
               <h2>{movie.title}</h2>
            </div>
         ))}
      </div>
   )
}

export default Card