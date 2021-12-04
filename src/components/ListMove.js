import React, { useState } from "react";
import "./ListMove.css";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Movements from "./Movements";
import Figure from "react-bootstrap/Figure";

const ListMove = ({ moves, setMoves }) => {
  return (
    <Modal.Dialog>
      <Modal.Header>
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
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" name="firstName" />
                <Form.Check type="radio" label="Todos" name="selection" id />
                <Form.Check type="radio" label="Ingreso" name="selection" id />
                <Form.Check type="radio" label="Gasto" name="selection" id />
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
        <br />
        <div>
          <Movements moves={moves} setMoves={setMoves} />
        </div>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default ListMove;
