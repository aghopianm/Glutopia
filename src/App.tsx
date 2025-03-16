import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/About/About";
import "./components/styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
