import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup, Modal, Row } from "react-bootstrap";
import "./ListMove.css";
import Movements from "./Movements";

const ListMove = ({ moves, setMoves, finalBalance, setFinalBalance }) => {
  const [movesFilter, setMovesFilter] = useState(moves);
  const [option, setOption] = useState(0);
  const searchRef = useRef();

  useEffect(() => {
    setMovesFilter(moves);
    handleFilterType(option);
  }, [moves]);

  const handleFilterType = (option) => {
    setOption(option);
    if (option === 0) {
      setMovesFilter(moves);
      setOption(option);
    } else if (option === 1) {
      setMovesFilter(moves.filter((move) => move.type === "1"));
      setOption(option);
    } else if (option === 2) {
      setMovesFilter(moves.filter((move) => move.type === "2"));
      setOption(option);
    }
  };

  const handleSearch = () => {
    const search = searchRef.current.value;
    if (search === "") {
      setMovesFilter(moves);
    } else {
      console.log("Seach text: " + search);
      setMovesFilter(moves.filter((move) => move.name.search(search) != -1));
    }
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
                <Form.Control type="text" name="name" ref={searchRef} onChange={handleSearch} />
                <Form.Check
                  type="radio"
                  label="Todos"
                  name="selection"
                  id="todos"
                  defaultChecked
                  onClick={() => handleFilterType(0)}
                />
                <Form.Check
                  type="radio"
                  label="Ingreso"
                  name="selection"
                  id="ingreso"
                  onClick={() => handleFilterType(1)}
                />
                <Form.Check
                  type="radio"
                  label="Gasto"
                  name="selection"
                  id="gasto"
                  onClick={() => handleFilterType(2)}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
        <br />
        <div>
          <Movements moves={movesFilter}
            setMoves={setMoves}
            setMovesFilter={setMovesFilter}
            finalBalance={finalBalance}
            setFinalBalance={setFinalBalance} />
        </div>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default ListMove;
