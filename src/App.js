import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nosotros } from './Components/Nosotros/Nosotros';
import { Contacto } from './Components/Contacto/Contacto';
import { Catalogo } from './Components/Catalogo/Catalogo';
import { Inicio } from './Components/Inicio/Inicio';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [mostrar, setMostrar] = useState(true)

  const mostrarCounter = () => {
    setMostrar(!mostrar)
  }

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<Inicio />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />

      </Routes>


    </BrowserRouter >
  )
}

export default App;
