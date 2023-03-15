// import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import "./css/main-style.css";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navigation></Navigation>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/Work" element={<Work/>}></Route>
          <Route path = "/About" element={<About/>}></Route>
          <Route path = "/Contact" element={<Contact/>}></Route>
        </Routes>

      <Footer></Footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
