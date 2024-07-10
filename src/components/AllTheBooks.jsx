import { books } from "../data/Books";
import SingleBook from "./SingleBook";

function AllTheBooks({ resultSearch }) {

    return (
        <main className="mx-2">

            <h3 className="text-center text-primary">Book List:</h3>
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