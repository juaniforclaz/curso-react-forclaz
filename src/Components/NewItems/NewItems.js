import { Row } from "react-bootstrap"
import { Item } from "../Item/Item"

export const NewItems = ({ items }) => {

    return (

        <Row>

            {
                items.map((item) => < Item key={item.id} item={item} />)
            }

        </Row>

    )
}