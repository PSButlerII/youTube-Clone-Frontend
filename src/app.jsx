import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';
import axios from 'axios';
import MainVideo from './components/mainVideo/mainVideo';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            videos: [            
            ]
        }
    }

    youTubeVideo = async (searchTerm) => {     
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyDz6KTK8HSbJFMN-O9EEw5PHugnIS-oaQE`)
        console.log(response)
        this.setState({
            selectedVideoId: response.data.items[0].id.videoId,
            selectedVideoTitle:response.data.items[0].snippet.thumbnails.title
        })
        this.setState({
            videos: [response.data],
        });
        console.log(this.state.videos)
        console.log(this.state.selectedVideoId)
        }


render() {
    return(
        <React.Fragment>
            <SearchVideo videoResults={this.youTubeVideo} />
            <h1>{this.state.selectedVideoTitle}</h1>
            <MainVideo youTubeVideo={this.state.selectedVideoId} />
        </React.Fragment>
    )
  }
}
export default App;