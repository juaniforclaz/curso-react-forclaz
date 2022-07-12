import { Link } from "react-router-dom"
import { Container, Button, Row } from "react-bootstrap"

export const Error404 = () => {
    return (

        <Container className="w-100 vh-100">

            <Row className="bg-danger rounded mt-5 text-white text-center p-5 ">

                <h1>La direccion no existe</h1>
                <Link to={'/'}><Button variant="light" className="mt-2">Volver al Inicio</Button></Link>

            </Row>

        </Container>

    )
}