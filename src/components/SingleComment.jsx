import { ListGroup } from 'react-bootstrap';
import DeleteComment from './DeleteComment';

function SingleComment({ comment, onDelete }) {
    
    
    return (
        <ListGroup className="mb-3">
            <ListGroup.Item>Score: {comment.rate}</ListGroup.Item>
            <ListGroup.Item> Review: {comment.comment}</ListGroup.Item>
            <ListGroup.Item> Author: {comment.author} </ListGroup.Item>
            <ListGroup.Item> <DeleteComment commentId={comment._id} onDelete={onDelete}/>
            </ListGroup.Item>
        </ListGroup>
    )
}
export default SingleComment;