
import { Container } from "react-bootstrap"
import { CatCardContainer } from "../CatCardContainer/CatCardContainer"
import { Hero } from "../Hero/Hero"
import { NewItemsContainer } from "../NewItemsContainer/NewItemsContainer"
import { TemplateModal } from "../TemplateModal/TemplateModal"

export const Inicio = () => {
    return (

        <>
            <Hero />

            <Container>
                <TemplateModal />
                <CatCardContainer />
                <NewItemsContainer />
            </Container>

        </>
    )
}