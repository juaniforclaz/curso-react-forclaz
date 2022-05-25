import { useState, useEffect } from "react"

export const Counter2 = () => {

    const [contador1, setContador1] = useState({
        contador1: 1,
        fyh: new Date()
    })


    const incrementar1 = () => {
        setContador1({
            contador1: contador1.contador1 + 1,
            fyh: new Date()
        })
    }

    useEffect(() => {
        console.log('componente montado')
    }, [])

    useEffect(() => {
        console.log('componente montado')
    }, [])

    return (
        <div onClick={incrementar1} className="bg-secondary bg-gradient bg-opacity-75 mt-5 p-4 rounded text-white">
            <h2>Counter</h2>
            <p>{contador1.contador1}</p>
            <hr></hr>
            <p>Fecha y hora del ultimo click: {contador1.fyh.toLocaleString()}</p>
        </div>
    )
}
