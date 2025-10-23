import Hero from './Hero';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';

//#2E734C --green
//#234261 --blue lettering nav
//#6D92B4 --light blue lettering
//#F4F5F6 --grey background


function Home() {
  return (
    <div className="App">
      <div id='hero'>
        <Hero />
      </div>
      <div id='products'>
        <Products />
      </div>
      <div id='services'>
        <Services />
      </div>
      {/* <div id='contact'>
        <Contact />
      </div> */}
    </div>
  );
}

export default Home;
