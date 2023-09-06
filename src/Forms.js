import React, { Component } from "react"


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Department: "",
      Rating: "",
      emptyArray: [],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name.length > 0 &&
      this.state.Department.length > 0 &&
      this.state.Rating.length > 0
    ) {
      const tempObj = {
        name: this.state.name,
        Department: this.state.Department,
        Rating: this.state.Rating,
      };
      this.state.emptyArray.push(tempObj);
    } else {
      alert("Click Ok For Data");
    }
    this.setState({
      emptyArray: this.state.emptyArray,
      name: "",
      Department: "",
      Rating: "",
    });
    console.log(this.state.emptyArray);
  };

  render() {
    return (
      <>
      <div className="formContainer">
        <h1 id="heading">Employee Feedback Form</h1>
        <form>
          <label id="font" htmlFor="name">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>{" "}
          <br />
          <br />
          <label id="font" htmlFor="Department">
            Department:{" "}
          </label>
          <input
            type="text"
            name="Department"
            id="Department"
            onChange={this.handleChange}
            value={this.state.Department}
          ></input>
          <br />
          <br />
          <label id="font" htmlFor="Ratings">
            Rating
          </label>
          <input
            type="number"
            name="Rating"
            id="Ratings"
            onChange={this.handleChange}
            value={this.state.Rating}
          ></input>
          <br />
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        </div>
        <div id="outercontainer">
          {this.state.emptyArray.map((item, index) => {
            return (
              <div key={index} id="list">
                <h3 id="h1">
                  Name: {item.name}||Department: {item.Department}||Rating:{" "}
                  {item.Rating}
                </h3>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Form;
