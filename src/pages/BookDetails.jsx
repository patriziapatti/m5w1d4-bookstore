import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { books } from '../data/Books';
import CommentArea from '../components/CommentArea';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';


function BookDetails() {
  const { theme } = useContext(ThemeContext)
  const { asin } = useParams();
  const selectedBook = books.find(book => book.asin === asin) //find itera su ogni elemento dell'array books.Confronto: Per ogni book, controlla se book.asin è uguale a asin; e restituisce il primo libro (oggetto) che soddisfa questa condizione.

  return (
    <div className={theme === "light" ? "" : "bg-dark text-white"} data-bs-theme={theme} >
      <Container >
        <h1 className='text-center'>Book Details: <span className='d-none'>{asin}</span> {selectedBook.title} </h1>
        <Row >
          <Col xs={12} md={5} lg={5} className='d-flex justify-content-center'>
            <Card className='cardMargin' style={{ width: '18rem', height: '35rem' }}>
              <Card.Img variant="top" className="copertine" src={selectedBook.img} />
              <Card.Body >
                <Card.Title>{selectedBook.title}</Card.Title>
                <Card.Text>{selectedBook.price}€</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={5} lg={5} >
            {asin && <CommentArea asin={asin} />}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
/* riga 25 asin nell'istante 0 è null e quindi comment area riceve come asin null e quindi non mi fa aggiungere il commento */

export default BookDetails;