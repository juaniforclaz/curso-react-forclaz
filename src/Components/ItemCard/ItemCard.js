import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Holder from "react-holder/lib/holder";

export const ItemCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
            </Card.Body>
        </Card >
    )
}