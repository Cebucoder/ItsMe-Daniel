import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./css/main-style.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
