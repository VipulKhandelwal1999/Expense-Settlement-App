import { Link } from 'react-router-dom';
import styles from './AboutUsSection.module.css';

const AboutUsSection = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles['inner-header']}`}>
        <div className={styles.flex}>
          <h1 className={styles.heading}>ABOUT US</h1>
          <p className={styles.para}>
            Expense Settlement App is a web Application that makes it easy to
            split bills with friends and family. We organize all your shared
            expenses in one place, so that everyone can see who they owe.
            Whether you are sharing a ski vacation, splitting rent with
            roommates, or paying someone back for lunch, Splitwise makes life
            easier. <br />
            <br />
            We focus on fairness Most people want to be fair to each other, but
            sometimes they forget, or can’t decide on what fair is.
          </p>
          <div className={styles['button-container']}>
            <Link to='/' className={styles.links}>
              <div className={`${styles.button} ${styles.regular}`}>HOME</div>
            </Link>
            <Link to='/use-now' className={styles.links}>
              <div className={`${styles.button} ${styles.regular}`}>
                USE NOW
              </div>
            </Link>
          </div>
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

export default AboutUsSection;
