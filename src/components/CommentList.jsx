import SingleComment from "./SingleComment"


function CommentList({ comments, loadComments }) {
    return (
        <>
            {comments.map(c =>
                <SingleComment key={c._id} comment={c} loadComments={loadComments} />)}

        </>

    )
}
export default CommentList