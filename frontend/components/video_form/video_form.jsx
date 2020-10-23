import React from 'react';
import Navbar from '../splash/navbar';
import Logo from '../splash/logo';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleVideoFile =  this.handleVideoFile.bind(this);
    this.handleThumbnailFile =  this.handleThumbnailFile.bind(this);
  }
  
  handleInput(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleVideoFile(e) {
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
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[uploader_id]', this.state.uploader_id);
    if(this.state.videoFile) {
      formData.append('video[video]', this.state.videoFile);
    }
    if(this.state.thumbnailFile) {
      formData.append('video[thumbnail]', this.state.thumbnailFile);
    }
    $.ajax({
      url: '/api/videos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON);
      }
    );
  }

  render() {
    return (
      <div className="video-submit-container">
        <Navbar/>
        <div className='video-submit-form-container'>
          <form onSubmit={this.handleSubmit} className = "video-submit-form">
            <Logo componentName='submit'/>
            <h1 className='video-submit-description'>Upload Video</h1>
            <input type="text" placeholder='Title' className = "video-submit-title"
              onChange={this.handleInput}/>
            <div className = "video-submit-file-submits">
              <label> Video File<br/>
              <input type="file" className="video-submit-video-file" placeholder='Video File'
                onChange={this.handleVideoFile}/>
              </label><br/>
              <label> Thumbnail File<br/>
              <input type="file" className="video-submit-thumbnail-file"
                onChange={this.handleThumbnailFile}/>
              </label>
            </div>
            <button className = "video-submit">Upload Video</button>
          </form>
          </div>
      </div>
    )
  }
}

export default VideoForm;