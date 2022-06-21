import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { pedirDatos } from "../../Mock/PedirDatos"
import { useParams } from "react-router-dom"
import { ItemLoadingContainer } from "../ItemLoadingContainer/ItemLoadingContainer"
import { NewItems } from "../NewItems/NewItems"
import { Col, Container, Row } from "react-bootstrap"


export const NewItemsContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((resp) => {
                if (items.nuevo) {
                    setItems(resp)
                } else {
                    setItems(resp.filter((item) => item.nuevo === true))
                }

            })
    }, [])

    return (
        <Container className="mt-5">
            <h4 className="mb-3 text-center">Productos nuevos</h4>
            <NewItems items={items} />

        </Container>
    )

}