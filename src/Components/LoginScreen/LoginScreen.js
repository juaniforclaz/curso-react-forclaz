
import { Col, Container, Form, Row } from "react-bootstrap"

export const LoginScreen = () => {

    return (
        <Container className="vh-100">
            <Row>
                <Col sm={6} className="mx-auto bg-light p-3">
                    <h3>Login</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control size="sm" type="mail" placeholder="Mail" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control size="sm" type="password" placeholder="Mail" />
                        </Form.Group>
                        <Form.Text className="text-danger">Contraseña o mail incorrecto</Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}