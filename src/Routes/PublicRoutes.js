import { NavBar } from '../Components/NavBar/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Components/LoginScreen/LoginScreen';
import { Nosotros } from '../Components/Nosotros/Nosotros';
import { Contacto } from '../Components/Contacto/Contacto';
import { Catalogo } from '../Components/Catalogo/Catalogo';
import { Inicio } from '../Components/Inicio/Inicio';
import { ItemListContainer } from '../Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer';
import { Error404 } from '../Components/Error404/Error404';
import { Footer } from '../Components/Footer/Footer';
import { Checkout } from '../Components/Checkout/Checkout';
import { Cart } from '../Components/Cart/Cart';

export const PublicRoutes = () => {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/catalogo' element={<Catalogo />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
                <Route path='/error404' element={<Error404 />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Navigate to={"/login"} />} />
            </Routes>

            <Footer />

        </>
    )
}