import "../../../styles/Delivery.css";
import Form from "../loading/Form";

const Delivery = (props) => {
  return (
    <section className="container delivery col-lg-5">
      <h3>Dostawa</h3>
      <Form
        country={props.country2}
        zip={props.zip2}
        place={props.place2}
        date={props.date2}
        time={props.time2}
        handleCountry={props.handleCountry2}
        handleZip={props.handleZip2}
        handlePlace={props.handlePlace2}
        handleTime={props.handleTime2}
        handleDate={props.handleDate2}
        errors={props.errors}
        style={props.style}
        styleInput={props.styleInput}
      />
    </section>
  );
};

export default Delivery;
