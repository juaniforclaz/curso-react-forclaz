import { Col, Container, DropdownButton, Row, Dropdown, Form } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { Link } from "react-router-dom"
import Items from '../Items/Items'

export const NavCatalogo = () => {

    return (
        <Container>
            <Row>
                <Col className="mx-auto">
                    <DropdownButton id="dropdown-basic-button" title="Categorias" variant="light">
                        <Dropdown.Item>
                            <Link to={'/categoria/mochila'} className="nav-link text-primary text-uppercase">Mochilas</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/categoria/riñonera'} className="nav-link text-primary text-uppercase">Riñoneras</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/categoria/bolso-odo-uba'} className="nav-link text-primary text-uppercase">Odontologia</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/categoria/bolso'} className="nav-link text-primary text-uppercase">Bolsos</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/categoria/cartera'} className="nav-link text-primary text-uppercase">Carteras</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/categoria/billetera'} className="nav-link text-primary text-uppercase">Billeteras</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/categoria/bandolera'} className="nav-link text-primary text-uppercase">Bandolera</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={'/catalogo'} className="nav-link text-primary text-uppercase">Ver todo</Link>
                        </Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>



    )
}