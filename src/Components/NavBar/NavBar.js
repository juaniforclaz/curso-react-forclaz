import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagenes from '../../Img/Imagenes';
import { CartWidget } from '../CartWidget/CartWidget';

import { useAuthContext } from '../../Context/AuthContext';

export const NavBar = () => {

    const { auth } = useAuthContext()

    return (

        <Navbar expand='lg' className='mx-3 py-2'>
            <Navbar.Brand><Link to={'/'}><img src={Imagenes.logo} className="logo" alt='sofra bags'></img></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fs-5">
                    <Link to={'/'} className="nav-link d-flex align-items-center mx-3">Inicio</Link>
                    <Link to={'/catalogo'} className="nav-link d-flex align-items-center mx-3">Catalogo</Link>
                    <Link to={'/nosotros'} className="nav-link d-flex align-items-center mx-3">Nosotros</Link>
                    <Link to={'/contacto'} className="nav-link d-flex align-items-center mx-3">Contacto</Link>
                    <Link to={'/login'} className="nav-link d-flex align-items-center mx-3">login</Link>

                    {
                        auth.loggedIn
                            ?
                            <>
                                <Link to={'/create'} className="nav-link d-flex align-items-center mx-3">Crear</Link>
                                <Link to={'/orders'} className="nav-link d-flex align-items-center mx-3">Ordenes</Link>
                            </>
                            : ''
                    }

                    <CartWidget />
                </Nav>
            </Navbar.Collapse>
        </Navbar >

    )
}
