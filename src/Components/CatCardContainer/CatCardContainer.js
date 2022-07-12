import { Col, Container, Row } from "react-bootstrap"
import Imagenes from "../../Img/Imagenes"
import { CatCard } from "../CatCard/CatCard"


export const CatCardContainer = () => {

    return (

        <Container>

            <Row className="mt-5">

                <h3 className="text-center p-3 mb-0">Categorias destacadas</h3>

                <Col lg={4}>
                    <CatCard srce={Imagenes.cat1} title='odontologia' cat='bolso-odo-uba' button='Ver mas' />
                </Col>

                <Col lg={4}>
                    <CatCard srce={Imagenes.cat2} title='mochilas' cat='mochila' button='Ver mas' />
                </Col>

                <Col lg={4}>
                    <CatCard srce={Imagenes.cat3} title='carteras' cat='cartera' button='Ver mas' />
                </Col>
                
            </Row>

        </Container>

    )
}