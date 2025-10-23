import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Nav from './Pages/Nav';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import ProductsExp from './Pages/Products/ProductsExp';
import emailFilter from './images/emailFilter.png'
import morningBrief from './images/morningBrief.png'
import commandBoard from './images/commandBoard.png'

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
              <Route path="/products/email-filter-sorter" 
                element={
                  <ProductsExp 
                    Title={'Email Filter & Sorter'} 
                    subText={'Removes noise, routes what matters, and drafts replies in your tone — your inbox finally works for you.'}
                    image={emailFilter}
                    howItWorks={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio urna, imperdiet eu ultricies a, finibus id urna. Cras ex lacus, molestie in finibus luctus, ornare nec neque. Proin egestas metus justo, eu imperdiet urna luctus ac. Donec vitae quam non purus blandit ultrices. Sed lacinia mollis lectus. Fusce rhoncus orci quis nunc sodales, et viverra dolor varius. Quisque maximus pellentesque neque, nec rhoncus massa elementum bibendum. Donec in eros sed velit pretium vestibulum in nec quam. Vestibulum in dui maximus, sodales eros sed, molestie dolor. Duis pulvinar fringilla vulputate. Nulla facilisi.'}
                  />
                } 
              />
              <Route path="/products/morning-brief" 
                element={
                  <ProductsExp 
                    Title={'Morning Brief'} 
                    subText={'Start each day with a clear snapshot of what matters most — key emails, meetings, and action items — all summarized by AI.'}
                    image={morningBrief}
                    howItWorks={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio urna, imperdiet eu ultricies a, finibus id urna. Cras ex lacus, molestie in finibus luctus, ornare nec neque. Proin egestas metus justo, eu imperdiet urna luctus ac. Donec vitae quam non purus blandit ultrices. Sed lacinia mollis lectus. Fusce rhoncus orci quis nunc sodales, et viverra dolor varius. Quisque maximus pellentesque neque, nec rhoncus massa elementum bibendum. Donec in eros sed velit pretium vestibulum in nec quam. Vestibulum in dui maximus, sodales eros sed, molestie dolor. Duis pulvinar fringilla vulputate. Nulla facilisi.'}
                  />
                } 
              />
              <Route path="/products/command-board" 
                element={
                  <ProductsExp 
                    Title={'Command Board'} 
                    subText={'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'}
                    image={commandBoard}
                    howItWorks={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio urna, imperdiet eu ultricies a, finibus id urna. Cras ex lacus, molestie in finibus luctus, ornare nec neque. Proin egestas metus justo, eu imperdiet urna luctus ac. Donec vitae quam non purus blandit ultrices. Sed lacinia mollis lectus. Fusce rhoncus orci quis nunc sodales, et viverra dolor varius. Quisque maximus pellentesque neque, nec rhoncus massa elementum bibendum. Donec in eros sed velit pretium vestibulum in nec quam. Vestibulum in dui maximus, sodales eros sed, molestie dolor. Duis pulvinar fringilla vulputate. Nulla facilisi.'}
                  />
                } 
              />
              <Route path="*" element={<Home />} />
          </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
