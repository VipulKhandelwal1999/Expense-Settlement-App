import { useState } from 'react';
import styles from './UseNowSection.module.css';
import AllNamesContainer from '../AllNames/AllNamesContainer';
const UseNowSection = () => {
  const [name, setName] = useState('');
  const [allNames, setAllNames] = useState('');
  const addParticipant = () => {
    setAllNames((previous) => [...previous, { name }]);
    setName('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content__container}>
        <div className={styles.content__container__header}>
          <h2 className={styles.content__container__header__heading}>
            ENTER NAMES OF PEOPLE IN THE GROUP
          </h2>
          <div className={styles['form-group']}>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles['form-field']}
            />
            <span className={styles['submit-button']} onClick={addParticipant}>
              ADD NOW
            </span>
          </div>
        </div>
        {allNames && <AllNamesContainer allNames={allNames} />}
      </div>
    </div>
  );
};

export default UseNowSection;
