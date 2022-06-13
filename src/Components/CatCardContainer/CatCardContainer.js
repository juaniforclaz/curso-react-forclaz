import { Col, Container, Row } from "react-bootstrap"
import Imagenes from "../../Img/Imagenes"
import { CatCard } from "../CatCard/CatCard"

export const CatCardContainer = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <CatCard srce={Imagenes.cat1} title='Odontologia' cat='bolso-odo-uba' subtitle='Categoria 1' button='Ver mas' />
                </Col>
                <Col lg={4}>
                    <CatCard srce={Imagenes.cat2} title='mochilas' cat='mochila' subtitle='Categoria 2' button='Ver mas' />
                </Col>
                <Col lg={4}>
                    <CatCard srce={Imagenes.cat3} title='Cartera' cat='cartera' subtitle='Categoria 3' button='Ver mas' />
                </Col>
            </Row>
        </Container>
    )
}