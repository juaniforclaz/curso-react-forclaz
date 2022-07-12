import { createContext, useState, useContext } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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
        MySwal.fire({
            title: '¿Seguro que desea vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
                Swal.fire(
                    'Eliminado',
                    'El carrito se vacio correctamente',
                    'success'
                )
            }
        })
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
