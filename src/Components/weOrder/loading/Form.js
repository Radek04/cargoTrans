import "../../../styles/Form.css";
import Label from "../date/Label";

const Form = (props) => {
  return (
    <div className="form">
      <div className="col-lg-12 col-md-12 col-12">
        <Label for="country" content="Kraj" />* <br />
        <select
          className="country col-lg-10 col-md-10 col-12"
          id="country"
          value={props.country}
          onChange={props.handleCountry}
          style={props.errors.country ? props.styleInput : null}
        >
          <option value="PL">PL - Polska</option>
          <option value="GB">GB - Wielka Brytania</option>
          <option value="ES">ES - Hiszpania</option>
        </select>
        {props.errors.country ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="pl col-lg-5 col-md-5 col-6">
        <Label for="zip" content="Kod Pocztowy" />* <br />
        <input
          id="zip"
          className="zip col-lg-10 col-md-10 col-6"
          type="text"
          inputMode="numeric"
          placeholder="00-000"
          value={props.zip}
          onChange={props.handleZip}
          style={props.errors.zip ? props.styleInput : null}
        ></input>
        {props.errors.zip ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="pl1 col-lg-7 col-md-7 col-6">
        <Label for="place" content="Miejsce" />* <br />
        <input
          type="text"
          className="place col-lg-12 col-md-8 col-6"
          id="place"
          value={props.place}
          onChange={props.handlePlace}
          style={props.errors.place ? props.styleInput : null}
        />
        {props.errors.place ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="col-lg-12 col-md-12">
        <Label for="date1" content="Kiedy" /> <br />
        <input
          type="date"
          id="date1"
          className="date1 col-lg-8 col-md-5"
          value={props.date}
          onChange={props.handleDate}
        />
      </div>
      <div className="col-lg-12 col-md-12">
        <Label for="time" content="O Której" /> <br />
        <input
          type="time"
          className="time col-lg-8 col-md-5"
          id="time"
          value={props.time}
          onChange={props.handleTime}
        />
      </div>
    </div>
  );
};

export default Form;
