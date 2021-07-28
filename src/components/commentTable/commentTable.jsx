import './commentTable.css'

const CommentTable = (props) => {
  return (
    <div class="container-md">
      <div className="text-center col-md-8  bg-light ">
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table table-striped mb-0 table-bordered table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">Comment</th>
                <th scope="col">Likes</th>
                <th scope="col">Dislikes</th>
              </tr>
            </thead>

            <tbody>
              {props.comments.map((comment) => (
                <tr class="font-weight-bold" key={comment.id}>
                  <td>{comment.new_comment}</td>
                  <td>
                    {comment.likes} <br></br>
                    <button
                      type="button"
                      className="btn btn-outline-success font-weight-bold"
                      onClick={() => props.addLike(comment.id)}
                    >
                      Like
                    </button>
                  </td>
                  <td>
                    {comment.dislikes} <br></br>
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={() => props.addDislike(comment.id)}
                    >
                      Dislike
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => props.addReply(comment.id)}
                    >
                      Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentTable;
