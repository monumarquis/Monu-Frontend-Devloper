import "./App.css";
import "./responsive.css";
import Nav from "./components/Nav";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <TopBanner />
    </div>
  );
}

export default App;
