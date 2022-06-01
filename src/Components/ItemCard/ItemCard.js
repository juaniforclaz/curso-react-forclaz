import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <ItemCount stock={5} initial={1}/>
                <Button variant="success">Go somewhere</Button>
            </Card.Body>
        </Card >
    )
}