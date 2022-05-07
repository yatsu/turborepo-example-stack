import logo from '../logo.svg';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="/" className={styles.navbarTitle}>
          <img src={logo} alt="Example App" />
          <span>Example App</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
