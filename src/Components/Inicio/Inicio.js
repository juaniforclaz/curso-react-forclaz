import { Container } from "react-bootstrap"
import { CatCardContainer } from "../CatCardContainer/CatCardContainer"
import { FirstCat } from "../FirstCat/FirstCat"
import { Hero } from "../Hero/Hero"
import { NewItems } from "../NewItems/NewItems"
import { SecondCat } from "../SecondCat/SecondCat"
import { TemplateModal } from "../TemplateModal/TemplateModal"
import { ThirdCat } from "../ThirdCat/ThirdCat"
import { motion } from "framer-motion"

export const Inicio = () => {

    return (

        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >

            <Hero />

            <Container>

                <TemplateModal />

                <CatCardContainer />

                <NewItems />

                <FirstCat />

                <SecondCat />

                <ThirdCat />

            </Container>

        </motion.div>

    )
}