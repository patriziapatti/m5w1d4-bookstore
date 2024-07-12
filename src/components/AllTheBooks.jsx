import { books } from "../data/Books";
import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";

function AllTheBooks({ resultSearch }) {
    const [select, setSelect] = useState(null)
    const handleClick = (asin) => {
        if(asin === select){
            setSelect(null)
        }else{
            setSelect(asin)
        }
        
      }

    return (
        <main className="mx-2">

            <h3 className="text-center text-primary">Book List:</h3>

        <Row>
            <Col xs={6} md={8} lg={9}>
            <div className="d-flex flex-wrap justify-content-evenly ">
                {resultSearch.map((b) => (
                    <SingleBook key={b.asin} book={b} select={select} handleClick={handleClick} />
                )
                )}
            </div>
            </Col>
            <Col xs={6} md={4} lg={3}>
            {select && <CommentArea asin={select} />}
            </Col>
        </Row>
        </main>
    )
}
export default AllTheBooks;