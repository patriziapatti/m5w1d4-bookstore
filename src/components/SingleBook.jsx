import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { useState } from 'react';
import CommentArea from './CommentArea';

function SingleBook({book}){

  const [select,setSelect] = useState(false)
  const handleClick = () =>{
    setSelect(!select)
  }
    return(
      <>
        <Card className={select?" bookCard redBorder" : "bookCard"} style={{ width: '18rem' }} >
                     <Card.Img variant="top" className=" copertine" src={book.img} onClick={handleClick}/>
                     <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>{book.price}€</Card.Text>
                       {select && <CommentArea asin={book.asin}/>}
                     </Card.Body>
                   </Card>
                  
                   </>
    )
}
export default SingleBook;