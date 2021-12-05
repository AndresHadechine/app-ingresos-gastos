import React from "react";
import "./Movements.css";
import "./MovementSingle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import EditMove from "./EditMove";


const MovementSingle = ({ move, setMoves, moves, handleDeleteMovement, handleFilterType, finalBalance, setFinalBalance}) => {
  const {id, type, name, quantify } = move;

  const handleEditMove = () =>{
   const newMove = (moves.filter((move2) => move2.id === id));

   handleFilterType(0);

  }

  return (
    <tr>
      <td>
        <div className="iconX">
          {" "}
          <FontAwesomeIcon className=".fa" icon={faTimes} size="2x" onClick={() => {handleDeleteMovement(id)}} />
        </div>        
      </td>
      <td>
        <div className="iconPencil">
        <EditMove move={move} handleEditMove={handleEditMove} finalBalance={finalBalance} setFinalBalance={setFinalBalance} />   
        </div>
      </td>
      <td>
        <p className="p">{name}</p>
      </td>
      <td>
        <Button variant="secondary" className={type === "2" ? "figure-red": "figure-green"}>
          {quantify}{" "}
        </Button>
      </td>
    </tr> 
  );
};

export default MovementSingle;
