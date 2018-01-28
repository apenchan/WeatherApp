import React, { Component } from 'react';
import WeatherBox from './WeatherBox'

class WeatherListBox extends Component{
  renderWeathers(){
    return this.props.weathers.map((params, index) => <WeatherBox key={index} {...params}/>)
  }
  render(){
    return(
      <div>
        {this.renderWeathers()}
      </div>
    )
  }
}

export default WeatherListBox;