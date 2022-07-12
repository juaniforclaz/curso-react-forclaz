import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const CatCard = (props) => {

    return (

        <div className="bg-light border border-1 p-4 rounded text-white my-2">
            <img src={props.srce} className="img-cat-card rounded"></img>
            <h4 className="mt-2 text-dark">{props.title}</h4>
            <h6 className="text-dark">{props.subtitle}</h6>
            <Link to={`/categoria/${props.cat}`}>
                <Button className="mt-1 btn btn-primary">{props.button}</Button>
            </Link>
        </div >

    )
}