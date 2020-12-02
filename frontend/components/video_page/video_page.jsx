import React from 'react';
import Navbar from '../splash/navbar';

class VideoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment_txt: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    this.props.getVideo(this.props.match.params.videoId);
    this.props.getVideoComments(this.props.match.params.videoId);
  }

  handleInput(e) {
    this.setState({comment_txt: e.currentTarget.value});
  }

  checkLogin()
  {
    if(!this.props.userId)
    {
      this.props.history.push("/login");
    }
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
      e.currentTarget.reset();
      this.setState({comment_txt: ""});
    }
  }

  render() {
    const video  = this.props.videos[this.props.match.params.videoId];
    return video === undefined ? null : (
      <div className="video-show-page-container">
        <Navbar/>
        <div className = 'video-show-container'>
          <video autoPlay controls width="640" height="360" poster = {video.thumbnailURL} className = "video-show" src={video.videoURL} />
          <div className = "video-description-container">
            <div className = "video-title-show">{video.title}</div>
            <div className = "video-uploader-show">{video.uploader}</div>
          </div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Comment' className = "video-submit-title"
              onChange={this.handleInput} onFocus={this.checkLogin}/>
          <button className = "video-submit">Comment</button>
          </form>
          <ul>
            {this.props.comments ? 
            Object.values(this.props.comments)
            .reverse().map(comment => 
            <li>
              <p>{comment.comment_txt}
              </p>
              <p>
                <button type = 'button' className = 'user-icon user-subicon' >
                  {comment.username.slice(0,1).toUpperCase()}
                </button>
                {comment.username}
              </p>
            </li>)
            : null}
          </ul>
          </div>
          <div>
          </div>
      </div>
      )
    }
}

export default VideoPage;