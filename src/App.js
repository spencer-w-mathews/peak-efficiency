import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Nav from './Pages/Nav';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductsExp from './Pages/Products/ProductsExp';
import emailFilter from './images/emailFilter_transparent.webp';
import morningBrief from './images/morningBrief_transparent.webp';
import commandBoard from './images/commandBoard_transparent.webp';
import strategicIntel from './images/strategicIntel.webp';
import WhoWeServe from './Pages/WhoWeServe/WhoWeServe';
import SecurityIntegrations from './Pages/SandI';
import Resources from './Pages/Resources';
import GPT from './images/GPT_transparent.webp';
import BookForm from './Pages/Products/Book';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

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
          <Route
            path="/products/email-filter-sorter"
            element={
              <ProductsExp
                Title={'Email Filter & Sorter'}
                subText={
                  'Removes noise, routes what matters, and drafts replies in your tone — your inbox finally works for you.'
                }
                image={emailFilter}
              />
            }
          />
          <Route
            path="/products/morning-brief"
            element={
              <ProductsExp
                Title={'Morning Brief'}
                subText={
                  'Start each day with a clear snapshot of what matters most — key emails, meetings, and action items — all summarized by AI.'
                }
                image={morningBrief}
              />
            }
          />
          <Route
            path="/products/command-board"
            element={
              <ProductsExp
                Title={'Command Board'}
                subText={
                  'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'
                }
                image={commandBoard}
              />
            }
          />
          <Route
            path="/products/custom-gpt"
            element={
              <ProductsExp
                Title={'Custom GPT Solutions'}
                subText={
                  'Fully customized GPTs built for individuals, teams, and enterprises — tailored to your goals, workflows, and communication style.'
                }
                image={GPT}
              />
            }
          />
          <Route
            path="/products/strategic-intelligence"
            element={
              <ProductsExp
                Title={'Strategic Intelligence'}
                subText={
                  'AI-powered strategy, backed by real data — built to help leaders decide faster and scale smarter.'
                }
                image={strategicIntel}
              />
            }
          />
          <Route path="/book" element={<BookForm />} />
          <Route
            path="/Who-We-Serve/lawyers"
            element={
              <WhoWeServe
                Title={'lawyers'}
                subText={
                  'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'
                }
                image={commandBoard}
              />
            }
          />
          <Route
            path="/Who-We-Serve/health-care"
            element={
              <WhoWeServe
                Title={'Health Care'}
                subText={
                  'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'
                }
                image={commandBoard}
              />
            }
          />
          <Route
            path="/Who-We-Serve/real-estate"
            element={
              <WhoWeServe
                Title={'Real Estate'}
                subText={
                  'A secure central hub where you can see everything — communications, priorities, and progress — in one place.'
                }
                image={commandBoard}
              />
            }
          />
          <Route path="/security-and-integrations" element={<SecurityIntegrations />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
