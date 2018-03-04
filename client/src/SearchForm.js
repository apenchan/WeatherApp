import React, { Component } from 'react';
import axios from 'axios'
import FontAwesome from 'react-fontawesome'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    // this.searchCity = this.searchCity.bind(this);
    this.state = { city: "", zip: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ city: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // alert("I was clicked and working");
    var cityZip = `http://api.apixu.com/v1/forecast.json?key=1b7f877fdc1341418ec85603170111&q=${this.state.zip}`
    var cityName = `http://api.apixu.com/v1/forecast.json?key=1b7f877fdc1341418ec85603170111&q=${this.state.city}`;
    axios.get(cityName, cityZip)
    .then(response => {
        //Use the response here to update
        this.props.searchCity(response.data);
        this.setState({city: ''});
        this.setState({zip: ''});
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }
  render() {
    return (
      <div className="search-weather-container">
        <form className="form-search-city" onSubmit={this.handleSubmit}>
          <div className="search-input">
            <input className="input-city-name" type="text" required="true" value={this.state.city} placeholder="Search By City Name or Zip Code" onChange={this.handleChange} />
            <button className="submit-city-btn"><FontAwesome onClick={this.handleSubmit} className="search-button" name='search'/></button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;