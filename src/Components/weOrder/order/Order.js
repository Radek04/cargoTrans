import React, { Component } from "react";
import Title from "../title/Title";
import Date from "../date/Date";
import Services from "../ser/Services";
import Budget from "../budget/Budget";
import Permits from "../permits/Permits";
import Needs from "../needs/Needs";
import Loadnig from "../loading/Loading";
import Delivery from "../delivery/Delivery";
import Description from "../description/Description";
import Photos from "../photos/Photos";
import Contact from "../contactDate/Contact";
import AddButton from "../addButton/AddButton";
import "../../../styles/Order.css";
import { Link } from "react-router-dom";

class Order extends Component {
  state = {
    itemName: "",
    weight: "",
    categories: "Meble",
    length: "",
    width: "",
    height: "",
    needs: "checked",
    salary: "",
    currency: "",
    adr: false,
    aSchild: false,
    ded: false,
    elevator: false,
    help: false,
    ocp: false,
    country1: "PL - Polska",
    zip1: "",
    place1: "",
    date1: "",
    time1: "",
    country2: "PL - Polska",
    zip2: "",
    place2: "",
    date2: "",
    time2: "",
    description: "",
    file: "",
    name: "",
    tel: "",
    errors: {
      itemName: false,
      weight: false,
      categories: false,
      length: false,
      width: false,
      height: false,
      country: false,
      zip: false,
      place: false,
      description: false,
      name: false,
      tel: false,
    },
    allErrors: true,
  };

