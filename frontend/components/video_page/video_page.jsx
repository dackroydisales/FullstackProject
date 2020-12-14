import React from 'react';
import Navbar from '../splash/navbar';
import Comment from './comment';
import VideoIndexContainer from '../video_index/video_index_container'
class VideoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment_txt: "",
      prev_video: this.props.match.params.videoId
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    this.props.getVideoIndex();
    this.props.getVideoComments(this.props.match.params.videoId);
  }

  componentDidUpdate(){
    if(this.state.prev_video !== this.props.match.params.videoId)
    {
      this.props.getVideoComments(this.props.match.params.videoId);
      this.setState({
        prev_video: this.props.match.params.videoId
      });
     }
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
    if(video === undefined) {return null;}
    return(
      <div className="video-show-page-container">
        <Navbar/>
        <div className='video-show-content'>
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
            <ul className="comments">
              <li>Comments</li>
              {Object.values(this.props.comments)
              .reverse().map(comment => 
              <Comment key={comment.id} 
                comment={comment}
                updateComment={this.props.updateComment}
                deleteComment={this.props.deleteComment}
                userId={this.props.userId}/>)}
            </ul>
          </div>
          <VideoIndexContainer scrollable="yes"/>
        </div>
      </div>
      )
    }
}

export default VideoPage;