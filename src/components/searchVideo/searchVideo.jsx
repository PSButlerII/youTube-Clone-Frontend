import React, { Component } from "react";
import './searchVideo.css'


class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      search_input: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const video = {
      video_id: this.state.video_id,
    };   
    this.props.videoResults(this.state.search_input);
    this.setState(
      {
        search_input: this.state.search_input,
        video_id: this.state.video_id,
      },
      console.log(this.state.videos)
    );
  };

  render() {
    return (
      <React.Fragment>
      <div className="row">
      <h3>Search for a YouTube Video</h3>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="search_input"
            onChange={this.onChangeHandler}
            value={this.state.search_input}
            placeholder="Search Video"
          />
          <button type="submit">Search</button>
        </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchVideo;
