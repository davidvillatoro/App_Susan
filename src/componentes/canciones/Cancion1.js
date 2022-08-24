

import { Card } from "./Card";

export const Cancion1 = () => {
  const nombre ="Mi País";
  const url ="https://www.youtube.com/watch?v=IFhEY_EPqoM";
  const texto ="Una canción muy bella, y es dedica a nuestro país interpretada y escrita por uno de los Guatemaltecos sobresalientes, Ricardo Arjona";
  return (

    <Card cancion={url}
    texto={texto}
    nombre={nombre}
  />

  )
}
