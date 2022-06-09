import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css'
import { NavBar } from './Components/NavBar/NavBar';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Nosotros } from './Components/Nosotros/Nosotros';
import { Contacto } from './Components/Contacto/Contacto';
import { Catalogo } from './Components/Catalogo/Catalogo';
import { Inicio } from './Components/Inicio/Inicio';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Error404 } from './Components/Error404/Error404';
import { Footer } from './Components/Footer/Footer';
import { CartContext } from './Context/CartContext';

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
        <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
        <Route path='/error404' element={<Error404 />} />
        <Route path='*' element={<Navigate to={"/error404"} />} />

      </Routes>

      <Footer />

    </BrowserRouter >
  )
}

export default App;
