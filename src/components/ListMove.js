import React from "react";
import './ListMove.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ListMove = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Listado Movimientos</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div>
        <Form>
        <Form.Group
              as={Row}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
            <InputGroup hasValidation>
          <InputGroup.Text ><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
          <Form.Control
                type="text"
                name="firstName"
              />

          <Form.Check type="radio" label="Todos" name="selection" id />
          <Form.Check type="radio" label="Ingreso" name="selection" id />
          <Form.Check type="radio" label="Gasto" name="selection" id />
          </InputGroup>
          </Form.Group>
        </Form>
      </div>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default ListMove;
