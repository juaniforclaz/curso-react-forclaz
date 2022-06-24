import { ItemList } from "../ItemList/ItemList"
import { ItemLoadingContainer } from "../ItemLoadingContainer/ItemLoadingContainer"
import { useProductos } from "./useProductos"

export const ItemListContainer = () => {

    const { items, loading } = useProductos()

    return (
        <section>

            {
                loading
                    ? <ItemLoadingContainer />

                    : <ItemList items={items} />
            }

        </section >
    )
}