import { DropdownButton, Dropdown } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

export const NavCatalogo = () => {

    const { categoryId } = useParams()

    return (

        <DropdownButton id="dropdown-basic-button" title={categoryId ? categoryId : 'Categorias'} variant="light">

            <Dropdown.Item>
                <Link to={'/categoria/mochila'} className="nav-link text-primary text-uppercase">Mochilas</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/categoria/riñonera'} className="nav-link text-primary text-uppercase">Riñoneras</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/categoria/bolso-odo-uba'} className="nav-link text-primary text-uppercase">Odontologia</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/categoria/cartera'} className="nav-link text-primary text-uppercase">Carteras</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/categoria/bandolera'} className="nav-link text-primary text-uppercase">Bandolera</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/catalogo'} className="nav-link text-primary text-uppercase">Ver todo</Link>
            </Dropdown.Item>

        </DropdownButton>

    )
}