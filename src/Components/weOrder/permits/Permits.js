import "../../../styles/Permits.css";
import Label from "../date/Label";

const Permits = (props) => {
  return (
    <section className="container permits">
      <h3>Uprawnienia/Pozwolenia</h3>
      <div className="form-check form-switch col-lg-3 col-md-3 col-12">
        <Label for="flexSwitchCheckDefault" content="ADR" /> <br />
        <input
          className="form-check-input adr"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={props.adr}
          onChange={props.handleAdr}
        />
      </div>
      <div className="form-check form-switch col-lg-3 col-md-3 col-12">
        <Label for="flexSwitchCheckDefault1" content="A Schild" /> <br />
        <input
          className="form-check-input aSchild"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault1"
          checked={props.aSchild}
          onChange={props.handleASchild}
        />
      </div>
      <div className="form-check form-switch col-lg-3 col-md-3 col-12">
        <Label for="flexSwitchCheckDefault2" content="Transport dedykowany" />{" "}
        <br />
        <input
          className="form-check-input ded"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault2"
          checked={props.ded}
          onChange={props.handleDed}
        />
      </div>
    </section>
  );
};

export default Permits;
