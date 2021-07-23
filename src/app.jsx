import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';
import axios from 'axios';
import MainVideo from './components/mainVideo/mainVideo';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
          }
    }
    
    async youTubeVideos(e) {
        let searchVideos = await axios.get(`https://www.googleapis.com/youtube/v3/search?q={this.state.searchTerm}&part=snippet&key=AIzaSyB3F_ppVkCcneSQJ6JiuctLOK503A4cOCE`)
        .then(response => this.setState({
            videos: response.data            
        })     
        );  
        console.log(this)
    }

    componentDidMount(){
        this.youTubeVideos()
    } 

    render() { 
        return ( 
            <React.Fragment>
                <h1>Test</h1>
                <SearchVideo videos={this.state.videos} />
                {/* <MainVideo />    */}
            </React.Fragment>
         );
    }
}
 
export default App;