import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <div className="comment-text">
          {this.props.text}
        </div>
        <div className="comment-username">
          {this.props.username}
        </div>
      </div>
    )
  }
}

export default CommentBox