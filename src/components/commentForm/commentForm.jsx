import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {          
          video_id:this.props.video_id,       
          new_comment:'',
          previous_comment:"",
          likes: 0,
          dislikes: 0


      }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          }
  
      handleChange = (event) => {
          this.setState({
              [event.target.name]: event.target.value
          });
          console.log (event.target.value)
        }
  
  
      handleSubmit = (event) => {
          event.preventDefault();
          const comment = {                   
              video_id: this.props.video_id,              
              new_comment: this.state.new_comment,
              previous_comment: null,
              likes: 0,
              dislikes: 0           
          }
          console.log(comment)
          this.props.addComment(comment);
              this.setState({               
                new_comment: this.state.new_comment  
              },
              console.log(this)
              );
      }
  
    
    render() {
      return (
        <React.Fragment>
    <div className="center">
        
            <form className="form-inline" onSubmit={this.handleSubmit}>
            <h2>Add Comment</h2>
  
            <input
              type="text"
              name="new_comment"
              placeholder="New Comment"
              onChange={this.handleChange}
              value={this.state.new_comment}
            />             
            <button type="submit"> Submit </button>
          </form>
  </div>
  
    <hr />
        </React.Fragment>
      );
    }
  }
  
  export default CommentForm;
