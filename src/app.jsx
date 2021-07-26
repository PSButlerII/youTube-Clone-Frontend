import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';
import axios from 'axios';
import MainVideo from './components/mainVideo/mainVideo';
import RelatedVideos from './components/relatedVideo/relatedVideo';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            videos: [ 
                 
            ]
        }
    }

    componentDidMount(){
        this.youTubeVideo()
    }

    youTubeVideo = async (searchTerm) => {     
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyB3F_ppVkCcneSQJ6JiuctLOK503A4cOCE`)
        console.log(response)
        this.setState({
            selectedVideoId: response.data.items[0].id.videoId,
            selectedVideoTitle:response.data.items[0].snippet.title,
            selectedVideoDescription:response.data.items[0].snippet.description,
            selectedVideoThumbnail:response.data.items[0].snippet.thumbnails.default.url,
            ArrayVideoId:response.data.items.id.videoId,
            ArrayVideoTitle:response.data.items.snippet.title,
            ArrayVideoDescription:response.data.items.snippet.description,
            ArrayVideoThumbnail:response.data.items.snippet.thumbnails.default.url,

        })
        this.setState({
            videos: response.data,
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
            <p>{this.state.selectedVideoDescription}</p>
            <img src={this.state.selectedVideoThumbnail}/>
            <RelatedVideos youTubeVideo={this.state.videos} />
        </React.Fragment>
    )
  }
}
export default App;