import React, { Component } from 'react';
import axios from 'axios'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    // this.searchCity = this.searchCity.bind(this);
    this.state = { city: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ city: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // alert("I was clicked and working");
    var url = `http://api.apixu.com/v1/forecast.json?key=1b7f877fdc1341418ec85603170111&q=${this.state.city}`;
    axios.get(url)
    .then(response => {
        //Use the response here to update
        this.props.searchCity(response.data);
        this.setState({city: ''});
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }
  render() {
    return (
      <div className="search-weather-container">
        <form onSubmit={this.handleSubmit}>
          <div className="search-input">
            {/* <label> Weather App </label> */}
            <input type="text" required="true" value={this.state.city} placeholder="Search a City" onChange={this.handleChange} />
          </div>
          <div className="search-button">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;