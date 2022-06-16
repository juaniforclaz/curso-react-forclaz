import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { pedirDatos } from "../../Mock/PedirDatos"
import { useParams } from "react-router-dom"
import { ItemLoadingContainer } from "../ItemLoadingContainer/ItemLoadingContainer"


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
        <section>

            {
                loading
                    ? <ItemLoadingContainer/>

                    : <ItemList items={items} />
            }

        </section >
    )
}