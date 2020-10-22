import React from 'react';
import Navbar from '../splash/navbar';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      videoFile: null,
      videoUrl: null,
      thumbnailFile: null,
      thumbnailUrl: null
    }

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
    console.log(this.state);
    return (
      <div className="video-submit-container">
        <Navbar/>
        <form onSubmit={this.handleSubmit}>
          <h1>Upload Video</h1>
          <input type="text" placeholder='Title'
            onChange={this.handleInput}/>
          <label> Video File:
          <input type="file"
            onChange={this.handleVideoFile}/>
          </label>
          <label> Thumbnail File:
          <input type="file"
            onChange={this.handleThumbnailFile}/>
          </label>
          <button>Upload Video</button>
        </form>
      </div>
    )
  }
}

export default VideoForm;