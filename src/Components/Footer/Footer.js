import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import Imagenes from '../../Img/Imagenes';
import Items from '../Items/Items';

export const Footer = () => {

    const { auth } = useAuthContext()

    return (

        <div className='mt-5 text-center py-3 bg-light container-fluid'>

            <Row>

                <Col>

                    <div className='mt-5'>
                        <img src={Imagenes.logo} className="logo mx-auto text-center mb-2" alt='sofra bags' />
                        <p>Copyright SOFRA - 2022. Todos los derechos reservados.</p>
                    </div>
                    <p className="fs-1">
                        <span className="mx-2">
                            <a href='https://www.instagram.com/sofra.ok/?igshid=YmMyMTA2M2Y%3D' className='text-decoration-none' target={"_blank"}>{Items.instagram}</a>
                        </span>
                        <span className="mx-2">
                            <a className="text-decoration-none" href="whatsapp://send?text=Hola! queria consultar por un modelo de la tienda online! &phone=+5491165557922">{Items.whatsapp}</a>
                        </span>
                    </p>

                </Col>

                <Col>

                    <div className='py-5'>
                        <ul className='list-unstyled'>
                            <li className='my-3'>
                                <Link to={'/inicio'} className='text-decoration-none'>inicio</Link>
                            </li>
                            <li className='my-3'>
                                <Link to={'/catalogo'} className='text-decoration-none'>catalogo</Link>
                            </li>
                            <li className='my-3'>
                                <Link to={'/contacto'} className='text-decoration-none'>contacto</Link>
                            </li>
                        </ul>
                    </div>

                </Col>

            </Row>

            <Row>

                <Col>

                    {
                        auth.loggedIn
                            ? ''
                            : <Link to={'/login'} className="nav-link d-flex align-items-center mx-3">login</Link>
                    }

                </Col>

            </Row>

        </div>

    )
}