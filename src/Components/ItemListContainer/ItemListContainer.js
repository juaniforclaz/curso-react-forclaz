import { ItemList } from "../ItemList/ItemList"
import { ItemLoading } from "../ItemLoading/ItemLoading"
import { useProductos } from "./useProductos"

export const ItemListContainer = () => {

    const { items, loading } = useProductos()

    return (
        <section>

            {
                loading
                    ? <ItemLoading />

                    : <ItemList items={items} />
            }

        </section >
    )
}