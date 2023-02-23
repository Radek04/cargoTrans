import React from "react";

const Tr = (props) => {
  return (
    <tr>
      <td>
        <img src={props.photo} alt="logo" width="80px" height="80px"></img>
      </td>
      <td>{props.name}</td>
      <td>{props.from}</td>
      <td>{props.where}</td>
      <td>{props.price}</td>
      <td>{props.dimensions}</td>
      <td>{props.category}</td>
      <td>
        <button id="1">Zobacz</button>
      </td>
    </tr>
  );
};

export default Tr;
