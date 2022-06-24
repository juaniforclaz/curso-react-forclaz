import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.price * prod.cantidad), 0)
    }

    const totalCant = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarProd = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                addItem,
                isInCart,
                totalPrice,
                totalCant,
                vaciarCarrito,
                eliminarProd
            }
        }>
            {children}
        </CartContext.Provider>
    )
}
