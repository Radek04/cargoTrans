import "../../../styles/Needs.css";
import Label from "../date/Label";

const Needs = (props) => {
  return (
    <section className="container needs">
      <h3>Wymagania</h3>
      <div className="elevator col-lg-3 col-12">
        <Label for="elevator" content="Wymagana winda?" /> <br />
        <input
          type="checkbox"
          id="elevator"
          className="elevator"
          checked={props.elevator}
          onChange={props.handleElevator}
        />
      </div>
      <div className="help col-lg-3 col-12">
        <Label for="help" content="Pomoc przy załadunku?" /> <br />
        <input
          type="checkbox"
          id="help"
          className="help"
          checked={props.help}
          onChange={props.handleHelp}
        />
      </div>
      <div className="ocp col-lg-3 col-12">
        <Label for="ocp" content="Aktualne OCP" /> <br />
        <input
          type="checkbox"
          id="ocp"
          className="ocp"
          checked={props.ocp}
          onChange={props.handleOcp}
        />
      </div>
    </section>
  );
};

export default Needs;
