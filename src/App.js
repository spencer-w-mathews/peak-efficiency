import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Nav from './Pages/Nav';
import Products from './Pages/Products';
import Services from './Pages/Services';

//#2E734C --green
//#234261 --blue lettering nav
//#6D92B4 --light blue lettering
//#F4F5F6 --grey background


function App() {
  return (
    <div className="App">
      <Nav />
      <div id='hero'>
        <Hero />
      </div>
      <div id='products'>
        <Products />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='about'>
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
