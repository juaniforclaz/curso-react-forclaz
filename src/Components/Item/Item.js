import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from '../../Context/AuthContext';
import { collection, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase/Config"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const Item = ({ item }) => {

    const navigate = useNavigate()

    const { auth } = useAuthContext()

    const productosRef = collection(db, "productos")

    const deleteProduct = async (id) => {

        const productDoc = doc(db, "productos", id)
        await deleteDoc(productDoc)
        navigate('/catalogo')

    }

    const confirmDelete = (id) => {

        MySwal.fire({
            title: '¿Eliminar el producto?',
            text: "No hay vuelta atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                //llamamos a la fcion para eliminar   
                deleteProduct(id)
                Swal.fire(
                    'Eliminado',
                    'El producto se elimino correctamente',
                    'success'
                )
            }
        })

    }

    return (

        <Card className="mx-auto mb-3 card-item">

            <Card.Body className="col">

                <Badge className="position-absolute top-0 start-100 translate-middle p-1" bg="danger">{item.nuevo ? 'Nuevo' : ''}</Badge>
                <Card.Img src={item.img} className="mb-3 img-item" alt={item.title}></Card.Img>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>

                {
                    auth.loggedIn
                        ?
                        <>
                            <Button variant="danger" onClick={() => { confirmDelete(item.id) }}>Borrar</Button>
                            <Link to={`/edit/${item.id}`}><Button variant="info">Editar</Button></Link>
                        </>
                        : ''
                }

                <Link to={`/item/${item.id}`}>
                    <Button variant="success" className="mt-3">Ver más</Button>
                </Link>

            </Card.Body>

        </Card >
    )
}