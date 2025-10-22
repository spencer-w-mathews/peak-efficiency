import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Nav from './Pages/Nav';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Route, Router, Routes } from 'react-router-dom';

//#2E734C --green
//#234261 --blue lettering nav
//#6D92B4 --light blue lettering
//#F4F5F6 --grey background


function App() {
  return (
    <div className="App">
      <Nav />
        
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
          </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
