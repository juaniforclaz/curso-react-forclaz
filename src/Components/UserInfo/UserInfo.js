import { createElement } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useAuthContext } from "../../Context/AuthContext"
import Items from "../Items/Items"

export const UserInfo = () => {

    const { auth, logout } = useAuthContext()

    const ocultar = () => {
        document.querySelector('.user-id').classList.add('d-none')
        document.querySelector('.mostrar').classList.remove('d-none')

    }

    const mostrar = () => {
        document.querySelector('.user-id').classList.remove('d-none')
        document.querySelector('.mostrar').classList.add('d-none')

    }

    return (

        <div className="container-fluid mb-3 mt-0">
            <Row>
                <Col className="user-id d-flex align-items-center justify-content-start justify-content-start">
                    <span className="text-success">Bienvenido {auth.userId}</span>
                    <button onClick={logout} className="btn">{Items.logout}</button>
                    <button onClick={ocultar} className="btn">{Items.ocultar}</button>
                </Col>
                <Col>
                    <button onClick={mostrar} className="mostrar d-none btn">{Items.mostrar}</button>
                </Col>
            </Row>
        </div>

    )
}