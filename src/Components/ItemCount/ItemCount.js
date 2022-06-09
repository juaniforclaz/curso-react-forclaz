import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

export const ItemCount = ({ max, setCounter, counter, handleAgregar }) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return (
        <Container className="mt-2 rounded border border-1 p-3 bg-white mb-2">
            <Row><p className="">Cantidad seleccionada: <span>{counter}</span></p></Row>
            <Row>
                <Col>
                    <Button
                        className="btn btn-danger w-25"
                        onClick={handleRestar}
                        disabled={counter === 1}>-</Button>
                    <Button
                        className="btn btn-success mx-2 w-25"
                        onClick={handleSumar}
                        disabled={counter === max}>+</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <button onClick={handleAgregar} className="btn btn-success mt-2">Agregar al carrito</button>
                </Col>
            </Row>
        </Container>
    )
}