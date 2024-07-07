import { ListGroup } from 'react-bootstrap';

function SingleComment({ comment }) {
    return (
        <ListGroup className="mb-3">
            <ListGroup.Item>Score: {comment.rate}</ListGroup.Item>
            <ListGroup.Item> Review: {comment.comment}</ListGroup.Item>
            <ListGroup.Item> Author: {comment.author} </ListGroup.Item>
        </ListGroup>
    )
}
export default SingleComment;