import { books } from "../data/Books";
import './Main.css'
function Main(){
    return (
        <main className="mx-2">
            
            <h3 className="text-center text-primary bg-body-secondary">Book List</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {books.map((book) => (
                    <div><img src={book.img} alt="image" className="copertine" /></div>
                )
            )} 
           </div>
        </main>
    )
}
export default Main;