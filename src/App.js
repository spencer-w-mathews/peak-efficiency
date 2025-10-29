import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Nav from './Pages/Nav';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import SecurityIntegrations from './Pages/SandI';
import Resources from './Pages/Resources';
import BookForm from './Pages/Products/Book';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Pricing from './Pages/Pricing/Pricing';

//#2E734C --green
//#234261 --blue lettering nav
//#6D92B4 --light blue lettering
//#F4F5F6 --grey background

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book" element={<BookForm />} />
          <Route path="/security" element={<SecurityIntegrations />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
