import React from 'react'
import  ReactPlayer  from  'react-player/youtube' ;
import "./cancione.css"


export const Cancion10 = () => {
  return (
    <div >

      <div className='motivo'>
          <h3 className='titulo'> Abre la Puerta al Paraíso </h3>
          <p className='parrafo'> Me gusta porque es de un anime infantil que miraba antes</p>
          
        </div>

      <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=Ik0XDauuyMQ' controls loop
              width='80%'
              height='65%'
            />
      </div> 

      
  </div>
  )
}
