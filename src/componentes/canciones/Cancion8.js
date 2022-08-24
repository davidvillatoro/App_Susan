import React from 'react'
import  ReactPlayer  from  'react-player/youtube' ;
import "./cancione.css"
export const Cancion8 = () => {
  return (
    <div >

      <div className='motivo'>
          <h3 className='titulo'> ABBA Chiquitita </h3>
          <p className='parrafo'> Esta canción me gusta porque cuando la escucho, me da un sentimiento de calma  </p>
          
        </div>

      <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=Wa_I_XLIHFo' controls loop
              width='80%'
              height='65%'
            />
      </div> 

      
  </div>
  )
}
