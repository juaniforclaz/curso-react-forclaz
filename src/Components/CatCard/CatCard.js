import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Imagenes from "../../Img/Imagenes"

export const CatCard = (props) => {

    return (

        <section className="bg-light border border-1 mt-5 p-4 rounded text-white">
            <img src={props.srce} className="img-cat-card rounded"></img>
            <h4 className="mt-2 text-capitalize text-dark">{props.title}</h4>
            <h6 className="text-capitalize text-dark">{props.subtitle}</h6>
            <Link to={`/categoria/${props.cat}`}>
                <Button className="mt-1 btn btn-secondary">{props.button}</Button>
            </Link>
        </section >

    )
}