import { Col, Row } from "react-bootstrap"
import { useAuthContext } from "../../Context/AuthContext"
import Items from "../Items/Items"

export const UserInfo = () => {

    const { auth, logout } = useAuthContext()

    return (

        <div className="container-fluid mb-3 mt-0">

            <Row>

                <Col className="user-id d-flex align-items-center justify-content-start justify-content-start">
                    <span className="text-success">Bienvenido {auth.userId}</span>
                    <button onClick={logout} className="btn">{Items.logout}</button>
                </Col>

            </Row>

        </div>

    )
}