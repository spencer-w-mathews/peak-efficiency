import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Nav from './Pages/Nav';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductsExp from './Pages/Products/ProductsExp';
import emailFilter from './images/emailFilter.png'
import morningBrief from './images/morningBrief.png'
import commandBoard from './images/commandBoard.png'
import WhoWeServe from './Pages/WhoWeServe/WhoWeServe';

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
                    
                  />
                } 
              />
              <Route path="/products/morning-brief" 
                element={
                  <ProductsExp 
                    Title={'Morning Brief'} 
                    subText={'Start each day with a clear snapshot of what matters most — key emails, meetings, and action items — all summarized by AI.'}
                    image={morningBrief}
                    
                  />
                } 
              />
              <Route path="/products/command-board" 
                element={
                  <ProductsExp 
                    Title={'Command Board'} 
                    subText={'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'}
                    image={commandBoard}
                    
                  />
                } 
              />
              <Route path="/Who-We-Serve/lawyers" 
                element={
                  <WhoWeServe
                    Title={'lawyers'} 
                    subText={'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'}
                    image={commandBoard}
                    
                  />
                } 
              />
              <Route path="/Who-We-Serve/health-care" 
                element={
                  <WhoWeServe
                    Title={'Health Care'} 
                    subText={'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'}
                    image={commandBoard}
                    
                  />
                } 
              />
              <Route path="/Who-We-Serve/real-estate" 
                element={
                  <WhoWeServe
                    Title={'Real Estate'} 
                    subText={'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'}
                    image={commandBoard}
                    
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
