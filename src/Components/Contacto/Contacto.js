import { Container, Row } from "react-bootstrap"
import Items from "../Items/Items"
import { useState } from "react"

export const Contacto = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Container>
            <h2 className="opacity-50">Contacto</h2>
            <p className="bg-light p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue dolor. Curabitur id velit in risus varius consectetur. Integer molestie luctus est. Mauris vestibulum metus eget nunc suscipit ullamcorper. Aliquam a leo commodo, tempor dolor vel, consectetur ipsum. Sed tristique nulla in tempus sodales. Nam non neque mauris. Sed quis sollicitudin tellus. Donec non nulla eros. Etiam quis vulputate nunc. Morbi sit amet porta libero, quis imperdiet velit. Nam metus diam, auctor non iaculis eget, semper at sem. Cras auctor diam in nisi consequat dignissim. Vestibulum at congue est.</p>
            <p className="fs-1">
                <span>{Items.instagram}</span>
                <span className="mx-3">{Items.whatsapp}</span>
            </p>

            <form onSubmit={handleSubmit}>
                <h4>Datos personales</h4>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    placeholder="Nombre"
                    type={'text'}
                    className="form-control my-2"
                />

                <input
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    type={'email'}
                    className="form-control my-2"
                />

                <input
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    placeholder="Dirección"
                    type={'text'}
                    className="form-control my-2"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>
        </Container>
    )
}