import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-black flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>

            <Link to="/" className='navbar-brand fw3 fs22 flex align-center'>
              <span className='navbar-brand-text fw7'>RECEITAS</span>
              <GiForkKnifeSpoon />
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar