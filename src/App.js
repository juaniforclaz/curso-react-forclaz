import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Styles.css'
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import { Nosotros } from './Components/Nosotros/Nosotros';
import { Contacto } from './Components/Contacto/Contacto';
import { Catalogo } from './Components/Catalogo/Catalogo';
import { Inicio } from './Components/Inicio/Inicio';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Error404 } from './Components/Error404/Error404';
import { Footer } from './Components/Footer/Footer';
import { LoginScreen } from './Components/LoginScreen/LoginScreen';
import { Cart } from './Components/Cart/Cart';
import { CartContext, CartProvider } from './Context/CartContext';
import { useState } from 'react';
import { RegisterScreen } from './Components/RegisterScreen/RegisterScreen';
import { AuthProvider } from './Context/AuthContext';
import { AppRouter } from './Routes/AppRouter';

function App() {



  return (

    <AuthProvider>

      <CartProvider>

        <AppRouter />

      </CartProvider>

    </AuthProvider>

  )
}

export default App;
