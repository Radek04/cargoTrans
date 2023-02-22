import React, { Component } from "react";
import "../../styles/LookFor.css";
import truck from "../../images/truck.jpg";
import furniture from "../../images/furniture.png";
import otherVehicles from "../../images/otherVehicles.png";
import box from "../../images/package.png";
import boat from "../../images/boat.png";
import cars from "../../images/car.png";
import pets from "../../images/pets.png";
import home from "../../images/home.png";
import motorbike from "../../images/motorbike.png";
import otherCargo from "../../images/otherCargo.png";
import pallets from "../../images/pallets.png";
import specialCare from "../../images/specialCare.png";
import cargo from "../../images/cargo.png";

class LookFor extends Component {
  state = {
    from: "Skąd?",
    where: "Dokąd?",

    dateStart: new Date().toISOString().slice(0, 10),
    dateEnd: new Date().toISOString().slice(0, 10),
  };

  handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "from") {
      this.setState({
        from: value,
      });
    } else {
      this.setState({
        where: value,
      });
    }
  };

  handleDateSet = (e) => {
    if (e.target.name === "dateStart") {
      this.setState({
        dateStart: e.target.value,
      });
    } else {
      this.setState({
        dateEnd: e.target.value,
      });
    }
  };
  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <>
        <div className="photo">
          <img src={truck} alt="truck.png" />
        </div>
        <div className="LookFor">
          <p>Tutaj szybko znajdziesz ładunek</p>
          <div className="inLookFor"></div>
          <form>
            <input
              type="text"
              id="from"
              name="from"
              value={this.state.from}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="where"
              name="wherename"
              value={this.state.where}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="date"
              id="date"
              name="dateStart"
              value={this.state.dateStart}
              min={minDate}
              max={maxDate}
              onChange={this.handleDateSet}
            />
            <input
              type="date"
              id="date"
              name="dateEnd"
              value={this.state.dateEnd}
              min={minDate}
              max={maxDate}
              onChange={this.handleDateSet}
            />
          </form>

          <div className="categories">
            <div className="category">
              <img src={furniture} alt="furniture" />
              <p className="categoryName">Meble</p>
            </div>
            <div className="category">
              <img src={otherVehicles} alt="otherVehicles" />
              <p className="categoryName">Pojazdy inne</p>
            </div>
            <div className="category">
              <img src={box} alt="package" />
              <p className="categoryName">Paczki</p>
            </div>
            <div className="category">
              <img src={boat} alt="boat" />
              <p className="categoryName">Łodzie</p>
            </div>
            <div className="category">
              <img src={cars} alt="cars" />
              <p className="categoryName">Samochody</p>
            </div>
            <div className="category">
              <img src={pets} alt="pets" />
              <p className="categoryName">Zwierzęta</p>
            </div>
            <div className="category">
              <img src={home} alt="home" />
              <p className="categoryName">Przeprowadzki</p>
            </div>
            <div className="category">
              <img src={motorbike} alt="motorbike" />
              <p className="categoryName">Motory</p>
            </div>
            <div className="category">
              <img src={otherCargo} alt="otherCargo" />
              <p className="categoryName">Inne przesyłki</p>
            </div>
            <div className="category">
              <img src={pallets} alt="pallets" />
              <p className="categoryName">Palety</p>
            </div>
            <div className="category">
              <img src={specialCare} alt="specialCare" />
              <p className="categoryName">Delikatne</p>
            </div>
            <div className="category">
              <img src={cargo} alt="cargo" />
              <p className="categoryName">Ładunki</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LookFor;
