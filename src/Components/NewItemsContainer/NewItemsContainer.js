import { ItemList } from "../ItemList/ItemList"
import { NewItems } from "../NewItems/NewItems"
import { Col, Container, Row } from "react-bootstrap"
import { useProductos } from "../ItemListContainer/useProductos"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/Config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const NewItemsContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("nuevo" , "==", true))

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
            <h4 className="mb-3 text-center">Productos nuevos</h4>
            <NewItems items={items} />

        </Container>
    )

}