import "../../../styles/Description.css";
import Label from "../date/Label";

const Description = (props) => {
  return (
    <section className="container description">
      <h3>Opis</h3>
      <Label for="description1" content="Opis" />* <br />
      <textarea
        className="description1 col-lg-5 col-md-7 col-12"
        id="description1"
        cols="70"
        rows="10"
        value={props.description}
        onChange={props.handleDescription}
      ></textarea>
      {props.errors.description ? (
        <>
          <br />
          <span style={props.style}>Musisz uzupełnić to pole</span>
        </>
      ) : null}
    </section>
  );
};

export default Description;
