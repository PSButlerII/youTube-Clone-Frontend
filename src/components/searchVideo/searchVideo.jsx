import axios from 'axios'
import React, {Component} from 'react'

class searchVideo extends Component {

  constructor(props) {
  super(props);
  this.state = {
      videos: [
          {videoId: ''}
      ],
      search_input: ''
  }
  }

  onChangeHandler = (event) => {
  this.setState({
      [event.target.name]: event.target.value
  });
  console.log(this.state.search_input);
  }

  onSubmitHandler = (event) => {
  event.preventDefault();
  this.youTubeVideo();
  }

  youTubeVideo = async (event) => {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search_input}&part=snippet&key=AIzaSyDz6KTK8HSbJFMN-O9EEw5PHugnIS-oaQE`)
  console.log(response)
  this.setState({
      videos: response.data
  });
  console.log(this.state.videos)
  }

  displayVideos = () => {
  return this.videos;
  }

  render() { 
  return ( 
      <React.Fragment>
          <form onSubmit={this.onSubmitHandler}>
          <input type="text" name="search_input" onChange={this.onChangeHandler} value={this.state.search_input} placeholder="Search Video" />
              <button type="submit">Search</button>
          </form>
          {this.displayVideos}
      </React.Fragment>
    );
  }
  }

  export default searchVideo;