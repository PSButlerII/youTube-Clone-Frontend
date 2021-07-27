import React, { Component } from 'react';


 const Videos = (props) => {
        return ( 
            <div className="text-center">  
            <table className="table table-striped">
              <thead>
                <tr>                 
                  <th scope="col">Title</th>
                  <th scope="col">Related Video</th>
                  <th scope="col">Description</th>               
                </tr>
              </thead>
              
              <tbody>
                  <tr>                    
                    <td>{props.ArrayVideoTitleOne}</td>
                    <td>{props.ArrayVideoThumbnailOne}</td>
                    <td>{props.ArrayVideoDescriptionOne}</td>
                    
      
                  </tr>
                
              </tbody>
            </table>
          </div>
        );
      };
  
    
export default Videos;