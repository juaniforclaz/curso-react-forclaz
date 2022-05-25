import { useEffect, useState } from "react"

export const Counter = () => {
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    const incrementar1 = () => {
        setContador1(contador1 + 10)
    }

    const incrementar2 = () => {
        setContador2(contador2 + 20)
    }

    useEffect(() => {
        console.log('Montaje counter')

        return () => {
            console.log('Desmontaje counter')
        }
    }, [])

    useEffect(() => {
        console.log('Montaje counters')
    }, [contador1, contador2])

    useEffect(() => {
        console.log('Montaje counter 1')
    }, [contador1])

    useEffect(() => {
        console.log('Montaje counter 2')
    }, [contador2])


    return (
        <div className="bg-secondary bg-gradient bg-opacity-75 mt-5 p-4 rounded text-white">
            <h2>Counter</h2>
            <p onClick={incrementar1}>{contador1}</p>
            <hr></hr>
            <p onClick={incrementar2}>{contador2}</p>
        </div>
    )
}
