import { Link } from 'react-router-dom';
import styles from './AllNamesContainer.module.css';

const AllNamesContainer = ({ allNames }) => {
  return (
    <div className='allnames'>
      <h3 className={styles.heading}>GROUP MEMBERS</h3>
      {allNames.map((item, index) => (
        <h4 className={styles.heading} key={index}>
          {item.name.toUpperCase()}
        </h4>
      ))}
      <Link to="/add-transactions">
        <button>ADD TRANSACTIONS</button>
      </Link>
    </div>
  );
};

export default AllNamesContainer;
