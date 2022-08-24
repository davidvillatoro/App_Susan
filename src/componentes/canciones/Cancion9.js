import  ReactPlayer  from  'react-player/youtube' ;
import "./cancione.css"


export const Cancion9 = () => {
  return (
    <div >

      <div className='motivo'>
          <h3 className='titulo'>San Lucas </h3>
          <p className='parrafo'>Esta canción me gusto, porque la escuche en un video muy bonito, de una pareja de anime, de mis favoritas </p>
          
        </div>

      <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=GqB_v1bH-3s' controls loop
              width='80%'
              height='65%'
            />
      </div> 

      
  </div>
  )
}
