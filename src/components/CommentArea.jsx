import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MjlkMmEyNGEwNTAwMTViZmFkOGQiLCJpYXQiOjE3MjAxOTk2MzQsImV4cCI6MTcyMTQwOTIzNH0.cvpC9u4bNrenWmmxk5DVw-mS3gd_bkKc1ovgyK5gj18"
            }
        })
        const data = await response.json()
        setComments(data)
    }
    useEffect(() => {
        loadComments()
    }, [])
    return (
        <>
            <AddComment asin={asin} />
           <CommentList comments={comments}/>
        </>
    )
}

export default CommentArea;