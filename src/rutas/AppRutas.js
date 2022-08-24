import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import { Portada } from "../componentes/portada/Portada";
  import { Navbar } from "../componentes/ui/Navbar";
  import { Cancion1 } from "../componentes/canciones/Cancion1";
  import { Cancion2 } from "../componentes/canciones/Cancion2";
  import { Cancion3 } from "../componentes/canciones/Cancion3";
  import { Cancion4 } from "../componentes/canciones/Cancion4";
  import { Cancion5 } from "../componentes/canciones/Cancion5";
  import { Cancion6 } from "../componentes/canciones/Cancion6";
  import { Cancion7 } from "../componentes/canciones/Cancion7";
  import { Cancion8 } from "../componentes/canciones/Cancion8";
  import { Cancion9 } from "../componentes/canciones/Cancion9";
  import { Cancion10 } from "../componentes/canciones/Cancion10";
  


  export const AppRutas = () => {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Portada/>}/>
            <Route path="/a" element={<Cancion1/>}/>
            <Route path="/b" element={<Cancion2/>}/>
            <Route path="/c" element={<Cancion3/>}/>
            <Route path="/d" element={<Cancion4/>}/>
            <Route path="/e" element={<Cancion5/>}/>
            <Route path="/f" element={<Cancion6/>}/>
            <Route path="/g" element={<Cancion7/>}/>
            <Route path="/h" element={<Cancion8/>}/>
            <Route path="/i" element={<Cancion9/>}/>
            <Route path="/j" element={<Cancion10/>}/>
        </Routes>
      
      </BrowserRouter>
    )
}
  