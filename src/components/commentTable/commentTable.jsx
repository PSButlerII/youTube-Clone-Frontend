const CommentTable = (props) => {
  return (
    <div className="text-center">  
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Comment</th>
            <th scope="col">Likes</th>
            <th scope="col">Dislikes</th>
            
          </tr>
        </thead>
        
        <tbody>
          {props.comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.new_comment}</td>             
              <td>{comment.likes}
              <button type="button" class="btn btn-outline-secondary" onClick={() => props.addLike(comment.video_id)}>Like</button>
              </td>
              <td>{comment.dislikes}
              <button type="button" class="btn btn-outline-secondary" onClick={() => props.addDislike(comment.video_id)}>Dislike</button>
              </td>
              {/* <button type="button" class="btn btn-outline-secondary" onClick={() => props.addReply(song.id)}>Delete</button> */}
              

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentTable;
