import React from 'react';
import Navbar from '../splash/navbar';
import Logo from '../splash/logo';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      videoFile: null,
      videoUrl: null,
      thumbnailFile: null,
      thumbnailUrl: null,

      upload_files_errors: "",
      showModal: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleVideoFile =  this.handleVideoFile.bind(this);
    this.handleThumbnailFile =  this.handleThumbnailFile.bind(this);
  }

  componentDidMount()
  {
    if(this.props.formType === "Edit")
    {
      this.fetchVideo(this.props.match.params.videoId)
      .then(this.setState({
        title: this.props.title,
        videoFile: this.props.videoFile,
        videoUrl: this.props.videoUrl,
        thumbnailFile: this.props.thumbnailFile,
        thumbnailUrl: this.props.thumbnailUrl
      }));
    }
  }

  componentWillUnmount()
  {
    this.props.clearErrors();
  }
  
  handleInput(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleVideoFile(e) {
    this.state.upload_files_errors = "";

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({videoFile: file, videoUrl: fileReader.result});
    };

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleThumbnailFile(e) {
    this.state.upload_files_errors = "";

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({thumbnailFile: file, thumbnailUrl: fileReader.result});
    };

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({showModal: true});
    if(this.state.videoFile === null)
    {
      this.setState({
        upload_files_errors: "Video file required",
        showModal: false
      });
      return
    } else if(this.state.thumbnailFile === null)
    {
      this.setState({
        upload_files_errors: "Thumbnail file required",
        showModal: false
      });
      return
    } else if(this.state.title.length < 2){//NB: does not display under title
      this.setState({ 
        upload_files_errors: "Title must be at least 2 characters",
        showModal: false});
      return
    }else {
      this.setState({upload_files_errors: ""});
    }
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[uploader_id]', this.props.uploader_id);
    formData.append('video[video_file]', this.state.videoFile);
    formData.append('video[thumbnail]', this.state.thumbnailFile);

    this.props.createVideo(formData).then(
      videoId => {
        this.props.history.push(`/videos/${videoId}`);
        },
      err => this.setState({showModal: false})
      );
  }

  render() {

    let modalShow = () => {
      return (this.state.showModal ? (<div className="upload-background">
        <div className="upload-modal">
        <p className="video-submit-text">Uploading "{this.state.title}"</p>
        <div className="loader"></div>
        </div>
      </div>) : null)
    }

    let upload_files_errors = () => {
      return (
      <p className = "video-form-errors">{this.state.upload_files_errors}</p>)
    }
    return (
      <div className="video-submit-container">
        <Navbar/>
        <div className='video-submit-form-container'>
          <form onSubmit={this.handleSubmit} className = "video-submit-form">
            <Logo componentName='submit'/>
            <h1 className='video-submit-description'>Upload Video</h1>
            <input type="text" placeholder='Title' className = "video-submit-title"
              onChange={this.handleInput}/>
            <p className='video-form-errors'>{this.props.errors}</p>
            <div className = "video-submit-file-submits">
              <label> Video File<br/>
              <input type="file" className="video-submit-video-file" placeholder='Video File'
                onChange={this.handleVideoFile}/>
              </label><br/>
              <label> Thumbnail File<br/>
              <input type="file" className="video-submit-thumbnail-file"
                onChange={this.handleThumbnailFile}/>
              </label>
            {upload_files_errors()}
            </div>
            <button className = "video-submit">Upload Video</button>
          </form>
          </div>
          {modalShow()}
      </div>
    )
  }
}

export default VideoForm;