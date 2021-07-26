import React, { Component } from 'react';


class RelatedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="text-center">  
            <table className="table table-striped">
              <thead>
                <tr>                 
                  <th scope="col">Title</th>
                  <th scope="col">Related Video</th>
                  <th scope="col">Description</th>               
                </tr>
              </thead>
              
              <tbody>
                {this.props.videos.map((arrayOfVideos) => (
                  <tr key={this.props.ArrayVideoId}>                    
                    <td>{this.props.ArrayVideoTitle}</td>
                    <td>{this.props.ArrayVideoThumbnail}</td>
                    <td>{this.props.ArrayVideoDescription}</td>
                    
      
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };
    } 
    
export default RelatedVideos;