import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useAuthContext } from "../../Context/AuthContext"

export const LoginScreen = () => {

    const { login } = useAuthContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        login(values)

    }

    return (

        <Container className="vh-100 mt-5">

            <Row className="bg-light p-5 rounded border">

                <Col>

                    <h2>Login</h2>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mt-3 mb-3">
                            <Form.Control
                                type={"email"}
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                placeholder='Email de usuario'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type={"password"}
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}

                                placeholder='Contraseña'
                            />
                        </Form.Group>

                        <Button variant="primary" type='submit'>Login</Button>

                    </Form>

                </Col>

            </Row>

        </Container>

    )
}