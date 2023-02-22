import "../../../styles/Budget.css";
import Label from "../date/Label";

const Budget = (props) => {
  return (
    <section className="container budget">
      <h3>Budżet</h3>
      <Label for="salary" content="Wysokość wynagrodzenia" /> <br />
      <input
        type="number"
        className="salary col-lg-3"
        id="salary"
        value={props.salary}
        onChange={props.handleSalary}
      />
      <div className="curr col-lg-4">
        <Label for="currency" content="Waluta wynagrodzenia" /> <br />
        <select
          className="currency col-lg-5"
          id="currency"
          value={props.currency}
          onChange={props.handleCurrency}
        >
          <option value="pln">PLN</option>
          <option value="euro">EURO</option>
        </select>
      </div>
    </section>
  );
};

export default Budget;
