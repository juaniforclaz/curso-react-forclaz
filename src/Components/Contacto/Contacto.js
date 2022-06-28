import { Container, Row } from "react-bootstrap"
import Items from "../Items/Items"
import { FormularioContacto } from "./FormularioContacto"


export const Contacto = () => {

    return (
        <Container className="py-4">
            <Row>
                <h2 className="opacity-50">Contacto</h2>
                <p className="bg-light p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue dolor. Curabitur id velit in risus varius consectetur. Integer molestie luctus est. Mauris vestibulum metus eget nunc suscipit ullamcorper. Aliquam a leo commodo, tempor dolor vel, consectetur ipsum. Sed tristique nulla in tempus sodales. Nam non neque mauris. Sed quis sollicitudin tellus. Donec non nulla eros. Etiam quis vulputate nunc. Morbi sit amet porta libero, quis imperdiet velit. Nam metus diam, auctor non iaculis eget, semper at sem. Cras auctor diam in nisi consequat dignissim. Vestibulum at congue est.</p>
                <p className="fs-1">
                    <span>{Items.instagram}</span>
                    <span className="mx-3">{Items.whatsapp}</span>
                </p>

            </Row>
            <Row>
                <FormularioContacto />
            </Row>

        </Container>
    )
}