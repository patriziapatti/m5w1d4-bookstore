import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyFooter.css'
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';

function MyFooter() {
    const { theme } = useContext(ThemeContext)
    return (
        <Container fluid className={theme === "light" ? 'footer mt-3 mb-0' : "mb-0"}>
            <Row className={theme === "light" ? 'justify-content-center py-3' : 'bg-dark text-white justify-content-center py-3'}>
                <Col xs={12} sm={4} className='text-center'>Epicbook Bookshop srl -Via Roma, 100 90100 Palermo</Col>
                <Col xs={12} sm={4} className='text-center'>P.I: 1234567890</Col>
                <Col xs={12} sm={4} className='text-center'>Reg. imprese Palermo nr. 05329570963 - R.E.A. MI 1813088 </Col>
            </Row>
        </Container>
    )
}

export default MyFooter;