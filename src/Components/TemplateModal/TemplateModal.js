import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const TemplateModal = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>increibles promociones</Modal.Title>
                </Modal.Header>
                <Modal.Body>Aprovecha los productos en oferta</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        ver catalogo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
