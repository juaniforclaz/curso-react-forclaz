import { Container } from "react-bootstrap"
import { CatCardContainer } from "../CatCardContainer/CatCardContainer"
import { FirstCat } from "../FirstCat/FirstCat"
import { Hero } from "../Hero/Hero"
import { NewItems } from "../NewItems/NewItems"
import { SecondCat } from "../SecondCat/SecondCat"
import { TemplateModal } from "../TemplateModal/TemplateModal"
import { ThirdCat } from "../ThirdCat/ThirdCat"

export const Inicio = () => {

    return (

        <>
            <Hero />

            <Container>
                <TemplateModal/>
                <CatCardContainer />
                <NewItems />
                <FirstCat />
                <SecondCat />
                <ThirdCat />
            </Container>

        </>
    )
}