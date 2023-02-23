import React, { Component } from "react";
import "../../styles/LookFor.css";
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
import Tr from "./Li";

class LookFor extends Component {
  state = {
    from: "",
    where: "",
    weightFrom: "min.",
    weightTo: "max.",

    dateStart: new Date().toISOString().slice(0, 10),
    dateEnd: new Date().toISOString().slice(0, 10),
  };

  lists = [
    {
      photo: "src",
      name: "BMW X3",
      from: "Rzeszow",
      where: "Londyn",
      price: "2000zł",
      dimensions: "450x200x170",
      category: "Samochody",
    },
    {
      photo: "src",
      name: "Szafa",
      from: "Lezajsk",
      where: "Warszawa",
      price: "500zł",
      dimensions: "150x50x100",
      category: "Meble",
    },
    {
      photo: "src",
      name: "Pies",
      from: "Wieliczka",
      where: "Szczecin",
      price: "150€ ",
      dimensions: "100x100x100",
      category: "Zwierzęta",
    },
    {
      photo: "src",
      name: "Honda Shadow",
      from: "Bordeaux",
      where: "Tarnów",
      price: "200€ ",
      dimensions: "150x50x100",
      category: "Motory",
    },
  ];

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

  handleChangeFormWeight = (e) => {
    const value = e.target.value;
    if (e.target.name === "weightFrom") {
      this.setState({
        weightFrom: value,
      });
    } else {
      this.setState({
        weightTo: value,
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
    let shipments = this.lists.map((list) => <Tr key={list.name} {...list} />);

    return (
      <>
        <div className="LookFor">
          <section className="aka">
            <p>
              Szukaj zleceń i rozwijaj swoją firmę <br /> dzięki naszej giełdzie
              transportowej!
            </p>
          </section>
          <div className="inLookFor">
            <form>
              <input
                placeholder="Skad?"
                type="text"
                id="from"
                name="from"
                value={this.state.from}
                onChange={this.handleChange}
              />
              <input
                placeholder="Dokad?"
                type="text"
                id="where"
                name="wherename"
                value={this.state.where}
                onChange={this.handleChange}
              />
              <br /> <br />
              <h4>Waga</h4>
              <input
                placeholder="min."
                type="number"
                id="weightFrom"
                name="weightFrom"
                value={this.state.weightFrom}
                onChange={this.handleChangeFormWeight}
              />
              <input
                placeholder="max."
                type="number"
                id="weightTo"
                name="weightTo"
                value={this.state.weightTo}
                onChange={this.handleChangeFormWeight}
              />
              <br /> <br />
              <h4>Termin zaladunku (od-do)</h4>
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
          </div>
          <section className="categoriesLookFor">
            <p>Wybierz kategorie</p>
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
            <div style={{ clear: "both" }}></div>
          </section>
        </div>
        <div className="announcements">
          <h1>Najnowsze ogłoszenia</h1>
          <div className="underlineLookFor"></div>
          <table className="orders-table">
            <thead>
              <tr>
                <th width="30px">
                  <h3>Zdjęcie</h3>
                </th>
                <th>
                  <h3>Nazwa</h3>
                </th>
                <th>
                  <h3>Załadunek</h3>
                </th>
                <th>
                  <h3>Dostawa</h3>
                </th>
                <th>
                  <h3>Budżet</h3>
                </th>
                <th>
                  <h3>Wymiary</h3>
                </th>
                <th>
                  <h3>Kategorie</h3>
                </th>
              </tr>
            </thead>
            <tbody>{shipments}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default LookFor;
