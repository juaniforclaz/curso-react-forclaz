import { useEffect, useState } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import { Item } from "../Item/Item"
import { NavCatalogo } from "../NavCatalogo/NavCatalogo"
import Items from "../Items/Items"
import { ItemLoading } from "../ItemLoading/ItemLoading"


export const NewItems = ({ items }) => {

    return (

        <Row>

                {
                    items.map((item) => < Item key={item.id} item={item} />)
                }

        </Row>

    )
}