import { Container, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NavCatalogo = () => {
    return (

        <Container className="mx-1">
            <ListGroup horizontal>
                <ListGroup.Item><Link to={'/categoria/mochila'} className="nav-link text-secondary">Mochilas</Link></ListGroup.Item>
                <ListGroup.Item><Link to={'/categoria/riñonera'} className="nav-link text-secondary">Riñoneras</Link></ListGroup.Item>
                <ListGroup.Item><Link to={'/categoria/bolso-odo-uba'} className="nav-link text-secondary">Bolsos Odonto</Link></ListGroup.Item>
                <ListGroup.Item><Link to={'/catalogo'} className="nav-link text-secondary">Ver todo</Link></ListGroup.Item>
            </ListGroup>
        </Container>

    )
}