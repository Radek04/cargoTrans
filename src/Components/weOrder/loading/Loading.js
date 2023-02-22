import "../../../styles/Loading.css";
import Form from "./Form";

const Loadnig = (props) => {
  return (
    <section className="container loading col-lg-5">
      <h3>Załadunek</h3>
      <Form
        country={props.country1}
        zip={props.zip1}
        place={props.place1}
        date={props.date1}
        time={props.time1}
        handleCountry={props.handleCountry1}
        handleZip={props.handleZip1}
        handlePlace={props.handlePlace1}
        handleTime={props.handleTime1}
        handleDate={props.handleDate1}
        errors={props.errors}
        style={props.style}
        styleInput={props.styleInput}
      />
    </section>
  );
};

export default Loadnig;
