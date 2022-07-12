import { Link } from "react-router-dom"

const EmptyCart = () => {

    return (

        <div className="container my-5">
            <div className="vh-100 px-5 d-flex flex-column align-items-start">
                <h3>El carrito esta vacio</h3>
                <h3>para agregar productos, dirigase al catalogo</h3>
                <Link to={"/catalogo"}><button className="btn btn-outline-success m-2">Ir al catalogo</button></Link>
            </div>
        </div>

    )
}



export default EmptyCart