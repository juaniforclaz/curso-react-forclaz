import { Navbar, NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CartItem } from './CartItem';

export const NavBar = () => {

    return (

        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Inicio</Nav.Link>
                        <Nav.Link href="#">Catalogo</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                        <Nav.Link href="#">Nosotros</Nav.Link>
                        <Nav.Link className='d-flex align-items-center'><CartItem/></Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
