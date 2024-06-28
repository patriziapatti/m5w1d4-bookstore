import Main from "./components/Main";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import './components/Main.css'

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <Main />
      <MyFooter />
    </div>
  );
}

export default App;
