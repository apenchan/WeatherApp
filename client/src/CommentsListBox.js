import React, { Component } from 'react';
import CommentBox from './CommentBox'

class CommentsListBox extends Component{
  renderComments(){
    return this.props.comments.map((comment, index) => <CommentBox key={index}{...comment}/>)
  }
  render(){
    return(
      <div className="comments-scroll">
        {this.renderComments()}
      </div>
    )
  }
}

export default CommentsListBox;