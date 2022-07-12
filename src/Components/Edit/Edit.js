import { doc, updateDoc, getDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/Config"
import { useEffect } from "react"
import { storage } from "../../Firebase/Config"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const Edit = () => {

    const [title, setTitle] = useState('')
    const [categoria, setCat] = useState('')
    const [desc, setDesc] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')
    const [nuevo, setNuevo] = useState(false)

    const navigate = useNavigate()

    const { itemId } = useParams()

    const [progress, setProgress] = useState(0)

    const update = async (e) => {

        e.preventDefault()
        const product = doc(db, "productos", id)
        const data = {
            title: title,
            categoria: categoria,
            desc: desc,
            stock: stock,
            price: price,
            img: img,
            nuevo: nuevo
        }
        await updateDoc(product, data)
        navigate('/catalogo')

    }

    const getProductById = async (id) => {

        const product = await getDoc(doc(db, "productos", id))
        if (product.exists()) {
            setDesc(product.data().desc)
            setStock(product.data().stock)
            setTitle(product.data().title)
            setPrice(product.data().price)
            setNuevo(product.data().nuevo)
            setImg(product.data().img)
            setCat(product.data().categoria)
        } else {
            MySwal.fire({
                title: 'Alerta',
                text: 'El producto no existe',
                icon: 'warning'
            })
        }

    }

    useEffect(() => {
        getProductById(itemId)
    }, [])

    const formHandler = (e) => {

        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);

    };

    const uploadFiles = (file) => {

        if (!file) return;

        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes * 100)
            )
            setProgress(prog)
        }, (err) => window.location.reload(),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => setImg(url))
            })

    }

    return (

        <div className='container'>

            <div className='row'>

                <div className='col'>

                    <h1>Editar</h1>

                    <form onSubmit={update} className='text-uppercase'>

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
                            <label className="input-group-text ">Categoria</label>
                            <select onChange={(e) => setCat(e.target.value)} className="form-select text-uppercase">
                                <option value={categoria}>{categoria}</option>
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
                                <option defaultValue={{ nuevo }}>{nuevo}</option>
                                <option value={"true"}>Si</option>
                                <option value={"false"}>no</option>
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

                        <button type='submit' className='btn btn-primary'>Update</button>

                    </form>

                    <form className="mt-3" onSubmit={formHandler}>

                        <div className="input-group mb-3 border">
                            <label className="input-group-text">Imagen %{progress}</label>
                            <input type="file" className="form-control" />
                            <button type="submit" className="btn btn-info">Subir foto</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}