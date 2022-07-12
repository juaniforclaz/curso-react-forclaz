import { Container, Row } from "react-bootstrap"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/Config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Item } from "../Item/Item"
import { ItemLoading } from "../ItemLoading/ItemLoading"

export const ThirdCat = () => {

    const ThirdCat = "bandolera"

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("categoria", "==", `${ThirdCat}`))

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

            <h3 className="text-center p-3">{ThirdCat}S</h3>

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