import React, { useState } from "react";
import "./Movements.css";
import Table from "react-bootstrap/Table";
import MovementSingle from "./movementSingle";

const Movements = ({ moves, setMoves, handleFilterType }) => {

  const handleDeleteMovement = (id) => {
    setMoves(moves.filter((move) => move.id !== id));
    handleFilterType(0);
  };

  return (
    <Table className="table" responsive="sm">
      <tbody>
        <tr>
          {moves.map((move) => {
            return (
              <MovementSingle
                move={move}
                setMoves={setMoves}
                moves={moves}
                handleDeleteMovement={handleDeleteMovement}
                handleFilterType={handleFilterType}
              />
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
};

export default Movements;
