import { Button } from "react-bootstrap"

export const Card = (props) => {

    return (

        <section className="bg-secondary bg-gradient bg-opacity-75 mt-5 p-4 rounded text-white">
            <h4 className="mt-1 text-uppercase">{props.title}</h4>
            <h6 className="mt-1 text-uppercase">{props.subtitle}</h6>
            <Button className="mt-1 text-uppercase btn btn-success">{props.button}</Button>
        </section>
    
    )
}