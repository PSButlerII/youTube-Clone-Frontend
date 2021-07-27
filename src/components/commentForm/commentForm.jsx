const CommentForm = () => {
  return (
    <div>
      <div class="mb-3"></div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
        <button name="like">Like</button>
        <button name="dislike">Dislike</button>
      </div>
    </div>
  );
};

export default CommentForm;
