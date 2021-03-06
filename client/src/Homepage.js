import React from 'react';
import SearchForm from './SearchForm'
import WeatherListBox from './WeatherListBox'
import MainNav from './MainNav'
import LoginForm from './LoginForm'
import { Switch, Route, Router, Redirect, browserHistory, history } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state={weathers: [] };
    // this.state={comments: []};
    this.searchCity = this.searchCity.bind(this);
  }
  searchCity(data){
    var params = {
      name: data.location.name,
      regionOrState: data.location.region,
      currentF: data.current.feelslike_f,      
      country: data.location.country,
      condition: data.current.condition.text,
      conditionIcon: data.current.condition.icon,
      forecast: data.forecast.forecastday.date,
      forecastText: data.forecast.forecastday[0].day.condition.text,
      forecastIcon: data.forecast.forecastday[0].day.condition.icon,
      forecastF: data.forecast.forecastday[0].day.avgtemp_f      
    };
    console.log(data)
    this.setState({weathers: this.state.weathers.concat(params)});
  }
  render() {
    return (
      <div className="main-container">
      <div className="main-nav">
        <MainNav />
      </div>
      <div className="search-form">
        <SearchForm searchCity={this.searchCity}/>
      </div>
      <div className="row weather-displays">
        <WeatherListBox weathers={this.state.weathers}/>
      </div>
      </div>
    );
  }
}

export default Homepage;