import { Navbar, NavItem, Nav, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagenes from '../../Img/Imagenes';
import Items from '../Items/Items';

export const Footer = () => {
    return (

        <div className='mt-5 text-center py-5 bg-light container-fluid'>
            <Row>
                <footer className='py-5'>
                    <h3>Footer</h3>
                </footer>
            </Row>
        </div>

    )
}