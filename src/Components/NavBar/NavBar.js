import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagenes from '../../Img/Imagenes';
import Items from '../Items/Items';

export const NavBar = () => {

    return (

        <Navbar expand='lg' className='m-2'>
            <Navbar.Brand><img src={Imagenes.logo} className="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fs-5 flex-row">
                    <Link to={'/'} className="nav-link d-flex align-items-center mx-3">{Items.inicio}</Link>
                    <Link to={'/catalogo'} className="nav-link d-flex align-items-center mx-3">{Items.catalogo}</Link>
                    <Link to={'/nosotros'} className="nav-link d-flex align-items-center mx-3">{Items.nosotros}</Link>
                    <Link to={'/contacto'} className="nav-link d-flex align-items-center mx-3">{Items.contacto}</Link>
                    <Nav.Link className='d-flex align-items-center mx-3'>{Items.carrito}</Nav.Link>
                    <Nav.Link className='d-flex align-items-center mx-3'>{Items.busqueda}</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
