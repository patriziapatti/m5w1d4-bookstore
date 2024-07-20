import SingleComment from "./SingleComment"
import { Alert } from 'react-bootstrap';
import { useState } from 'react';


function CommentList({ comments, loadComments }) {
    const [alert, setAlert] = useState(null)
    return (
        <>
            {alert && <Alert key={alert.success ? "success" : "danger"} variant={alert.success ? "success" : "danger"} onClose={() => setAlert(null)} dismissible>{alert.message}</Alert>}
            {comments.map(c =>
                <SingleComment key={c._id} comment={c} loadComments={loadComments} setAlert={setAlert} />)}

        </>

    )
}
export default CommentList