// components/Header.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.navigation}>
        {/* Desktop Menu */}
        <nav>
          <ul className={styles.lista}>
            <li><a href="#hosting" className="hover:underline">Hosting</a></li>
            <li><a href="#domain" className="hover:underline">Domain</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#support" className="hover:underline">Support</a></li>
            <li><a href="#community" className="hover:underline">Community</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-2 px-4">
          <a href="/hosting" className="block hover:underline">Hosting</a>
          <a href="/domain" className="block hover:underline">Domain</a>
          <a href="/features" className="block hover:underline">Features</a>
          <a href="/support" className="block hover:underline">Support</a>
          <a href="/community" className="block hover:underline">Community</a>
        </nav>
      )}
    </header>
  );
}
