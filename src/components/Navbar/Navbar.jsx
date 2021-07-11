import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.navbar__title} ${styles.navbar__item}`}>
        <Link to='/' className={styles.links}>
          ET
        </Link>
      </div>
      <div className={styles.navbar__item}>
        <Link to='/' className={styles.links}>
          HOME
        </Link>
      </div>
      <div className={styles.navbar__item}>
        <Link to='/about-us' className={styles.links}>
          ABOUT
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
