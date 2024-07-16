import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SingleBook.css'
import { useContext, useState } from 'react';
// import CommentArea from './CommentArea';
import { ThemeContext } from '../context/ThemeContextProvider';

function SingleBook({ book, select, handleClick }) {
  const {theme} = useContext(ThemeContext)
  // const [select, setSelect] = useState(false)
  // const handleClick = () => {
  //   setSelect(!select)
  // }
  return (
    <>
      <Card className={theme === 'light'? 'bookCard cardMargin': 'bookCardDark cardMargin bg-dark '} style={{ width: '18rem' }} data-bs-theme={theme}>
        <Card.Img variant="top" className={select === book.asin ? "copertine redBorder" : "copertine" } src={book.img} onClick={()=>handleClick(book.asin)} />
        <Card.Body >
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}€</Card.Text>
          {/* {select && <CommentArea asin={book.asin} />} */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </>
  )
}
export default SingleBook;