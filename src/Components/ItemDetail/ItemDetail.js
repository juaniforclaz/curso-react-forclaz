import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        console.log(itemToCart)
    }

    return (
        <Container className="vh-100">
            <Row className="mx-auto">
                <Col className="bg-light p-2" xs lg="4">
                    <Card.Img src={item.img} className="img-itemdetail border border-1"></Card.Img>
                </Col>
                <Col className="bg-light p-2" xs lg="8">
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.price}</Card.Text>
                            <Card.Text>{item.desc}</Card.Text>
                        </Card.Body>
                    </Card >

                    <ItemCount
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />

                    <Button onClick={handleVolver} variant="dark">Volver</Button>

                </Col>
            </Row>
        </Container>
    )
}

