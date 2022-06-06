import React from 'react';
import { Link } from 'react-router-dom';

import './../style/footer.css';

export default function Footer() {
  return (
    <div id="footer">
        <div className='footer-links'>
  
      <Link to="/" className="navLink">
        Avaleht
      </Link>
      <Link to="/portfoolio" className="navLink">
        Portfoolio
      </Link>
      <Link to="/hinnakiri" className="navLink">
        Hinnakiri
      </Link>
      <Link to="/fotograafist" className="navLink">
        Fotograafist
      </Link>
      <Link to="/kontakt" className="navLink">
        Kontakt
      </Link>
      <p>© 2022 all rights reserved</p>
      </div>
    </div>
  );
}
