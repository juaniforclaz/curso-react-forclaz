import { useEffect, useState } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import { Item } from "../Item/Item"
import { NavCatalogo } from "../NavCatalogo/NavCatalogo"
import Items from "../Items/Items"
import { ItemLoading } from "../ItemLoading/ItemLoading"

export const ItemList = ({ items }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const [stateSearch, setStateSearch] = useState('false')

    return (
        <Container className="item-list">

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
                            document.querySelector('.search').textContent = 'Producto no encontrado'

                        }

                    }).map((item) => < Item key={item.id} item={item} />)
                }

                <h4 className="search text-center mt-2 text-danger"></h4>

            </Row>
        </Container>
    )

}