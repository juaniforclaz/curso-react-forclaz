import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import { Item } from "../Item/Item"
import { NavCatalogo } from "../NavCatalogo/NavCatalogo"
import Items from "../Items/Items"
import { Footer } from "../Footer/Footer"
import { ItemLoading } from "../ItemLoading/ItemLoading"
import { useProductos } from "../ItemListContainer/useProductos"

export const ItemList = ({ items }) => {

    const { loading } = useProductos()

    const [searchTerm, setSearchTerm] = useState('')

    const [stateSearch, setStateSearch] = useState(false)

    const [found, setFound] = useState('no encontrado')

    return (

        <Container className="item-list py-4">

            <Row className="py-2 mb-3">
                <Col xs={4}>
                    <NavCatalogo />
                </Col>

                <Col xs={8}>
                    <Form.Group className='d-flex align-items-center mx-3' controlId="formBasicEmail">
                        <Form.Label className='text-black mx-2'>{Items.busqueda}</Form.Label>
                        <Form.Control type="text" placeholder="Buscar por nombre de producto" onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}
                        />
                    </Form.Group>
                </Col>

            </Row>

            <Row className="row gap-1">

                {
                    items.filter((item) => {

                        if (searchTerm == '') {
                            return item
                        } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item
                        } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase()) === false) {

                        }

                    }).map((item) => < Item key={item.id} item={item} />)
                }

            </Row>

        </Container>
    )

}