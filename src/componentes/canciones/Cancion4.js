import { Card } from "./Card";

export const Cancion4 = () => {
  const nombre ="Balada para Adelaida"
  const url ="https://www.youtube.com/watch?v=l3O0DQc_V30";
  const texto ="Esta canción la escucho cuando estoy algo tensa así poder relajarme ";
  return (

    <Card cancion={url}
    texto={texto}
    nombre={nombre}
  />

  )
}
