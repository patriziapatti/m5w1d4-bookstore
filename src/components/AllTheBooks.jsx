import "./AllTheBooks.css"
import { books } from "../data/Books";
import SingleBook from "./SingleBook";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';


function AllTheBooks({ resultSearch }) {
    const { theme } = useContext(ThemeContext)
    const [select, setSelect] = useState(null)
    const handleClick = (asin) => {
        if (asin === select) {
            setSelect(null)
        } else {
            setSelect(asin)
        }

    }
    return (
        <main className={theme === "light" ? "" : "bg-dark"} data-bs-theme={theme}>

            <h3 className="text-center text-primary">Book List:</h3>
            <Container fluid>
                <Row>
                    <Col xs={6} md={8} lg={9}>
                        <div className="d-flex flex-wrap justify-content-evenly pe-0 ">
                            {resultSearch.map((b) => (
                                <SingleBook key={b.asin} book={b} select={select} handleClick={handleClick} />
                            )
                            )}
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className="colonnaSticky">
                        {select && <CommentArea asin={select} />}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
export default AllTheBooks;