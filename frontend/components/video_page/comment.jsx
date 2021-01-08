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
    if(this.state.comment_txt !== this.props.comment.comment_txt && 
        this.state.comment_txt !== "")
    {
      const comment = 
      {
        id: this.props.comment.id,
        comment_txt: this.state.comment_txt,
        video_id: this.props.comment.video_id,
        user_id: this.props.comment.user_id
      }
      this.props.updateComment(comment);
    }
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
              {comment.username.charAt(0).toUpperCase()}
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
              {comment.username.charAt(0).toUpperCase()}
            </button>
            {comment.username}
          </p>
          <p className="comment-text">{comment.comment_txt}</p>
        <div className="comment-buttons">
          <button className = "comment-delete" onClick={this.handleDelete}>DELETE</button>
          <button className="comment-submit" onClick={this.handleEdit}>EDIT</button>
        </div>
      </li>
      );
    } else {
      body = (
        <li className="comment" key={comment.id}>
          <p className="commenter">
            <button type = 'button' className = 'user-icon user-subicon' >
              {comment.username.charAt(0).toUpperCase()}
            </button>
            {comment.username}
          </p>
          <form onSubmit={this.handleEditSubmit}>
            <input autoFocus
              type="text"
              className="edit-comment-text"
              value={this.state.comment_txt}
              placeholder="Add comment text..."
              onChange={this.handleInput}/>
            <div className="comment-buttons">
              <button type="button" className="comment-cancel" onClick={this.handleCancel}>CANCEL</button>
              {this.state.comment_txt !== this.props.comment.comment_txt && this.state.comment_txt !== "" ?
              <button className="comment-submit">SAVE</button> :
              <button type="button" className="comment-submit-disabled" disabled>SAVE</button>}
            </div>
          </form>
      </li>
      );
    }

    return body;
  }
}

export default Comment;