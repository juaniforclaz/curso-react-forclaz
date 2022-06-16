import { Container, Row, Col } from "react-bootstrap"
import { ItemLoading } from "../ItemLoading/ItemLoading"

export const ItemLoadingContainer = () => {

    return (

        <Container className="vh-100">

            <Row className="mt-3">
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
            </Row>

            <Row>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
                <Col className="mb-3">
                    <ItemLoading />
                </Col>
            </Row>

        </Container>
    )
}