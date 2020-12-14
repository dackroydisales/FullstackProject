import React from 'react';

class Comment extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e)
  {
    this.props.deleteComment(this.props.comment);
  }

  render()
  {
    const comment = this.props.comment;
    return (
      <li className="comment" key={comment.id}>
        <p className="commenter">
        <button type = 'button' className = 'user-icon user-subicon' >
          {comment.username.slice(0,1).toUpperCase()}
        </button>
          {comment.username}
        </p>
        <p className="comment-text">{comment.comment_txt}
        </p>
        {(comment.user_id === this.props.userId) ? 
        <div>
          <button onClick={this.handleDelete}>Delete Comment</button>
          {/* <button id={comment.id} name={comment.comment_txt} onClick={this.handleCommentUpdate}>Edit Comment</button> */}
        </div> : null}
        </li>
    );
  }
}

export default Comment;