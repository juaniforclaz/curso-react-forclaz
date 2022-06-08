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
        <Container className="">
            <Row className="mx-auto">
                <Col className="bg-light p-2" xs lg="4">
                    <Card.Img src={item.img} className="img-itemdetail"></Card.Img>
                </Col>
                <Col className="bg-light p-2" xs lg="8">
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

