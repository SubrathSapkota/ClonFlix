import React  from 'react'
import './Banner.css'
import { BsFillPlayFill } from 'react-icons/bs';
import { PiWarningCircleBold } from 'react-icons/pi';


function Banner({randomBackdropPath,randomTitle}) {

   function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + ' ...' : string;
   }

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
      </header>

   )
}

export default Banner