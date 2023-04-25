import './App.css';
import NavBar from "./MyNav";
import Footer from "./MyFooter";
import Jumbotron from "./Jumbotron";
import LastRelease from "./LastRelease"



function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Jumbotron />
        <LastRelease />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
