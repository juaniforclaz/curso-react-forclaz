import { useContext } from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import Items from "../Items/Items"
import EmptyCart from "./EmptyCart"

export const Cart = () => {

    const { cart, totalPrice, vaciarCarrito, eliminarProd } = useContext(CartContext)

    if (cart.length === 0) return <EmptyCart />

    return (

        <Container className="vh-100 py-4">

            <Row>

                <Col>
                    <h2>Carrito</h2>
                </Col>

            </Row>

            <Row>

                <Col>

                    <Table responsive>

                        <thead>

                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Imagen</th>
                                <th>Eliminar</th>
                            </tr>

                        </thead>

                        <tbody>

                            {

                                cart.map((item) => (

                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td><span className="d-flex mx-auto">{item.cantidad}</span></td>
                                        <td>${item.price * item.cantidad}</td>
                                        <td><img src={item.img} className="img-cart" alt={item.title} /></td>
                                        <td><button onClick={() => eliminarProd(item.id)} className="btn btn-outline-dark p-2 d-flex">{Items.borrar}</button></td>
                                    </tr>
                                ))

                            }

                        </tbody>

                    </Table>

                </Col>

            </Row>

            <Row className="mt-3">

                <Col>
                    <h2>Detalle</h2>
                </Col>

            </Row>

            <Row>

                <Col>
                    <h5 className="opacity-50">El precio total es ${totalPrice()}</h5>
                </Col>

            </Row>

            <Row className="">

                <Col xl={2}>
                    <Link to={"/checkout"} className="btn btn-success mt-3">Terminar compra</Link>
                </Col>
                <Col xl={2}>
                    <button onClick={vaciarCarrito} className="btn btn-danger mx-2 mt-3">Vaciar Carrito</button>
                </Col>

            </Row>

        </Container>

    )
}