import React, { Component } from 'react';

class MainVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameBorder="0"></iframe>
            </React.Fragment>
          );
    }
}
 
export default MainVideo;
