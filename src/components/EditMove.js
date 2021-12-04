import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { faFile, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ListMove from "./ListMove";

const EditMove = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const moveTypeRef = useRef();
    const moveNameRef = useRef();
    const moveQuantifyRef = useRef();

    return (
        <>
         <FontAwesomeIcon icon={faPencilAlt} size="2x" onClick={handleShow} />  
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
          <div className="entry">
            <p>Tipo Movimiento: </p>
            <Form.Select aria-label="Default select example" ref={moveTypeRef}>
              <option>Seleccione el tipo de operación</option>
              <option value="1">Ingreso</option>
              <option value="2">Gasto</option>
            </Form.Select>
          </div>
          <br />
          <div className="entry">
            <p>Nombre: </p>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faFile} />{" "}
              </InputGroup.Text>
              <FormControl aria-label="" ref={moveNameRef} />
            </InputGroup>
          </div>
          <div className="entry">
            <p>Cantidad: </p>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faDollarSign} />{" "}
              </InputGroup.Text>
              <FormControl aria-label="" ref={moveQuantifyRef} />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick>Cancelar</Button>
          <Button variant="primary" onClick>
            Agregar Movimiento
          </Button>
        </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditMove;
