import React from 'react';

class LikeBar extends React.Component {

  constructor(props)
  {
    super(props);

    this.checkLogin = this.checkLogin.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  checkLogin()
  {
    if(!this.props.userId)
    {
      this.props.history.push("/login");
      return false;
    }
    return true;
  }

  handleCreate(e)
  {
    if(this.checkLogin())
    {
      if(e.currentTarget.id === "like")
      {
        let like = 
        {
          is_like: 1,
          video_id: this.props.videoId,
          user_id: this.props.userId
        };
        this.props.createLike(like);
      }
      else
      {
        let like = 
        {
          is_like: 0,
          video_id: this.props.videoId,
          user_id: this.props.userId
        };
        this.props.createLike(like);
      }
    }
  }

  handleUpdate(e){
    if(this.checkLogin())
    {
      let user_likes = Object.values(this.props.likes).filter(like => like.user_id === this.props.userId);
      if(e.currentTarget.id === "like")
      {
        let like = 
        {
            id: user_likes[0].id,
            is_like: 1,
            video_id: this.props.videoId,
            user_id: this.props.userId
        }
        this.props.updateLike(like);
      }
      else 
      {
        let like = 
        {
            id: user_likes[0].id,
            is_like: 0,
            video_id: this.props.videoId,
            user_id: this.props.userId
        }
        this.props.updateLike(like);
      }
    }
  }

  handleDelete(e)
  {
    if(this.checkLogin())
    {
      let user_likes = Object.values(this.props.likes).filter(like => like.user_id === this.props.userId);
      this.props.deleteLike(user_likes[0]);
    }
  }

  render()
  {
    let prop_likes = this.props.likes;
    if(!prop_likes){return (<div></div>);}
    let likes = Object.values(prop_likes).filter(like => like.is_like === 1);
    let dislikes = Object.values(prop_likes).filter(like => like.is_like === 0);
    if(this.props.liked === 0)
    {return (<div className="likebar-container">
      <button id="like" onClick={this.handleCreate}>
      <img className="likebar-hand" src={window.likegreyURL}></img>
      <span className="likebar-none">{likes.length}</span> 
      </button>

      <button id="dislike" onClick={this.handleCreate}>
      <img className="likebar-hand" src={window.dislikegreyURL}></img>
      <span className="likebar-none">{dislikes.length}</span>
      </button>
      </div>);
    } else if(this.props.liked === 1)
    {return (<div className="likebar-container">
      <button onClick={this.handleDelete}>
      <img className="likebar-hand" src={window.likeblueURL}></img>
      <span className="likebar-blue">{likes.length}</span> 
      </button>

      <button id="dislike" onClick={this.handleUpdate}>
      <img className="likebar-hand" src={window.dislikegreyURL}></img>
      <span className="likebar-none">{dislikes.length}</span>
      </button>
      </div>);
    } else {
      return (<div  className="likebar-container">
      <button id="like" onClick={this.handleUpdate}>
      <img className="likebar-hand" src={window.likegreyURL}></img>
      <span className="likebar-none">{likes.length}</span> 
      </button>

      <button onClick={this.handleDelete}>
      <img className="likebar-hand" src={window.dislikeblueURL}></img>
      <span className="likebar-blue">{dislikes.length}</span>
      </button>
      </div>);
    }
  }
}

export default LikeBar;