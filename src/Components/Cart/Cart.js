import { useContext } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import Items from "../Items/Items"

export const Cart = () => {

    const { cart, totalPrice, vaciarCarrito, eliminarProd } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="vh-100 px-5 d-flex flex-column align-items-start">El carrito esta vacio
                <Link to={"/catalogo"}> <button className="btn btn-outline-success m-2">Ir al catalogo</button></Link></div>
        )
    }

    return (
        <Container className="vh-100">
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
                                        <td><img src={item.img} className="img-cart rounded" /></td>
                                        <td><button onClick={() => eliminarProd(item.id)} className="btn btn-outline-dark p-2 d-flex">{Items.borrar}</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <tbody>
                        <h5>El precio total es ${totalPrice()}</h5>
                        <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
                    </tbody>
                </Col>
            </Row>
        </Container>
    )
}