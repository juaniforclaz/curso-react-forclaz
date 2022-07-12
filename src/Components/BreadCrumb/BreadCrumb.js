import { Breadcrumb } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const BreadCrumb = (props) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (

        <Breadcrumb>

            <p className="breadcrumb-item" onClick={handleVolver}>Volver</p>
            <p className='breadcrumb-item active'>{props.producto}</p>

        </Breadcrumb>

    )
}