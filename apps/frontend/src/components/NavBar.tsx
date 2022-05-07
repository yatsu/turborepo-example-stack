import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import styles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();

  const navLinkStyle = (path: string) => {
    return location.pathname === path ? styles.navActive : styles.navInactive;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="/" className={styles.navbarTitle}>
          <img src={logo} alt="Example App" />
          <span>Example App</span>
        </a>

        <div className={styles.navMenu}>
          <ul className={styles.navMenuContent}>
            <li>
              <Link to="/" className={navLinkStyle('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/todos" className={navLinkStyle('/todos')}>
                ToDos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
