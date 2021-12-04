import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { faFile, faDollarSign, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const EditMove = ({move}) => {
    const {type, name, quantify } = move;

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
                    <Modal.Title>Editar Movimiento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
          <div className="entry">
            <p>Tipo Movimiento: </p>
            <Form.Select aria-label="Default select example" ref={moveTypeRef} value={type}>
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
              <FormControl aria-label="" ref={moveNameRef}  placeholder={name} />
            </InputGroup>
          </div>
          <div className="entry">
            <p>Cantidad: </p>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faDollarSign} />{" "}
              </InputGroup.Text>
              <FormControl aria-label="" ref={moveQuantifyRef}  placeholder={quantify} />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >Cancelar</Button>
          <Button variant="primary" onClick>
            Editar Movimiento
          </Button>
        </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditMove;
