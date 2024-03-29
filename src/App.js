import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavComponent from './components/NavComponent';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Kontakt from './components/pages/Kontakt';
import Portfolio from './components/pages/Portfolio';
import Hinnakiri from './components/pages/Hinnakiri';
import Hinnad from './components/pages/Hinnad';
import Stilistika from './components/pages/Stilistika';

function App() {
  return (
    <BrowserRouter >
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotograafist" element={<About />} />
        <Route path="/portfoolio" element={<Portfolio />} />
        <Route path="stilistikaABC" element={<Stilistika />} />
        <Route path="/hinnakiri" element={<Hinnakiri />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/hinnad" element={<Hinnad/>} />

        <Route path="*" element={<h4>Page Not Found</h4>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
