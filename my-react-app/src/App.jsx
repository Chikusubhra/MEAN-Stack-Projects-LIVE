import Banner from "./Banner.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Services.jsx";
import AboutUs from "./AboutUs.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import "./NavBar.css";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
