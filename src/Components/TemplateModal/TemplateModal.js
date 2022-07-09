import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Imagenes from '../../Img/Imagenes';

export const TemplateModal = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Sorteo en instagram!</Modal.Title>
                </Modal.Header>
                <Modal.Body><a href='https://www.instagram.com/p/CdrGO0YvKJy/'><img src={Imagenes.sorteo} className='img-modal'/></a></Modal.Body>
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
