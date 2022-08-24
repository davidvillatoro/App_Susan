import { Card } from "./Card";

export const Cancion5 = () => {
  const nombre ="Jerusalema"
  const url ="https://www.youtube.com/watch?v=R1XHGks9lxQ";
  const texto ="Me gusta en la forma que hacen la corografia";
  return (

    <Card cancion={url}
    texto={texto}
    nombre={nombre}
  />

  )
}
