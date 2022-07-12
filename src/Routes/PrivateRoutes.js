import { NavBar } from '../Components/NavBar/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../Components/Footer/Footer';
import { Cart } from '../Components/Cart/Cart';
import { Checkout } from '../Components/Checkout/Checkout';
import { Create } from '../Components/Create/Create';
import { Contacto } from '../Components/Contacto/Contacto';
import { Catalogo } from '../Components/Catalogo/Catalogo';
import { Inicio } from '../Components/Inicio/Inicio';
import { ItemListContainer } from '../Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../Components/ItemDetailContainer/ItemDetailContainer';
import { Error404 } from '../Components/Error404/Error404';
import { Edit } from '../Components/Edit/Edit';
import { Orders } from '../Components/Orders/Orders';
import { UserInfo } from '../Components/UserInfo/UserInfo';

export const PrivateRoutes = () => {

    return (

        <>

            <NavBar />

            <UserInfo />

            <Routes>

                <Route path='/' element={<Inicio />} />
                <Route path='/catalogo' element={<Catalogo />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
                <Route path='/error404' element={<Error404 />} />
                <Route path='*' element={<Navigate to={"/error404"} />} />
                <Route path='/login' element={<Navigate to={"/"} />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit/:id' element={<Edit />} />


            </Routes>

            <Footer />

        </>

    )
}