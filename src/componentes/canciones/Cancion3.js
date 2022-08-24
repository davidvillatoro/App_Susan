import { Card } from "./Card";



export const Cancion3 = () => {
  const nombre ="Mi Viejo"
  const url ="https://www.youtube.com/watch?v=P2hVgrRp-kY";
  const texto ="Me gusta por qué es una canción dedicada a nuestro padre, y un sentimiento de nostalgia";
  return (
    
    <Card cancion={url}
      texto={texto}
      nombre={nombre}
    />
  )
}
