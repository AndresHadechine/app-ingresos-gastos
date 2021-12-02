import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

const ListMove = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Listado Movimientos</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />{" "}
            </InputGroup.Text>
            <FormControl aria-label="" />
          </InputGroup>
          <Form.Check type="radio" label="Todos" name="selection" id />
          <Form.Check type="radio" label="Ingreso" name="selection" id />
          <Form.Check type="radio" label="Gasto" name="selection" id />
        </Form>
      </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default ListMove;
