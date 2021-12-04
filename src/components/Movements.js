import React, { useState } from "react";
import "./Movements.css";
import Table from "react-bootstrap/Table";
import MovementSingle from "./movementSingle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Movements = ({moves, setMoves}) => {
 const { id , type, name, quantify } = moves;

 const handleDeleteMovement = (id) => {
   setMoves(moves.filter((move) =>  move.id !== id));
};

  return (
    <Table className="table" responsive="sm">
      <tbody>
        <tr>
        {
        moves.map((move) => {
            return <MovementSingle move={move} setMoves={setMoves} moves={moves} handleDeleteMovement={handleDeleteMovement}/>
          })
        }
        </tr>
      </tbody>
    </Table>
  );
};

export default Movements;
