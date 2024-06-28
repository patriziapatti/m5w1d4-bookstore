import Card from 'react-bootstrap/Card';
import './Libri.css'

function Libri({book}){
    return(
        <Card className="bookCard" style={{ width: '18rem' }}>
                     <Card.Img variant="top" className=" copertine" src={book.img}/>
                     <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>{book.price}€</Card.Text>
                       {/* <Button variant="primary">Go somewhere</Button> */}
                     </Card.Body>
                   </Card>
    )
}
export default Libri;