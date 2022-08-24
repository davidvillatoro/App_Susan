import { Card } from "./Card";

export const Cancion6 = () => {
  const nombre ="Que Canten los  Niños"
  const url ="https://www.youtube.com/watch?v=gcYgqAVxiok";
  const texto ="Me gusta, por que es una canción dedicada a los niños";
  return (

    <Card cancion={url}
    texto={texto}
    nombre={nombre}
  />

  )
}
