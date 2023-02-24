import "../../../styles/Date.css";
import Label from "./Label";

const Date = (props) => {
  return (
    <section className="container date">
      <h3 className="hed">Dane Przedmiotu</h3>
      <Label for="itemName" content="Nazwa przedmiotu" />*
      <br />
      <input
        type="text"
        className="itemName col-lg-8  col-md-12 col-12"
        id="itemName"
        style={props.errors.itemName ? props.styleInput : undefined}
        value={props.itemName}
        onChange={props.handleItemName}
      />
      {props.errors.itemName ? (
        <>
          <br />
          <span style={props.style}>Musisz uzupełnić to pole</span>
        </>
      ) : null}
      <br />
      <div className="wei col-lg-4 col-md-6 col-12">
        <Label for="weight" content="Waga" />*
        <br />
        <input
          type="number"
          className="weight col-lg-9 col-md-10 col-12"
          id="weight"
          style={props.errors.weight ? props.styleInput : undefined}
          value={props.weight}
          onChange={props.handleWeight}
        />
        {props.errors.weight ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="cat col-lg-6 col-md-6 col-12">
        <Label for="categories" content="Kategoria" />*
        <br />
        <select
          className="categories col-lg-4 col-md-10 col-12"
          id="categories"
          style={props.errors.categories ? props.styleInput : undefined}
          value={props.categories}
          onChange={props.handleCategories}
        >
          <option value="furniture">Meble</option>
          <option value="removals">Przeprowadzki</option>
          <option value="cars">Samochody</option>
          <option value="motorcycles">Motocykle i skutery</option>
          <option value="pallets">Palety</option>
          <option value="loads">Ładunki</option>
          <option value="luggage">Paczki</option>
          <option value="machinery">Maszyny i sprzęty</option>
          <option value="others">Pojazdy inne</option>
          <option value="animals">Zwierzęta</option>
          <option value="specialCare">Specjalnej ostrożności</option>
          <option value="boats">Łodzie</option>
          <option value="otherShipments">Inne przesyłki</option>
          <option value="helpfulShipments">Przesyłki pomocne</option>
        </select>
        {props.errors.categories ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>{" "}
      <br />
      <div className="properties col-lg-4 col-12">
        <Label for="length" content="Długosć" />* <br />
        <input
          type="number"
          className="length col-lg-9 col-md-11 col-12 "
          id="length"
          style={props.errors.length ? props.styleInput : undefined}
          value={props.length}
          onChange={props.handlelength}
        />
        {props.errors.length ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="properties col-lg-4 col-12">
        <Label for="width" content="Szerokość" />* <br />
        <input
          type="number"
          className="width col-lg-9 col-md-11 col-12"
          id="width"
          style={props.errors.width ? props.styleInput : undefined}
          value={props.width}
          onChange={props.handleWidth}
        />
        {props.errors.width ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
      <div className="properties col-lg-4 col-12">
        <Label for="height" content="Wysokość" />* <br />
        <input
          type="number"
          className="height col-lg-9 col-md-11 col-12"
          id="height"
          style={props.errors.height ? props.styleInput : undefined}
          value={props.height}
          onChange={props.handleHeight}
        />
        {props.errors.height ? (
          <>
            <br />
            <span style={props.style}>Musisz uzupełnić to pole</span>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Date;
