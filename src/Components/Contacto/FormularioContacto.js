import { Formik } from "formik"
import * as Yup from 'yup'
import { useRef } from "react";
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Es necesario completar este campo')
        .min(4, 'El nombre es demasiado corto'),
    email: Yup.string()
        .required('Es necesario completar este campo')
        .email('Formato de email inválido'),
    telefono: Yup.string()
        .required('Es necesario completar este campo')
        .min(8, 'El numero es demasiado corto'),
    mensaje: Yup.string()
        .required('Es necesario completar este campo')
        .min(4, 'Por favor, escriba un mensaje coherente')
})

export const FormularioContacto = () => {

    const form = useRef();

    const handleSubmit = (e) => {

        emailjs.sendForm('service_9tvi5wn', 'template_fb8yqkz', form.current, '7FyRTlEA_J40jvcyh')
            .then((result) => {
                MySwal.fire({
                    title: 'El mensaje se envió correctamente',
                    icon: 'success',
                    showCloseButton: true,
                    showConfirmButton: false,
                })
                window.location.reload()
            })

    };

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >

                {(formik) => (

                    <form ref={form} onSubmit={formik.handleSubmit} className='bg-light p-4'>

                        <h3>Contacta con nosotros</h3>

                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Nombre"
                            className="form-control my-2"
                        />
                        {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}

                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Email"
                            className="form-control my-2"
                        />
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                        <input
                            value={formik.values.telefono}
                            name="telefono"
                            onChange={formik.handleChange}
                            type={"tel"}
                            placeholder="Telefono"
                            className="form-control my-2"
                        />
                        {formik.errors.telefono && <p className="alert alert-danger">{formik.errors.telefono}</p>}

                        <input
                            value={formik.values.mensaje}
                            name="mensaje"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Mensaje"
                            className="form-control my-2"
                        />
                        {formik.errors.mensaje && <p className="alert alert-danger">{formik.errors.mensaje}</p>}

                        <button type="submit" className="btn btn-primary">Enviar</button>

                    </form>

                )}
            </Formik>

        </>
    )
}