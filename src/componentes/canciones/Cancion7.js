

import { Card } from "./Card";

export const Cancion7 = () => {
  const nombre = "The Flame";
  const url ="https://www.youtube.com/watch?v=YOcV4eOu2TY";
  const texto ="Esta canción la escuché una vez que fui a un evento de escuelas y me gusto y desde esa vez la escucho";
  return (
    <Card cancion={url}
    texto={texto}
    nombre={nombre}
  />
  )
}

