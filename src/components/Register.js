import React from "react";
import "./Register.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="entry">
          <p>Tipo Movimiento: </p>
          <Form.Select aria-label="Default select example">
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
            <FormControl aria-label="" />
          </InputGroup>
        </div>
        <div className="entry">
          <p>Cantidad: </p>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <FontAwesomeIcon icon={faDollarSign} />{" "}
            </InputGroup.Text>
            <FormControl aria-label="" />
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Agregar Movimiento</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Register;
