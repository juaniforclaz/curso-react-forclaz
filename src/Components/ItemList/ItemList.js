import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Item } from "../Item/Item"
import { NavCatalogo } from "../NavCatalogo/NavCatalogo"

export const ItemList = ({ items }) => {

    return (
        <Container>

            <Row className="mb-3">
                <NavCatalogo />
            </Row>

            <Row className="row gap-1">


                {
                    items.map((item) => < Item key={item.id} item={item} />)
                }


            </Row>
        </Container>
    )

}