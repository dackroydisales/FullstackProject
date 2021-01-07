import React from 'react';
import Navbar from '../splash/navbar';
import Comment from './comment';
import LikeBar from './like_bar';
import VideoIndexContainer from '../video_index/video_index_container'
class VideoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment_txt: "",
      new_comment: false,
      prev_video: this.props.match.params.videoId
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.getVideoIndex();
    this.props.getVideoLikes(this.props.match.params.videoId);
    this.props.getVideoComments(this.props.match.params.videoId);
  }

  componentDidUpdate(){
    if(this.state.prev_video !== this.props.match.params.videoId)
    {
      this.props.getVideoComments(this.props.match.params.videoId);
      this.props.getVideoLikes(this.props.match.params.videoId);
      this.setState({
        prev_video: this.props.match.params.videoId
      });
    }
  }


  handleInput(e) {
    e.preventDefault();
    this.setState({comment_txt: e.currentTarget.value});
  }

  checkLogin()
  {
    if(!this.props.userId)
    {
      this.props.history.push("/login");
    }
  }

  handleFocus(e)
  {
    e.preventDefault();
    this.checkLogin();
    this.setState({new_comment: true});
  }

  handleCancel(e)
  {
    e.preventDefault();
    this.setState({new_comment: false, comment_txt: ""});
  }

  handleSubmit(e)
  {
    e.preventDefault();
    if(this.state.comment_txt !== "")
    {
      const comment = {
        comment_txt: this.state.comment_txt,
        video_id: this.props.match.params.videoId,
        user_id: this.props.userId
      }
      this.props.createComment(comment);
      document.getElementById("comment-form-text").blur();
      this.setState({comment_txt: "", new_comment: false});
    }
  }

  render() {
    const video  = this.props.videos[this.props.match.params.videoId];
    if(video === undefined) {return (<Navbar/>);}
    const likes = this.props.likes;
    let liked = 0;
    if(likes !== undefined && Object.values(likes).filter(like => like.user_id === this.props.userId))
    {
      let user_like = Object.values(likes).filter(like => like.user_id === this.props.userId);
      if(user_like.length > 0 && user_like[0].is_like === 1)
      {
        liked = 1;
      } else if(user_like.length > 0)
      {
        liked = -1;
      }
    }

    let num_comments = Object.keys(this.props.comments).length;

    return(
      <div className="video-show-page-container">
        <Navbar/>
        <div className='video-show-content'>
          <div className = 'video-show-container'>
            <video autoPlay controls width="960" height="540" poster = {video.thumbnailURL} className = "video-show" src={video.videoURL} />
            <div className = "video-description-container">
              <div className = "video-title-show">{video.title}</div>
              <div className="video-uploader-container">
              <div className="user-icon user-subicon user-icon-pointer">{video.uploader.slice(0,1)}</div>
              <div className = "video-uploader-show">{video.uploader}</div>
              </div>
              <LikeBar
              key={this.props.likes} 
              userId = {this.props.userId}
              videoId = {this.props.match.params.videoId}
              history = {this.props.history}
              createLike = {this.props.createLike}
              updateLike = {this.props.updateLike}
              deleteLike = {this.props.deleteLike}
              liked={liked} 
              likes={this.props.likes}/>
            <div className="video-show-divider"></div>
            </div>
            <ul className="comments">
              {
                num_comments !== 1 ? 
                <li className="comments-heading">{num_comments} Comments</li> :
                <li className="comments-heading">1 Comment</li>
              }
              <form onSubmit={this.handleSubmit}>
              <div className="comment-submit-container">
              {this.props.userId ?
                <div className="user-icon user-subicon user-icon-pointer">
                  {this.props.user.username.slice(0,1)}
                </div> : null}
                <input type="text" 
                  id="comment-form-text"
                  placeholder='Add a public comment...' 
                  className = "new-comment-submit"
                  value = {this.state.comment_txt} 
                  onChange={this.handleInput} 
                  onFocus={this.handleFocus}/>
              </div>

                {this.state.new_comment ? 
                <div className="comment-buttons">
                  <button type="button" onClick={this.handleCancel} className = "comment-cancel">CANCEL</button>
                  {this.state.comment_txt === "" ? 
                  <button className = "comment-submit-disabled" disabled>COMMENT</button> :
                  <button type="submit" className = "comment-submit">COMMENT</button>}
                </div>: null}
              </form>
              {Object.values(this.props.comments)
              .reverse().map(comment => 
              <Comment key={comment.id} 
                comment={comment}
                updateComment={this.props.updateComment}
                deleteComment={this.props.deleteComment}
                userId={this.props.userId}/>)}
            </ul>
          </div>
          <VideoIndexContainer key={this.props.location.pathname} scrollable="yes"/>
        </div>
      </div>
      )
    }
}

export default VideoPage;