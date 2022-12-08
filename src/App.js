import "./App.css";
import Footer from "./components/footer/Footer";
import MainPalette from "./components/MainPalette/MainPalette";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nabor from "./components/Nabor/Nabor";

function App() {
  return (
    <Router>
      <div className="div-fon-color">
        <Nav></Nav>
        <h1 className="h1-text">Coppied</h1>
        {/*  <section className="main-section">
        <div className="bg-main"> */}
        <Routes>
          <Route exact path="/" element={<MainPalette />}></Route>
          <Route
            exact
            path="/palete/:paleteId"
            element={<Nabor></Nabor>}
          ></Route>
        </Routes>
        {/* </div>
      </section> */}
        <section className="paleteidd"></section>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
