import { Breadcrumb } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"


export const BreadCrumb = (props) => {

    const navigate = useNavigate()

    const handleVolver1 = () => {
        navigate(-1)
    }

    return (
        <Breadcrumb>

            <Breadcrumb.Item onClick={handleVolver1}>Volver</Breadcrumb.Item>
            <Breadcrumb.Item onClick={handleVolver1}>{props.producto}</Breadcrumb.Item>

        </Breadcrumb>
    )
}