  style = {
    color: "red",
    fontSize: "10px",
    opacity: "1",
  };
  styleInput = {
    borderBottom: "4px solid red",
  };
  message = () => {
    if (window.confirm("Czy napreno chcesz dodać to zlecanie?")) {
      <Link to="/lookFor" />;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (
      !this.state.itemName ||
      !this.state.weight ||
      !this.state.categories ||
      !this.state.length ||
      !this.state.height ||
      !this.state.width
    ) {
      this.setState({
        errors: {
          itemName: true,
          weight: true,
          categories: true,
          length: true,
          width: true,
          height: true,
        },
        allErrors: true,
      });
    } else if (
      !this.state.country1 ||
      !this.state.zip1 ||
      !this.state.place1 ||
      !this.state.country2 ||
      !this.state.zip2 ||
      !this.state.place2 ||
      !this.state.country2 ||
      !this.state.zip2
    ) {
      this.setState({
        errors: {
          country: true,
          zip: true,
          place: true,
        },
        allErrors: true,
      });
    } else if (!this.state.description) {
      this.setState({
        errors: {
          description: true,
        },
        allErrors: true,
      });
    } else if (!this.state.name || !this.state.tel) {
      this.setState({
        errors: {
          name: true,
          tel: true,
        },
        allErrors: true,
      });
    } else {
      this.setState({
        errors: {
          itemName: false,
          weight: false,
          categories: false,
          length: false,
          width: false,
          height: false,
          country1: false,
          zip1: false,
          place1: false,
          country2: false,
          zip2: false,
          place2: false,
          description: false,
          name: false,
          tel: false,
        },
        allErrors: false,
      });
    }
  };

  handleItemName = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };
  handleWeight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  handleCategories = (e) => {
    this.setState({
      categories: e.target.value,
    });
  };
  handlelength = (e) => {
    this.setState({
      length: e.target.value,
    });
  };
  handleWidth = (e) => {
    this.setState({
      width: e.target.value,
    });
  };
  handleHeight = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  handleNeeds = (e) => {
    this.setState({
      needs: !this.state.needs,
    });
  };
  handleSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleCurrency = (e) => {
    this.setState({
      currency: e.target.value,
    });
  };
  handleAdr = (e) => {
    this.setState({
      adr: !this.state.adr,
    });
  };
  handleASchild = (e) => {
    this.setState({
      aSchild: !this.state.aSchild,
    });
  };
  handleDed = (e) => {
    this.setState({
      ded: !this.state.ded,
    });
  };
  handleElevator = (e) => {
    this.setState({
      elevator: !this.state.elevator,
    });
  };
  handleHelp = (e) => {
    this.setState({
      help: !this.state.help,
    });
  };
  handleOcp = (e) => {
    this.setState({
      ocp: !this.state.ocp,
    });
  };
  handleCountry1 = (e) => {
    this.setState({
      country1: e.target.value,
    });
  };
  handleZip1 = (e) => {
    this.setState({
      zip1: e.target.value,
    });
  };
  handlePlace1 = (e) => {
    this.setState({
      place1: e.target.value,
    });
  };
  handleDate1 = (e) => {
    this.setState({
      date1: e.target.value,
    });
  };
  handleTime1 = (e) => {
    this.setState({
      time1: e.target.value,
    });
  };
  handleCountry2 = (e) => {
    this.setState({
      country2: e.target.value,
    });
  };
  handleZip2 = (e) => {
    this.setState({
      zip2: e.target.value,
    });
  };
  handlePlace2 = (e) => {
    this.setState({
      place2: e.target.value,
    });
  };
  handleDate2 = (e) => {
    this.setState({
      date2: e.target.value,
    });
  };
  handleTime2 = (e) => {
    this.setState({
      time2: e.target.value,
    });
  };
  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleFile = (e) => {
    this.setState({
      file: e.target.value,
    });
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleTel = (e) => {
    this.setState({
      tel: e.target.value,
    });
  };
  render() {
    const {
      itemName,
      weight,
      categories,
      length,
      width,
      height,
      needs,
      salary,
      currency,
      adr,
      aSchild,
      ded,
      elevator,
      help,
      ocp,
      country1,
      country2,
      zip1,
      zip2,
      place1,
      place2,
      time1,
      time2,
      date1,
      date2,
      description,
      file,
      name,
      tel,
    } = this.state;
    return (
      <>
        <article className="mainOrder">
          <form onSubmit={this.handleSubmit}>
            <Title />
            <Date
              itemName={itemName}
              weight={weight}
              categories={categories}
              length={length}
              width={width}
              height={height}
              handleItemName={this.handleItemName}
              handleWeight={this.handleWeight}
              handleCategories={this.handleCategories}
              handlelength={this.handlelength}
              handleWidth={this.handleWidth}
              handleHeight={this.handleHeight}
              errors={this.state.errors}
              style={this.style}
              styleInput={this.styleInput}
            />
            <Services needs={needs} handleNeeds={this.handleNeeds} />
            <Budget
              salary={salary}
              currency={currency}
              handleSalary={this.handleSalary}
              handleCurrency={this.handleCurrency}
            />
            <Permits
              adr={adr}
              aSchild={aSchild}
              ded={ded}
              handleAdr={this.handleAdr}
              handleASchild={this.handleASchild}
              handleDed={this.handleDed}
            />
            <Needs
              elevator={elevator}
              help={help}
              ocp={ocp}
              handleElevator={this.handleElevator}
              handleOcp={this.handleOcp}
              handleHelp={this.handleHelp}
            />
            <div
              className="container loadDel"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Loadnig
                country1={country1}
                zip1={zip1}
                place1={place1}
                time1={time1}
                date1={date1}
                handleCountry1={this.handleCountry1}
                handleZip1={this.handleZip1}
                handlePlace1={this.handlePlace1}
                handleTime1={this.handleTime1}
                handleDate1={this.handleDate1}
                errors={this.state.errors}
                style={this.style}
                styleInput={this.styleInput}
              />
              <Delivery
                country2={country2}
                zip2={zip2}
                place2={place2}
                time2={time2}
                date2={date2}
                handleCountry2={this.handleCountry2}
                handleZip2={this.handleZip2}
                handlePlace2={this.handlePlace2}
                handleTime2={this.handleTime2}
                handleDate2={this.handleDate2}
                errors={this.state.errors}
                style={this.style}
                styleInput={this.styleInput}
              />
            </div>
            <Description
              description={description}
              handleDescription={this.handleDescription}
              errors={this.state.errors}
              style={this.style}
              styleInput={this.styleInput}
            />
            <Photos file={file} handleFile={this.handleFile} />
            <Contact
              name={name}
              tel={tel}
              handleName={this.handleName}
              handleTel={this.handleTel}
              errors={this.state.errors}
              style={this.style}
              styleInput={this.styleInput}
            />

            <AddButton
              message={this.message}
              allErrors={this.state.allErrors}
            />
          </form>
        </article>
      </>
    );
  }
}

export default Order;
