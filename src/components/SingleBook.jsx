import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { useState } from 'react';

function SingleBook({book}){

  const [select,setSelect] = useState(false)
  const handleClick = () =>{
    setSelect(!select)
  }
    return(
        <Card className={select?" bookCard redBorder" : "bookCard"} style={{ width: '18rem' }} onClick={handleClick}>
                     <Card.Img variant="top" className=" copertine" src={book.img}/>
                     <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>{book.price}€</Card.Text>
                       {/* <Button variant="primary">Go somewhere</Button> */}
                     </Card.Body>
                   </Card>
    )
}
export default SingleBook;