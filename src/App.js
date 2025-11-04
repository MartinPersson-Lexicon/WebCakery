import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import NoPage from "./pages/no-page";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
