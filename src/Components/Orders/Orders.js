import { Container, Col, Row, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../Firebase/Config'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const ordersRef = collection(db, "orders")

        getDocs(ordersRef)
            .then((resp) => {
                const newOrders = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        items: doc.items,
                        buyer: doc.buyer,
                        ...doc.data()
                    }
                })
                setOrders(newOrders)

            })
    }, [])

    const navigate = useNavigate()

    const deleteProduct = async (id) => {

        const orderDoc = doc(db, "orders", id)
        await deleteDoc(orderDoc)
        navigate('/')

    }

    const confirmDelete = (id) => {

        MySwal.fire({
            title: '¿Eliminar el producto?',
            text: "No hay vuelta atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                Swal.fire(
                    'Eliminado',
                    'La orden se elimino correctamente',
                    'success'
                )
            }
        })

    }

    return (

        <Container>

            <p className='fs-2'>Ordenes</p>

            {

                orders.map((orders) =>

                    <div>

                        <Row className='bg-light mb-2 p-3'>

                            <Col className=''>

                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>Id:</p>
                                    <span className='mx-2'>{orders.id}</span>
                                </div>

                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>Nombre:</p>
                                    <span className='mx-2'>{orders.buyer.nombre}</span>
                                </div>

                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>Email:</p>
                                    <span className='mx-2'>{orders.buyer.email}</span>
                                </div>

                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>Direccion:</p>
                                    <span className='mx-2'>{orders.buyer.direccion}</span>
                                </div>

                            </Col>

                            <Col className=''>

                                {

                                    orders.items.map(product => (
                                        <div className=''>
                                            <div className='d-flex'>
                                                <p className='border-bottom border-2'>Nombre:</p>
                                                <span className='mx-2'>{product.title}</span>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='border-bottom border-2'>cantidad:</p>
                                                <span className='mx-2'>{product.cantidad}</span>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='border-bottom border-2'>Precio:</p>
                                                <span className='mx-2'>$ {product.price}</span>
                                            </div>
                                        </div>
                                    ))

                                }

                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>Precio total:</p>
                                    <span className='mx-2'>$ {orders.total}</span>
                                </div>

                                <Row className='text-end'>

                                    <Col>
                                        <Button variant='success' onClick={() => { confirmDelete(orders.id) }}>Listo</Button>
                                    </Col>

                                </Row>

                            </Col>

                        </Row>

                    </div>
                )

            }

        </Container >
    )
}