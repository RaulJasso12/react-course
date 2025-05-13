import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Acerca de', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Contacto', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Mi Sitio</div>
      <button className="nav-toggle" onClick={toggleMenu}>☰</button>
      <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} onClick={handleLinkClick}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
