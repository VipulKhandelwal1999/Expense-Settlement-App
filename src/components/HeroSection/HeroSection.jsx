import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import logo from '../../images/rupee.png';

const HeroSection = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles['inner-header']}`}>
        <div className={styles.flex}>
          <div className={logo}>
            <img className={styles['logo-rupee']} src={logo} alt='rupee-logo' />
          </div>
          <h1 className={styles.heading}>EXPENSE SETTLEMENT APP</h1>
        </div>
        <div className={styles['button-container']}>
          <Link to='/use-now' className={styles.links}>
            <div className={`${styles.button} ${styles.regular}`}>USE NOW</div>
          </Link>
          <Link to='/about-us' className={styles.links}>
            <div className={`${styles.button} ${styles.regular}`}>ABOUT US</div>
          </Link>
        </div>
      </div>

      <div>
        <svg
          className={styles.waves}
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className={styles.parallax}>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(255,255,255,0.7'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(255,255,255,0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(255,255,255,0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
          </g>
        </svg>
      </div>
      <div className={`${styles.content} ${styles.flex}`}>
        <p>DEVELOPED BY VIPUL KHANDELWAL</p>
      </div>
    </div>
  );
};

export default HeroSection;
