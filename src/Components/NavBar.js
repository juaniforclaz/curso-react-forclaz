import { Navbar, NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (

        <Navbar expand='lg' className='mx-2'>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to={'/'} className="nav-link">Inicio</Link>
                    <Link to={'/catalogo'} className="nav-link">Catalogo</Link>
                    <Link to={'/nosotros'} className="nav-link">Nosotros</Link>
                    <Link to={'/contacto'} className="nav-link">Contacto</Link>
                    <Nav.Link className='d-flex align-items-center'><CartItem /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
