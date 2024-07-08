import SingleComment from "./SingleComment"


function CommentList({ comments, onDelete }) {
    const handleDelete = (commentId) => {
        const updateComments= comments.filter(comment => comment._id !== commentId)
        onDelete(updateComments)
    }
    if (!Array.isArray(comments) || comments.length === 0){
        return <p>No comments available yet</p>
    }
    return (
        <>
            {comments.map(c =>
                <SingleComment key={c._id} comment={c} onDelete={handleDelete} />)}

        </>

    )
}
export default CommentList