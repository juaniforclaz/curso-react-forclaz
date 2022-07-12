import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../../Context/AuthContext';
import Imagenes from '../../Img/Imagenes';

export const TemplateModal = () => {

    const { auth } = useAuthContext()

    const [show, setShow] = useState(auth.loggedIn ? false : true);

    const handleClose = () => setShow(false);

    return (

        <>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Modal.Title>¡Sorteo en instagram!</Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <a href='https://www.instagram.com/p/CdrGO0YvKJy/'>
                        <img src={Imagenes.sorteo} className='img-modal' alt='sorteo sofra'/>
                    </a>

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a href='https://www.instagram.com/p/CdrGO0YvKJy/' className='text-white text-decoration-none'>Participa</a>
                    </Button>

                </Modal.Footer>

            </Modal>

        </>

    );
}
