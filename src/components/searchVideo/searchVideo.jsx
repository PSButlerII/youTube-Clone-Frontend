import React, { Component } from "react";


class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const videoSearch = {         
        searchtTerm: event.target.value
        }
    }
 
  render() {
    return (
      <div className="search-bar-center">
    
        <form className="form-inline" onSubmit={this.handleSubmit}>
        <h2>Search Music</h2>
          <input
            type="text"
            placeholder="Type to search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Search Videos</button>
        </form>
        
                </div>
      
      
    );
  }
}

export default SearchVideo;