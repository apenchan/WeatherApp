import React, { Component } from 'react';
import CommentForm from './CommentForm';
// import CommentBox from './CommentBox'
import CommentsListBox from './CommentsListBox';

class WeatherBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.addComments = this.addComments.bind(this);
  }
  addComments(comment){
    this.setState({comments: this.state.comments.concat(comment)})
    console.log(this.state.comments)
  }
  render() {
    return (
      <div className="col-sm-3 weather-boxes">
        <div className="city-name">
          {this.props.name}
        </div>
        <div className="region-name">
          {this.props.regionOrState}
        </div>
        <div className="current-weather">
          {this.props.condition} <img src={this.props.conditionIcon} />
        </div>
        <div className="forecast">
          <p className="forecast-text">The forecast prediction for tomorrow is:</p>
          {this.props.forecast} {this.props.forecastText} <img src={this.props.forecastIcon} />
        </div>
        <CommentForm addComments={this.addComments}/>
        <CommentsListBox comments={this.state.comments}/>
      </div>
    )
  }
}

export default WeatherBox;