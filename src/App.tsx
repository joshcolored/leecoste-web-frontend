import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Construction from "./pages/Construction";
import Products from "./pages/Products";
import Realty from "./pages/Realty";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/products" element={<Products />} />
          <Route path="/realty" element={<Realty />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
