import { useEffect, useState } from "react"
import { Item } from "../Item/Item"
import { ItemList } from "../ItemList/ItemList"
import { Container, Row, Col } from "react-bootstrap"
import { ItemLoading } from "../ItemLoading/ItemLoading"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/Config"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <section className="container my-3 vh-100">

            {
                loading
                    ? <ItemLoading />
                    : <ItemDetail item={item} />
            }

        </section>
    )
}