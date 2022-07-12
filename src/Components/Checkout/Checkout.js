import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link, Navigate } from 'react-router-dom'
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../Firebase/Config"
import { Formik } from "formik"
import * as Yup from 'yup'
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Es necesario completar este campo')
        .min(4, 'El nombre es demasiado corto'),
    email: Yup.string()
        .required('Es necesario completar este campo')
        .email('Formato de email inválido'),
    direccion: Yup.string()
        .required('Es necesario completar este campo')
        .min(4, 'La dirección es demasiado corta')
})

export const Checkout = () => {

    const { cart, totalPrice, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {

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
                    vaciarCarrito()
                })
        } else {
            MySwal.fire({
                title: 'Alerta',
                text: 'El producto no tiene stock',
                icon: 'warning'
            })
        }
    }

    if (orderId) {
        return (

            <div className="container my-5 vh-100">
                <h2>Gracias por su compra!</h2>
                <hr />
                <p>Su número de orden es: {orderId}</p>
                <p className="text-danger">IMPORTANTE: Guardá tu numero de orden porque te lo pediremos a la hora de entregar el pedido</p>
                <p className="text-primary">nos pondremos en contacto cuando tengamos todo listo!</p>
                <Link to={'/'}><Button>Ir al nicio</Button></Link>
                <Link to={'/catalogo'} className="mx-3"><Button variant="success">Ver mas productos</Button></Link>
                <Link to={'/contacto'}><Button variant="cyan">Contacta con nosotros</Button></Link>
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

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    direccion: ''
                }}
                onSubmit={generarOrden}
                validationSchema={schema}
            >

                {(formik) => (

                    <form onSubmit={formik.handleSubmit}>

                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Nombre"
                            className="form-control my-2"
                        />
                        {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}

                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Email"
                            className="form-control my-2"
                        />
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Direccion"
                            className="form-control my-2"
                        />
                        {formik.errors.direccion && <p className="alert alert-danger">{formik.errors.direccion}</p>}

                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </form>

                )}

            </Formik>

            <button onClick={vaciarCarrito} className="btn btn-danger my-2">Cancelar mi compra</button>

        </div>

    )
}