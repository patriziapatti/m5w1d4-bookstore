import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyFooter(){
    return(
        <footer className='m-4'>
            <Row className='justify-content-center'>
                <Col xs={12} sm={4} className='text-center'>Epicbook Bookshop srl -Via Roma, 100 90100 Palermo</Col>
                <Col xs={12} sm={4} className='text-center'>P.I: 1234567890</Col>
                <Col xs={12} sm={4} className='text-center'>Reg. imprese Palermo nr. 05329570963 - R.E.A. MI 1813088 </Col>
            </Row>
        </footer>
    )
}

export default MyFooter;