import React, { useState } from "react";
import "./ListMove.css";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Movements from "./Movements";
import Button from "react-bootstrap/Button";

const ListMove = ({ moves, setMoves }) => {
  const [movesFilter, setMovesFilter] = useState(moves);
 
  const handleFilterType = (option) => {
    option === 0? setMovesFilter(moves):
     option === 1? setMovesFilter(moves.filter((move) => move.type === "1")):
    option === 2? setMovesFilter(moves.filter((move) => move.type === "2")): alert("ojo con eso manito")
  };

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Listado Movimientos</Modal.Title>
        <Button variant="primary" size="sm" disabled>
          {movesFilter.length}
        </Button>
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
                <Form.Control type="text" name="name" />
                <Form.Check
                  type="radio"
                  label="Todos"
                  name="selection"
                  id="todos"
                  defaultChecked
                 onClick={()=> handleFilterType(0) }
                />
                <Form.Check
                  type="radio"
                  label="Ingreso"
                  name="selection"
                  id="ingreso"
                  onClick={()=> handleFilterType(1)}
                />
                <Form.Check
                  type="radio"
                  label="Gasto"
                  name="selection"
                  id="gasto"
                  onClick={()=> handleFilterType(2) }
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
        <br />
        <div>
          <Movements moves={movesFilter} setMoves={setMoves} handleFilterType={handleFilterType} />
        </div>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default ListMove;
