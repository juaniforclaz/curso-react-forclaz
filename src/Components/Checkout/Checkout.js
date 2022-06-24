
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, getDocs, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../Firebase/Config"


export const Checkout = () => {

    const { cart, totalPrice, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            alert("El nombre es demasiado corto")
            return
        }
        if (values.email.length < 5) {
            alert("El email es inválido")
            return
        }
        if (values.direccion.length < 5) {
            alert("La dirección no es correcta")
            return
        }

        const orden = {
            buyer: values,
            items: cart.map(({ id, cantidad, title, price }) => ({ id, cantidad, title, price })),
            total: totalPrice()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }

        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            console.log(outOfStock)
            alert("Hay items sin stock")
        }
    }

    if (orderId) {
        return (
            <div className="container my-5 vh-100">
                <h2>Gracias por su compra!</h2>
                <hr />
                <p>Su número de orden es: {orderId}</p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="John Doe"
                    className="form-control my-2"
                />
                <input
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="email@example.com"
                    className="form-control my-2"
                />
                <input
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Calle falsa 123"
                    className="form-control my-2"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>
            <button onClick={emptyCart} className="btn btn-danger my-2">Cancelar mi compra</button>
        </div>
    )

}