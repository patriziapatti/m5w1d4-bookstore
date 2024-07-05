import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function AddComment({asin}){
    const [formValue, setFormValue] = useState({
        rate: "",
        comment: "",
        elementId: asin
    })
    const handleChange = (event) =>{
        setFormValue({...formValue, [event.target.name]: event.target.value})
    }

    const handleSaveComment = async () =>{
      await  fetch("https://striveschool-api.herokuapp.com/api/comments/",{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MjlkMmEyNGEwNTAwMTViZmFkOGQiLCJpYXQiOjE3MjAxOTk2MzQsImV4cCI6MTcyMTQwOTIzNH0.cvpC9u4bNrenWmmxk5DVw-mS3gd_bkKc1ovgyK5gj18"
            },
        method: "POST",
        body: JSON.stringify(formValue)
        }
      )
    }
    //passare come prop da commentArea a commentList e poi da commentList ad AddComment la funzione loadComments e resettare i valori del form. 


    return (
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Rate from 1 to 5</Form.Label>
        <Form.Control type="number" placeholder="Rate" min="1" max="5" name='rate' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Comment</Form.Label>
        <Form.Control as="textarea" rows={3} name="comment" onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSaveComment}>Send Comment</Button>
    </Form>
    )
}
export default AddComment;