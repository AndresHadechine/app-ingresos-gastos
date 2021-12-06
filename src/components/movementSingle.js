import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import EditMove from "./EditMove";
import "./Movements.css";
import "./MovementSingle.css";


const MovementSingle = ({ move, handleDeleteMovement, finalBalance, setFinalBalance }) => {
  const { id, type, name, quantify } = move;

  return (
    <tr>
      <td>
        <div className="icon-x">
          {" "}
          <FontAwesomeIcon className=".fa" icon={faTimes} size="2x" onClick={() => { handleDeleteMovement(id) }} />
        </div>
      </td>
      <td>
        <div className="icon-pencil">
          <EditMove move={move} finalBalance={finalBalance} setFinalBalance={setFinalBalance} />
        </div>
      </td>
      <td>
        <p className="p">{name}</p>
      </td>
      <td>
        <Button variant="secondary" className={type === "2" ? "figure-red" : "figure-green"}>
          {quantify}{" "}
        </Button>
      </td>
    </tr>
  );
};

export default MovementSingle;
