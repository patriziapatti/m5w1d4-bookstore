import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function AddComment({ asin, loadComments }) {
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin
  };

  const [formValue, setFormValue] = useState(initialFormState)
  const [alert, setAlert] = useState(null)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSaveComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllM2YyZTA5OWJlMjAwMTU5MWNjMGEiLCJpYXQiOjE3MjE2NDY4OTQsImV4cCI6MTcyMjg1NjQ5NH0.mZdksicFoUis4kCyWKLHPqjPhz6JIDMnxhalbTYDsi4"
        },
        method: "POST",
        body: JSON.stringify(formValue)
      }
      )
      if (response.ok) {

        loadComments();
        setFormValue(initialFormState)
        // alert("Comment successfully added!") 
        setAlert({
          success: true,
          message: "Comment successfully added!"
        })
      } else {
        // alert("Unable to add the comment! All fields are required.")
        setAlert({
          success: false,
          message: "Unable to add the comment! All fields are required."
        })
      }
    }
    catch (error) {
      // alert("Generic Error! Try Later.")
      setAlert({
        success: false,
        message: "Generic Error! Try Later."
      })
    }
    setTimeout(() => {
      setAlert(null)
    }, 2000
    )

  };
  //passare come prop da commentArea a commentList e poi da commentList ad AddComment la funzione loadComments e resettare i valori del form. 

  return (
    <>
      {alert && <Alert key={alert.success ? "success" : "danger"} variant={alert.success ? "success" : "danger"} onClose={() => setAlert(null)} dismissible>{alert.message}</Alert>}
      <Form>
        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>Rate from 1 to 5</Form.Label>
          <Form.Control type="number" placeholder="Rate" min="1" max="5" name='rate' value={formValue.rate} required onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control as="textarea" rows={3} name="comment" value={formValue.comment} required onChange={handleChange} />
        </Form.Group>
        <Button className='mb-2' variant="primary" onClick={handleSaveComment}>Add Comment</Button>
      </Form>
    </>
  )

}
export default AddComment;

