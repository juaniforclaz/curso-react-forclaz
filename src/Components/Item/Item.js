import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <Card className="mx-auto mb-3 card-item">
            <Card.Body className="col">
                <Badge className="position-absolute top-0 start-100 translate-middle p-1" bg="danger">{item.nuevo ? 'Nuevo' : ''}</Badge>
                <Card.Img src={item.img} className="mb-3 img-item"></Card.Img>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="success">Ver más</Button>
                </Link>
            </Card.Body>
        </Card >
    )
}