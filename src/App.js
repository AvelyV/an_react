import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Kontakt from './components/Kontakt';
import Portfolio from './components/Portfolio';
import Hinnakiri from './components/Hinnakiri';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotograafist" element={<About />} />
        <Route path="/portfoolio" element={<Portfolio />} />
        <Route path="/hinnakiri" element={<Hinnakiri />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
