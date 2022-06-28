import { doc, updateDoc, getDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/Config"
import { useEffect } from "react"

export const Edit = () => {

    const [title, setTitle] = useState('')
    const [categoria, setCat] = useState('')
    const [desc, setDesc] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')
    const [nuevo, setNuevo] = useState(false)

    const navigate = useNavigate()

    const { id } = useParams()

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
        navigate('/')
    }

    const getProductById = async (id) => {
        const product = await getDoc(doc(db, "productos", id))
        if (product.exists()) {
            console.log(product.data())
            setDesc(product.data().desc)
            setStock(product.data().stock)
            setTitle(product.data().title)
            setPrice(product.data().price)
            setNuevo(product.data().nuevo)
            setImg(product.data().img)
            setCat(product.data().categoria)
        } else {
            console.log('El producto no existe')
        }
    }

    useEffect(() => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    
                    <h1>Editar</h1>

                    <form onSubmit={update}>
                        <div class="input-group mb-3 border">
                            <span class="input-group-text">Nombre</span>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div class="input-group mb-3 border">
                            <span class="input-group-text">Descripcion</span>
                            <input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div class="input-group mb-3 border">
                            <label class="input-group-text" for="inputGroupSelect01">Categoria</label>
                            <select onChange={(e) => setCat(e.target.value)} class="form-select">
                                <option value={categoria}>{categoria}</option>
                                <option value={"bolso-odo-uba"}>Odonto</option>
                                <option value={"mochila"}>Mochila</option>
                                <option value={"cartera"}>Cartera</option>
                                <option value={"riñonera"}>Riñonera</option>
                            </select>
                        </div>
                        <div class="input-group mb-3 border">
                            <span class="input-group-text">Stock</span>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div class="input-group mb-3 border">
                            <span class="input-group-text">Precio</span>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div class="input-group mb-3">
                            <span className="input-group-text">Nuevo</span>
                            <div class="input-group-text">
                                <input
                                    class="form-check-input mt-0"
                                    type="checkbox"
                                    value={true}
                                    onChange={(e) => setNuevo(e.target.value)}
                                    aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <div class="input-group mb-3 border">
                            <label class="input-group-text" for="inputGroupFile01">Imagen</label>
                            <input type="file" class="form-control" id="inputGroupFile01" />
                        </div>
                        <button type='submit' className='btn btn-primary'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}