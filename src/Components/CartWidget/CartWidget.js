import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import Items from "../Items/Items"

export const CartWidget = () => {
    const { cart, totalCant } = useContext(CartContext)

    if (totalCant() >= 1) {
        return (
            <Link to={'/cart'} className="nav-link">
                <span className="d-flex align-items-center mx-3">{Items.carrito}{totalCant()}</span>
            </Link>
        )
    }

}