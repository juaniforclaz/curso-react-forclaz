import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <Container className="bg-light p-2 rounded mx-auto">
            <Row>
                <Col>
                    <Card.Img src={item.img}></Card.Img>
                </Col>
                <Col xs lg="4">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.price}</Card.Text>
                            <Card.Text>{item.desc}</Card.Text>
                            <Button onClick={handleVolver} variant="dark">Volver</Button>
                        </Card.Body>
                    </Card >
                </Col>
            </Row>
        </Container>
    )
}

