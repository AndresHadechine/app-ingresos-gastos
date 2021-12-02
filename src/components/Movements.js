import React, { useState } from "react";
import "./Movements.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Movements = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <Table className="table" responsive="sm">
      <tbody>
        <tr>
          <td>
            <div className="iconX">
              {" "}
              <FontAwesomeIcon
                className=".fa"
                icon={faTimes}
                size="2x"
                onClick={() => setCount(0)}
              />
            </div>
          </td>
          <td>
            <div className="iconPencil">
              <FontAwesomeIcon
                icon={faPencilAlt}
                size="2x"
                onClick={() => setCount(count + 1)}
              />
            </div>
          </td>
          <td>
              <p className="p">{count}</p>
        </td>
          <td>
            <Button variant="secondary" className="button" >Tooltip on </Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="iconX">
              {" "}
              <FontAwesomeIcon
                size="2x"
                icon={faTimes}
                onClick={() => setCount2(0)}
              />
            </div>
          </td>
          <td>
            <div className="iconPencil">
              <FontAwesomeIcon
                icon={faPencilAlt}
                size="2x"
                onClick={() => setCount2(count2 + 1)}
              />
            </div>
          </td>
          <td>
              <p className="p"> Holiiii </p>
              </td>
          <td>
            <Button variant="secondary" className="button">Tooltip on </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Movements;
