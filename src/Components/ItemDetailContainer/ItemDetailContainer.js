import { useEffect, useState } from "react"
import { Item } from "../Item/Item"
import { ItemList } from "../ItemList/ItemList"
import { Container, Row, Col } from "react-bootstrap"
import { ItemLoading } from "../ItemLoading/ItemLoading"
import { pedirDatos } from "../../Mock/PedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItem(resp.find((item) => item.id === Number(itemId)))
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5 vh-100">

            {
                loading
                    ?
                    <Container className="vh-100">
                        <Row className="mt-3">
                            <Col className="mb-3">
                                <ItemLoading />
                            </Col>

                        </Row>
                    </Container>

                    : <ItemDetail item={item} />
            }

        </section>
    )
}