import { Container, Row } from "react-bootstrap"
import Items from "../Items/Items"
import { FormularioContacto } from "./FormularioContacto"
import { motion } from 'framer-motion'

export const Contacto = () => {

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >

            <Container className="py-4">

                <Row>

                    <h2 className="opacity-50">Contacto</h2>
                    <p className="bg-light p-3">SOFRA es un micro emprendimiento familiar, el nombre
                        está dedicado a mis dos amores que son el motor de
                        la vida de toda madre, cada uno tiene un rol... Mamá
                        diseña y elabora, amore mayor se ocupa de
                        presupuestos y fotografía, amore menor de las redes
                        sociales de
                        Este proyecto es algo que siempre sobrevoló en mi
                        vida, a pesar de tener una profesión que nada tiene
                        que ver, como cable a tierra desde muy pequeña me
                        sentaba a coser mi propia ropa, mi pasión: el mundo de
                        las telas
                        Hace un tiempo me decidí y aquí estamos,
                        comenzando un camino lleno de amor, ilusiones,
                        aprendizajes... dejando volar la imaginación que
                        quedará plasmada en cada una de los sobres, carteras,
                        accesorios y más.... Bienvenido mundo SOFRA,
                        bienvenida a cada una de nuestras mujeres, amigas.</p>
                    <p className="fs-1">
                        <span><a href='https://www.instagram.com/sofra.ok/?igshid=YmMyMTA2M2Y%3D' className='text-decoration-none' target={"_blank"}>{Items.instagram}</a></span>
                        <span className="mx-3"><a className="text-decoration-none" href="whatsapp://send?text=Hola! queria consultar por un modelo de la tienda online! &phone=+5491165557922">{Items.whatsapp}</a></span>
                    </p>

                </Row>

                <Row>
                    <FormularioContacto />
                </Row>

            </Container>

        </motion.div>
    )
}