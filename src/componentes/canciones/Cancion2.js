import React from 'react';
import  ReactPlayer  from  'react-player/youtube' ;



export const Cancion2 = () => {
  return (
   <div >

      <div className='motivo'>
          <h3 className='titulo'>Duele Corazón </h3>
          <p className='parrafo'> Esta canción me recuerda, cuando participe por primera vez en un baile en la escuela </p>
          
        </div>

      <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/xFutjZEBTXs' controls loop
              width='80%'
              height='65%'
            />
      </div> 

      
  </div>
  )
}
