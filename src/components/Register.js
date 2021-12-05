import React, { useRef, useState } from "react";
import "./Register.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ListMove from "./ListMove";
import { v4 as uuidv4 } from "uuid";

const Register = ({ finalBalance, setFinalBalance}) => {
  const [moves, setMoves] = useState([]);
  const moveTypeRef = useRef();
  const moveNameRef = useRef();
  const moveQuantifyRef = useRef();

  const handleMoveAdd = () => {
    const type = moveTypeRef.current.value;
    const name = moveNameRef.current.value;
    const quantify = moveQuantifyRef.current.value;


  
    if (name === "") return;

    setMoves((prevMoves) => {
      return [...prevMoves, { id: uuidv4(), type, name, quantify }];
    });
    calculateBalance(type, quantify);
    handleNullInputs();
  };

  const handleNullInputs = () => {
    moveTypeRef.current.value = "Seleccione el tipo de operación";
    moveNameRef.current.value = null;
    moveQuantifyRef.current.value = null;
  };

  const calculateBalance = (type, quantify) => {
    if(type === "1"){
      let operacion = parseInt(finalBalance) + parseInt(quantify);
      setFinalBalance(operacion);
    }else{
      let operacion = parseInt(finalBalance) - parseInt(quantify);
      setFinalBalance(operacion);
    }
  };

  return (
    <div className="div container">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="entry">
            <p>Tipo Movimiento: </p>
            <Form.Select aria-label="Default select example" ref={moveTypeRef} required>
              <option value="1">Ingreso</option>
              <option value="2">Gasto</option>
            </Form.Select>
          </div>
          <br />
          <div className="entry">
            <p>Nombre:</p>
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
              <FormControl aria-label="" ref={moveQuantifyRef} type="number"/>
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNullInputs}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleMoveAdd}>
            Agregar Movimiento
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <ListMove moves={moves} setMoves={setMoves} finalBalance={finalBalance} setFinalBalance={setFinalBalance} />
    </div>
  );
};

export default Register;
