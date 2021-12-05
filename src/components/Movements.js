import React, { useState } from "react";
import "./Movements.css";
import Table from "react-bootstrap/Table";
import MovementSingle from "./movementSingle";

const Movements = ({ moves, setMoves, setMovesFilter, finalBalance, setFinalBalance}) => {

  const handleDeleteMovement = (id) => {
    setMoves(moves.filter((move) => move.id !== id));
    setMovesFilter(moves);
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
                finalBalance={finalBalance}
                setFinalBalance={setFinalBalance}
              />
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
};

export default Movements;
