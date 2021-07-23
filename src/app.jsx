import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';
import axios from 'axios';
import MainVideo from './components/mainVideo/mainVideo';


class App extends Component {
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
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search_input}&part=snippet&key=AIzaSyB3F_ppVkCcneSQJ6JiuctLOK503A4cOCE`)
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
                    <button type="submit" className="btn btn-primary w-md-25">Search</button>
                </form>
                {this.displayVideos}
            </React.Fragment>
         );
    }
}
 
export default App;