import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(e) {
    // alert("comments button was clicked");
    e.preventDefault();
    this.props.addComments(this.state);
    this.setState({text:"", username: ""});
  }
  render() {
    return (
      <div className="comment-submit-container">
          <textarea type="text" id="text" value={this.state.text} placeholder="Add Comment Here" onChange={this.handleChange} />
          <input type="text" id="username" value={this.state.username} placeholder="username" onChange={this.handleChange} />
          <div className="submit-comment">
            <button className="submit-comment" onClick={this.handleSubmit} >Send</button>
          </div>
      </div>
    )
  }
}

export default CommentForm;