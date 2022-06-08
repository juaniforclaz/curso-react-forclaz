import { Navbar, NavItem, Nav, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagenes from '../../Img/Imagenes';
import Items from '../Items/Items';

export const Footer = () => {
    return (

        <Container className='mt-5 text-center py-5' fixed="bottom">
            <Row>
                <h3>Footer</h3>
            </Row>
        </Container>

    )
}