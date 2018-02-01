import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

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
          <textarea className="comment-textarea" type="text" id="text" value={this.state.text} placeholder="Add Comment Here" onChange={this.handleChange} />
          {/* <input type="text" id="username" value={this.state.username} placeholder="username" onChange={this.handleChange} /> */}
          <div className="submit-comment">
            <button className="submit-comment-btn"><FontAwesome onClick={this.handleSubmit} className="fa-paper-plane" name="paper-plane" size="2x"/>post</button>
          </div>
      </div>
    )
  }
}

export default CommentForm;