import "../../../styles/Contact.css";
import Label from "../date/Label";

const Contact = (props) => {
  return (
    <section className="container contact">
      <h3>Dane kontaktowe</h3>
      <div className="name">
        <Label for="name" content="Imię i nazwisko" />* <br />
        <input
          type="text"
          className="name col-lg-5"
          id="name"
          value={props.name}
          onChange={props.handleName}
          style={props.errors.name ? props.styleInput : null}
        />
        {props.errors.name ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="tel">
        <Label for="tel" content="Telefon" />* <br />
        <input
          type="tel"
          className="tel col-lg-5"
          id="tel"
          value={props.tel}
          onChange={props.handleTel}
          style={props.errors.tel ? props.styleInput : null}
        />
        {props.errors.tel ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Contact;
