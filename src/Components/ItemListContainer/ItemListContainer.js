import { useEffect, useState } from "react"
import { Item } from "../Item/Item"
import { ItemList } from "../ItemList/ItemList"
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import { pedirDatos } from "../../Mock/PedirDatos"
import { useParams } from "react-router-dom"
import { ItemLoading } from "../ItemLoading/ItemLoading"


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if (!categoryId) {
                    setItems(resp)
                } else {
                    setItems(resp.filter((item) => item.categoria === categoryId))
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <section className="container">

            {
                loading
                    ?
                    <Container>
                        <Row>
                            <Col className="mb-3">
                                <ItemLoading />
                            </Col>
                            <Col className="mb-3">
                                <ItemLoading />
                            </Col>
                            <Col className="mb-3">
                                <ItemLoading />
                            </Col>
                            <Col className="mb-3">
                                <ItemLoading />
                            </Col>
                        </Row>

                        <ProgressBar animated now={50} />

                    </Container>

                    : <ItemList items={items} />
            }

        </section >
    )
}