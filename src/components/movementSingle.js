import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const MovementSingle = ({ move }) => {
   const {id, type, name, quantify } = move;
   const imprimir = () =>{
       console.log(`En movementSingle${name}`);
   }
  return (
    <tr>
      <td>
        <div className="iconX">
          {" "}
          <FontAwesomeIcon className=".fa" icon={faTimes} size="2x" onClick />
        </div>
      </td>
      <td>
        <div className="iconPencil">
          <FontAwesomeIcon icon={faPencilAlt} size="2x" onClick={imprimir} />
        </div>
      </td>
      <td>
        <p className="p">{name}</p>
      </td>
      <td>
        <Button variant="secondary" className="button">
          {quantify}{" "}
        </Button>
      </td>
    </tr>
  );
};

export default MovementSingle;