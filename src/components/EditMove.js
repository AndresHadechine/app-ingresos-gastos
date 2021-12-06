import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { faFile, faDollarSign, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const EditMove = ({ move, finalBalance, setFinalBalance }) => {
  const { type, name, quantify } = move;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const moveTypeRef = useRef();
  const moveNameRef = useRef();
  const moveQuantifyRef = useRef();

  const handleEditFields = () => {
    const newType = moveTypeRef.current.value;
    const newName = moveNameRef.current.value;
    const newQuantify = moveQuantifyRef.current.value;
    if(newName === ""){

    }else if(newQuantify === ""){

    }else{
      if(newType === type){
        if(newType === "1"){
          let operacion = parseInt(finalBalance) - parseInt(quantify) + parseInt(newQuantify);
          setFinalBalance(operacion);
        }else{
          let operacion = parseInt(finalBalance) + parseInt(quantify) - parseInt(newQuantify);
          setFinalBalance(operacion);
        }      
        move.type = newType;
        move.name = newName;
        move.quantify = newQuantify;
      }else{
        if(type === "1"){
          let operacion = parseInt(finalBalance) - parseInt(quantify) - parseInt(newQuantify);
          setFinalBalance(operacion);
        }else{
          let operacion = parseInt(finalBalance) + parseInt(quantify) + parseInt(newQuantify);
          setFinalBalance(operacion);
        }      
        move.type = newType;
        move.name = newName;
        move.quantify = newQuantify;
      }
    setShow(false);
    }      
  };
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
            <Form.Select aria-label="Default select example" ref={moveTypeRef} defaultValue={type} required >
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
              <FormControl aria-label="" ref={moveNameRef} defaultValue={name} required="true" />
            </InputGroup>
          </div>
          <div className="entry">
            <p>Cantidad: </p>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faDollarSign} />{" "}
              </InputGroup.Text>
              <FormControl aria-label="" ref={moveQuantifyRef} defaultValue={quantify} required />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >Cancelar</Button>
          <Button variant="primary" onClick={handleEditFields}>
            Editar Movimiento
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMove;
