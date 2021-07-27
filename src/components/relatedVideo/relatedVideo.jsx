import React, { Component } from 'react';


class RelatedVideo extends Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
  render() { 
      return (
          <React.Fragment>                
              <iframe id="ytplayer" type="text/html" width="640" height="360"
              src={`https://youtube.com/embed/${this.props.relatedYouTubeVideo}?autoplay=0`}
              frameBorder="0"></iframe>
          </React.Fragment>
        );
  }
}

export default RelatedVideo;