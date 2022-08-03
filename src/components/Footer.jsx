import React from 'react';
import { Link } from 'react-router-dom';

import './../style/footer.css';
import instagram_icon from './../img/instagram.png';
import fb_icon from './../img/facebook.png';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-links">
        <div>
          <a
            className='smIcons'
            href="https://www.instagram.com/anneliisv_photography/"
            target="_blank">
            <img src={instagram_icon} alt="instagram icon"></img>
          </a>
          <a
            className='smIcons'
            href="https://www.facebook.com/AVoorePhotography"
            target="_blank">
            <img src={fb_icon} alt="ifacebook icon"></img>
          </a>
        </div>

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
