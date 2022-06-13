import { Card, Col, Container, Row } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb"

export const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {

        document.querySelector('.finalizar').classList.remove('d-none')
        document.querySelector('.finalizar').textContent = 'Finalizar compra'
        document.querySelector('.counter').classList.add('d-none')
        document.querySelector('.btn-counter').classList.add('d-none')

        const itemToCart = {
            ...item,
            cantidad
        }

        console.log(itemToCart)
    }


    return (
        <Container className="vh-100">
            <Row>
                <BreadCrumb
                    producto={item.title}
                />
            </Row>
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
                        onAdd={handleAgregar}
                    />

                </Col>

            </Row>

        </Container>
    )

}

