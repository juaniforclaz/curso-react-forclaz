import { Container, Col, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getDocs, collection, where, query, doc } from 'firebase/firestore'
import { db } from '../../Firebase/Config'

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

    return (
        <Container className=''>
            <p className='fs-2'>Ordenes</p>

            {
                orders.map((orders) =>
                    <>
                        <h4 className='mt-3'>{orders.id}</h4>
                        <Row className='bg-light mb-2 p-3' key={orders.id}>
                            <Col>
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
                            <Col>

                                {

                                    orders.items.forEach((element) => {
                                        if (orders.items.length === 1) {
                                            orders.items.cantidad = element.cantidad
                                            orders.items.title = element.title
                                        }
                                        if (orders.items.length > 1) {
                                            orders.items.title = element.cantidad + ' ' + element.title
                                            console.log(element.cantidad + ' ' + element.title)
                                        }
                                    })

                                }
                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>cantidad de producto/s:</p>
                                    <span className='mx-2'>{orders.items.length}</span>
                                </div>
                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>producto/s:</p>
                                    <span className='mx-2'>{orders.items.title}</span>
                                </div>
                                <div className='d-flex'>
                                    <p className='border-bottom border-2'>Total:</p>
                                    <span className='mx-2'>${orders.total}</span>
                                </div>
                            </Col>
                        </Row>
                    </>
                )
            }

        </Container >
    )
}