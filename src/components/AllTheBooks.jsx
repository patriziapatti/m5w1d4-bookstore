import { books } from "../data/Books";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Libri from "./Libri";
function AllTheBooks(){
    return (
        <main className="mx-2">
            
            <h3 className="text-center text-primary">Book List:</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {books.map((b) => (
                     <Libri key={b.asin} book={b} />
                )
            )} 
           </div>
        </main>
    )
}
export default AllTheBooks;