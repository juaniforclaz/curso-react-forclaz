import { ItemList } from "../ItemList/ItemList"
import { NewItems } from "../NewItems/NewItems"
import { Col, Container, Row } from "react-bootstrap"
import { useProductos } from "../ItemListContainer/useProductos"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/Config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Item } from "../Item/Item"
import { ItemLoading } from "../ItemLoading/ItemLoading"

export const SecondCat = () => {
    const FirstCat = "mochila"

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("categoria", "==", `${FirstCat}`))

        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(newItems)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <Container className="mt-5">
            <h3 className="p-3 text-center">{FirstCat}S</h3>
            <Row>
                {
                    loading
                        ? <ItemLoading />
                        : items.map((item) => < Item key={item.id} item={item} />)
                }
            </Row>
        </Container>
    )
}