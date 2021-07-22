import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async youTubeVideos(e) {
        let searchVideos = await axios.get("https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&part=snippet&key=AIzaSyB3F_ppVkCcneSQJ6JiuctLOK503A4cOCE")
        .then(response => this.setState({
            songs: response.data
        }));  
        
    }

    filterVideos=(arrayOfNewVideos)=>{
        this.setState({
            songs: arrayOfNewVideos
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Test</h1>
                <SearchVideo videos={this.state.videos} filterVideos = {this.filterVideos} />
            </React.Fragment>
         );
    }
}
 
export default App;