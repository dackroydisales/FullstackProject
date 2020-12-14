import React from 'react';

class Comment extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      active_editing: false,
      comment_txt: this.props.comment.comment_txt
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleDelete(e)
  {
    this.props.deleteComment(this.props.comment);
  }

  handleEdit(e)
  {
    this.setState({
      active_editing: true,
      comment_txt: this.props.comment.comment_txt
    });
  }

  handleInput(e){
    this.setState({
      comment_txt: e.currentTarget.value
    });
  }

  handleEditSubmit(e){
    e.preventDefault();
    const comment = 
    {
      id: this.props.comment.id,
      comment_txt: this.state.comment_txt,
      video_id: this.props.comment.video_id,
      user_id: this.props.comment.user_id
    }
    this.props.updateComment(comment);
    this.setState({
      active_editing: false,
      comment_txt: ""
    });
  }

  handleCancel(e)
  {
    e.preventDefault();
    this.setState({
      active_editing: false,
      comment_txt: ""
    });
  }

  render()
  {
    const comment = this.props.comment;
    let body;
    if (comment.user_id !== this.props.userId)  
    {
      body = (
        <li className="comment" key={comment.id}>
          <p className="commenter">
            <button type = 'button' className = 'user-icon user-subicon' >
              {comment.username.slice(0,1).toUpperCase()}
            </button>
            {comment.username}
          </p>
          <p className="comment-text">{comment.comment_txt}</p>
      </li>
      );
    } else if(this.state.active_editing === false)
    {
      body = (
        <li className="comment" key={comment.id}>
          <p className="commenter">
            <button type = 'button' className = 'user-icon user-subicon' >
              {comment.username.slice(0,1).toUpperCase()}
            </button>
            {comment.username}
          </p>
          <p className="comment-text">{comment.comment_txt}</p>
        <div>
          <button onClick={this.handleDelete}>Delete Comment</button>
          <button onClick={this.handleEdit}>Edit Comment</button>
        </div>
      </li>
      );
    } else {
      body = (
        <li className="comment" key={comment.id}>
          <p className="commenter">
            <button type = 'button' className = 'user-icon user-subicon' >
              {comment.username.slice(0,1).toUpperCase()}
            </button>
            {comment.username}
          </p>
          <form onSubmit={this.handleEditSubmit}>
            <p>
              <input
                type="text"
                className="comment-text"
                value={this.state.comment_txt}
                onChange={this.handleInput}/>
            </p>
            <button type="button" onClick={this.handleCancel}>Cancel</button>
            <button>Edit</button>
          </form>
      </li>
      );
    }

    return body;
  }
}

export default Comment;