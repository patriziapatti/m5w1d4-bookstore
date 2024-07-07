import SingleComment from "./SingleComment"
import {ListGroup} from 'react-bootstrap';


function CommentList({ comments, loadComments }) {

    return (

        <>
            {comments.map(c =>
                <SingleComment key={c._id} comment={c} />)}

        </>

    )
}
export default CommentList