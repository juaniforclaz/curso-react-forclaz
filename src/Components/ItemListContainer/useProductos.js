import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/Config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const useProductos = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef

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

    return {
        items, loading
    }

}