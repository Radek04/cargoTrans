import "../../../styles/AddButton.css";
import React from "react";

const AddButton = (props) => {
  return (
    <section className="container addButton">
      <button
        onClick={props.allErrors ? () => window.scrollTo(0, 0) : props.message}
      >
        Dodaj zlecenie
      </button>
    </section>
  );
};

export default AddButton;
