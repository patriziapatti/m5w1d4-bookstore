import { useContext, useState } from "react";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import { books } from "./data/Books";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState(books)
    const handleSearch = (event) => {
        setSearch(event.target.value);
        const resultSearchTemp = books.filter((b) => {
          return b.title.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setResultSearch(resultSearchTemp)
    }
  return (
    <ThemeContextProvider>
      <div>
        <MyNav handleSearch={handleSearch} />
        <Welcome />
        <AllTheBooks resultSearch={resultSearch}/>
        <MyFooter />
      </div>
    </ThemeContextProvider>
    
  );
}

export default App;
