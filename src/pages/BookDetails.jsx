import {  useParams } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap';
import { books } from '../data/Books';
import CommentArea from '../components/CommentArea';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';


function BookDetails() {
    const {theme} = useContext(ThemeContext)
    const { asin } = useParams();
    const selectedBook = books.find(book => book.asin === asin) //find itera su ogni elemento dell'array books.Confronto: Per ogni book, controlla se book.asin è uguale a asin; e restituisce il primo libro (oggetto) che soddisfa questa condizione.

    return (
        <div className={theme ==="light"?"" : "bg-dark text-white" } data-bs-theme={theme} >
         <Container >
         <h1 className='text-center'>Book Details: <span className='d-none'>{asin}</span> {selectedBook.title} </h1>
         <Row >
            <Col xs={12} md={5} lg={5} className='d-flex justify-content-center'>
            <Card className='cardMargin'style={{ width: '18rem', height: '35rem'}}>
            <Card.Img variant="top" className= "copertine" src={selectedBook.img} />
            <Card.Body >
              <Card.Title>{selectedBook.title}</Card.Title>
              <Card.Text>{selectedBook.price}€</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        
          <Col xs={12} md={5} lg={5} >
          {asin && <CommentArea asin={asin}/>} 
          </Col>
          </Row>
          {/* <div className='ps-1'>
            <h6>Description:</h6>
            <p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div> */}
          </Container>
          </div>
    )
}
/* riga 25 asin nell'istante 0 è null e quindi comment area riceve come asin null e quindi non mi fa aggiungere il commento */

export default BookDetails;