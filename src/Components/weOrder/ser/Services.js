import "../../../styles/Services.css";

const Services = (props) => {
  return (
    <section className="container services">
      <h3>Usługi</h3>
      <p>
        Wyróżnij zlecenie na str. głównej (<strong>5 zł</strong>) na 30 dni
      </p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={props.needs}
          onChange={props.handleNeeds}
        />
      </div>
    </section>
  );
};

export default Services;
