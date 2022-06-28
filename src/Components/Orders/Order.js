export const Order = ({ items }) => {
    return (

        {
            items.map => ((item) => <p>{item.buyer.direccion}</p>)
        }

    )
}