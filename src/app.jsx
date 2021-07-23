import React, { Component } from 'react';
import SearchVideo from './components/searchVideo/searchVideo';
import axios from 'axios';
import MainVideo from './components/mainVideo/mainVideo';
import searchVideo from './components/searchVideo/searchVideo';
class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

render() {
    return(
        <React.Fragment>
            <SearchVideo videos={this.state.videos} />
            <MainVideo/>
        </React.Fragment>
    )
  }
}
export default App;