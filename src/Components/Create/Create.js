import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Row, Container, Col } from "react-bootstrap"
import { db } from "../../Firebase/Config"
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Firebase/Config"


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

    const [progress, setProgress] = useState(0)

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

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

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes * 100)
            )
            setProgress(prog)
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => setImg(url))
            })
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
                            <label className="input-group-text">Categoria</label>
                            <select onChange={(e) => setCat(e.target.value)} className="form-select text-uppercase">
                                <option defaultValue={categoria}>Seleccionar</option>
                                <option value={"bolso-odo-uba"}>Odonto</option>
                                <option value={"mochila"}>Mochila</option>
                                <option value={"cartera"}>Cartera</option>
                                <option value={"riñonera"}>Riñonera</option>
                                <option value={"bandolera"}>bandolera</option>
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
                        <div className="input-group mb-3 border">
                            <label className="input-group-text">Nuevo</label>
                            <select onChange={(e) => setNuevo(e.target.value)} className="form-select text-uppercase">
                                <option defaultValue={false}>No</option>
                                <option value={true}>Si</option>
                            </select>
                        </div>
                        <div className="input-group mb-3 border">
                            <span className="input-group-text">Imagen</span>
                            <input
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                    <form className="mt-3" onSubmit={formHandler}>
                        <div className="input-group mb-3 border">
                            <label className="input-group-text" for="inputGroupFile01">Imagen %{progress}</label>
                            <input type="file" className="form-control" />
                            <button type="submit" className="btn btn-info">Subir foto</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>

    )
}