import { Card, Col, Container, Row } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {

    const { addItem, isInCart } = useContext(CartContext)
    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {

        if (cantidad === 0) return

        const itemToCart = {
            ...item,
            cantidad
        }

        addItem(itemToCart)

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

                    {
                        isInCart(item.id)
                            ? <Link to={'/cart'} className="btn btn-outline-success mt-2">Finalizar Compra</Link>
                            :
                            <ItemCount
                                max={item.stock}
                                counter={cantidad}
                                setCounter={setCantidad}
                                onAdd={handleAgregar}
                            />
                    }


                </Col>

            </Row>

        </Container>
    )

}

