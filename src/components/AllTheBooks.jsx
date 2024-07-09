import { books } from "../data/Books";
import SingleBook from "./SingleBook";
// import {Form, InputGroup} from 'react-bootstrap';
// import { useState } from 'react';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
function AllTheBooks({resultSearch}){
    // const [search, setSearch] = useState("");
    // const [resultSearch, setResultSearch] = useState(books)
    // const handleSearch = (event) => {
    //     setSearch(event.target.value);
    //     const resultSearchTemp = books.filter((b) => {
    //       return b.title.toLowerCase().includes(event.target.value.toLowerCase());
    //     })
    //     setResultSearch(resultSearchTemp)
    // }
    return (
        <main className="mx-2">
            
            <h3 className="text-center text-primary">Book List:</h3>
            {/* <InputGroup className="mb-3"> */}
        {/* <InputGroup.Text>Search Your Book</InputGroup.Text> */}
        {/* <Form.Control 
          placeholder='Search your Book' onChange={handleSearch}/>   
      </InputGroup> */}
            <div className="d-flex flex-wrap justify-content-center">
                {resultSearch.map((b) => (
                     <SingleBook key={b.asin} book={b} />
                )
            )} 
           </div>
        </main>
    )
}
export default AllTheBooks;