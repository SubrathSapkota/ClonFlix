import React from 'react'
import './Slider.css'
import Card from './Card'

function Slider({ movieALl }) {

   let box = document.querySelector('.product__container')

   const btnPreHandler = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
   }
   const btnNextHandler = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
   }
   return (
      <div className='main__slider'>
         <button className='pre__btn' onClick={btnPreHandler}><p>&lt;</p></button>
         <button className='next__btn' onClick={btnNextHandler}><p>&gt;</p></button>
         <div className='product__container'>
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
            <Card cardId="1" movie={movieALl} />
         </div>
      </div>
   )
}

export default Slider