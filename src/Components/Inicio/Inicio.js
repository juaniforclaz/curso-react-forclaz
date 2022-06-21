import { Container } from "react-bootstrap"
import { CatCardContainer } from "../CatCardContainer/CatCardContainer"
import { Hero } from "../Hero/Hero"
import { NewItemsContainer } from "../NewItemsContainer/NewItemsContainer"

export const Inicio = () => {
    return (

        <>
            <Hero />

            <Container>
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
                <NewItemsContainer />
            </Container>

        </>
    )
}