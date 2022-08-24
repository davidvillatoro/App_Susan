import React from 'react'
import  ReactPlayer  from  'react-player/youtube' ;



export const Card = ({cancion, texto, nombre}) => {

  console.log(cancion, texto);
  return (


    <div >

      <div className='motivo'>
          <h3 className='titulo'> {nombre} </h3>
          <p className='parrafo'> {texto}</p>
          
        </div>

      <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={cancion} controls loop
              width='80%'
              height='65%'
            />
      </div> 

      
  </div>
    
  )
}
