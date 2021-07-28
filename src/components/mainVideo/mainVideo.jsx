import React, { Component } from "react";
import "./mainVideo.css";

class MainVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <iframe
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://youtube.com/embed/${this.props.youTubeVideo}?autoplay=0`}
              frameBorder="5"
            ></iframe>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainVideo;
