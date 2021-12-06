import { faDollarSign, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import ListMove from "./ListMove";
import "./Register.css";

const Register = ({ initialBalance, finalBalance, setFinalBalance }) => {
  const [moves, setMoves] = useState([]);
  const moveTypeRef = useRef();
  const moveNameRef = useRef();
  const moveQuantifyRef = useRef();

  const handleMoveAdd = () => {
    const type = moveTypeRef.current.value;
    const name = moveNameRef.current.value;
    const quantify = moveQuantifyRef.current.value;

    if (initialBalance == null) {

    } else {
      if (name === "" || quantify === "") return;

      if (verifyTransaction(type, finalBalance, quantify) === true) {
        setMoves((prevMoves) => {
          return [...prevMoves, { id: uuidv4(), type, name, quantify }];
        });
        calculateBalance(type, quantify);
        handleNullInputs();
      } else {
      }
    }
  };

  const handleNullInputs = () => {
    moveTypeRef.current.value = "1";
    moveNameRef.current.value = null;
    moveQuantifyRef.current.value = null;
  };

  const calculateBalance = (type, quantify) => {
    if (type === "1") {
      let operacion = parseInt(finalBalance) + parseInt(quantify);
      setFinalBalance(operacion);
    } else {
      let operacion = parseInt(finalBalance) - parseInt(quantify);
      setFinalBalance(operacion);
    }
  };

  const verifyTransaction = (type, finalBalance, quantify) => {
    if (type === "2") {
      if (parseInt(finalBalance) - parseInt(quantify) < 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
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
              <FormControl aria-label="" ref={moveQuantifyRef} type="number" />
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
