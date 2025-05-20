import styles from './Header.module.css';

// components/Header.tsx
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.lista}>
          <li><a href="#hosting" className="hover:underline">Hosting</a></li>
          <li><a href="#domain" className="hover:underline">Domain</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#support" className="hover:underline">Support</a></li>
          <li><a href="#community" className="hover:underline">Community</a></li>
        </ul>
      </nav>
    </header>
  );
}
