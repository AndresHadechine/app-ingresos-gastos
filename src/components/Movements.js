import React, { useState } from "react";
import "./Movements.css";
import Table from "react-bootstrap/Table";
import MovementSingle from "./movementSingle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Movements = ({moves}) => {
 const { id , type, name, quantify } = moves;

  return (
    <Table className="table" responsive="sm">
      <tbody>
        <tr>
        {
        moves.map((move) => {
            return <MovementSingle move={move} />
          })
        }
        </tr>
      </tbody>
    </Table>
  );
};

export default Movements;
