import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ItemCount = ({ max, setCounter, counter, onAdd }) => {

    const [stateCant, setStateCant] = useState('Seleccione la cantidad para agregar al carrito')

    const [stateCart, setStateCart] = useState('Finalizar compra')

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter >= 0 && setCounter(counter - 1)
    }


    return (
        <Container className="mt-2 rounded border border-1 p-3 bg-white mb-2">
            <Row><p className="">Cantidad seleccionada: <span>{counter}</span></p></Row>
            <Row className="counter">
                <Col>
                    <Button
                        className="btn btn-danger w-25"
                        onClick={handleRestar}
                        disabled={counter === 0}>-</Button>
                    <Button
                        className="btn btn-success mx-2 w-25"
                        onClick={handleSumar}
                        disabled={counter === max}>+</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <button onClick={onAdd} className="btn btn-success my-2 btn-counter" disabled={counter === 0}>Agregar al carrito</button>
                    <Link to={'/cart'}><p className="finalizar btn btn-outline-success d-none"></p></Link>
                    <p className="m-0 p-0">{counter === 0 && stateCant}</p>
                </Col>
            </Row>
        </Container>
    )
}