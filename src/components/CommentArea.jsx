import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllM2YyZTA5OWJlMjAwMTU5MWNjMGEiLCJpYXQiOjE3MjE2NDY4OTQsImV4cCI6MTcyMjg1NjQ5NH0.mZdksicFoUis4kCyWKLHPqjPhz6JIDMnxhalbTYDsi4"
                }
            })
            if (response.ok) {
                const data = await response.json()
                setComments(data)
            }
            else {
                console.error('Failed to fetch comments')
            }
        } catch (error) {
            console.error("Error fetching comments:", error)
        }
    }
    useEffect(() => {
        loadComments()
    }, [asin]);
    return (
        <>
            <AddComment asin={asin} loadComments={loadComments} />
            <CommentList comments={comments} loadComments={loadComments} />
        </>
    )
}

export default CommentArea;