import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        try{
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhNWQ1ZWQzOTNmYzAwMTU5NzNmMWEiLCJpYXQiOjE3MjAzNDM5MDMsImV4cCI6MTcyMTU1MzUwM30.ui6ps0kQ5wmjJBFjxjmSsltT3r0hOMwUY7vaUTK6E0c"
            }
        })
        if (response.ok){
            const data = await response.json()
        setComments(data)}
        else{
            console.error('Failed to fetch comments')
        }
    }catch(error){
        console.error ("Error fetching comments:", error)
    }
    }
    useEffect(() => {
        loadComments()
    }, [asin]);

    const handleDeleteComment = (updateComments) => {
        setComments(updateComments)
    }

    const handleAddedComment = async () => {
        loadComments()
    }
    return (
        <>
            <AddComment asin={asin} addedComment={handleAddedComment} />
           <CommentList comments={comments} onDelete={handleDeleteComment}/>
        </>
    )
}

export default CommentArea;