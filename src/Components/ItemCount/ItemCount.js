import { useState } from "react"

export const ItemCount = ({ stock, initial }) => {

    const [cant, setCant] = useState(initial)

    return (
        <div className="text-center p-2 my-3 bg-light rounded border border-1">
            <p>Cantidad seleccionada: <span>{cant}</span></p>
            <button
                className="btn btn-success mx-2 w-25"
                onClick={() => setCant(cant + 1)}
                disabled={cant > stock}>+</button>
            <button
                className="btn btn-danger w-25"
                onClick={() => setCant(cant - 1)}
                disabled={cant === 0}>-</button>
        </div>
    )
}