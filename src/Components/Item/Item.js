import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <Card className="mx-auto mb-3" style={{ width: '18rem' }}>
            <Card.Body className="col">
                <Card.Img src={item.img} className="mb-3"></Card.Img>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <ItemCount stock={5} initial={1} />
                <Link to={`/item/${item.id}`}>
                    <Button variant="success">Ver más</Button>
                </Link>
            </Card.Body>
        </Card >
    )
}