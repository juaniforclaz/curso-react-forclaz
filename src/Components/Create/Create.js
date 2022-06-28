import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Row, Container, Col } from "react-bootstrap"
import { db } from "../../Firebase/Config"


export const Create = () => {

    const [title, setTitle] = useState('')
    const [categoria, setCat] = useState('')
    const [desc, setDesc] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')
    const [nuevo, setNuevo] = useState(false)

    const navigate = useNavigate()

    const productosRef = collection(db, "productos")

    const store = async (e) => {

        e.preventDefault()
        await addDoc(productosRef, {
            title: title,
            categoria: categoria,
            desc: desc,
            stock: stock,
            price: price,
            img: img,
            nuevo: nuevo
        })
        navigate('/catalogo')
    }



    return (
        <Container>
            <Row>
                <Col>
                    <h3>Crear</h3>
                    <form onSubmit={store}>
                        <div className="input-group mb-3 border">
                            <span className="input-group-text">Nombre</span>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3 border">
                            <span className="input-group-text">Descripcion</span>
                            <input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3 border">
                            <label className="input-group-text" for="inputGroupSelect01">Categoria</label>
                            <select onChange={(e) => setCat(e.target.value)} className="form-select">
                                <option selected>Seleccionar</option>
                                <option value={"bolso-odo-uba"}>Odonto</option>
                                <option value={"mochila"}>Mochila</option>
                                <option value={"cartera"}>Cartera</option>
                                <option value={"riñonera"}>Riñonera</option>
                            </select>
                        </div>
                        <div className="input-group mb-3 border">
                            <span className="input-group-text">Stock</span>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3 border">
                            <span className="input-group-text">Precio</span>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Nuevo</span>
                            <div className="input-group-text">
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={true}
                                    onChange={(e) => setNuevo(e.target.value)}
                                    aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <div className="input-group mb-3 border">
                            <label className="input-group-text" for="inputGroupFile01">Imagen</label>
                            <input type="file" className="form-control" id="inputGroupFile01" />
                        </div>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </Col>
            </Row>
        </Container>

    )
}