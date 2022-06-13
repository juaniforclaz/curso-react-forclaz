import { Container } from "react-bootstrap"
import { CatCardContainer } from "../CatCardContainer/CatCardContainer"
import { Hero } from "../Hero/Hero"

export const Inicio = () => {
    return (

        <Container>
            <Hero />
            <CatCardContainer />
            {/*
            <div className='row mb-5'>
                <div className='col'>
                    <Counter />
                </div>
                <div className='col'>
                    <Counter2 />
                </div>
            </div>
            <div className='row mb-5'>
                <button className='btn btn-danger' onClick={mostrarCounter}>Mostrar/Ocultar</button>
            </div> */}
        </Container>
    )
}