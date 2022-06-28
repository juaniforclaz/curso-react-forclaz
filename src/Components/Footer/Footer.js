import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';

export const Footer = () => {

    const { auth } = useAuthContext()

    return (

        <div className='mt-5 text-center py-5 bg-light container-fluid'>
            <Row>
                <Col>
                    <footer className='py-5'>
                        <h3>Footer</h3>
                    </footer>
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