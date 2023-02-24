import React from "react";
import "../../../styles/DataTransfer.css";
import { Link } from "react-router-dom";

const DataTransfer = (props) => {
  const edit = document.querySelector(".mainOrder");
  edit.style.opacity = 0.3;
  edit.style.pointerEvents = "none";
  return (
    <>
      <div className="container dataTransfer">
        <p> Czy napewno chcesz dodać to zlecenie?</p>
        <div>
          <button onClick={() => props.click()}>Nie</button>
          <Link to="/lookFor">
            <button>Tak</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DataTransfer;
