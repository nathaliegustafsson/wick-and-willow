import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Masterheader from './components/Masterheader';
import PictureAndQuote from './components/PictureAndQuote';
import Products from './components/Products';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Masterheader />
        <Products />
        <About />
        <PictureAndQuote />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
