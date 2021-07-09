import styles from './AddTransactions.module.css';
import TableComponent from '../TableComponent/TableComponent';
const AddTransactions = ({
  allNames,
  handleSubmit,
  payer,
  payee,
  setPayer,
  setPayee,
  amount,
  setAmount,
  allTransactions,
  splitwiseTransactions,
  buildGraph
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content__container}>
        <div className={styles.add__transactions__details__container}>
          <h3 className={styles.content__container__header__heading}>
            ENTER TRANSACTIONS IN THE TABLE GIVEN BELOW 👇
          </h3>
        </div>
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.select}>
              <select
                onChange={(e) => {
                  setPayer(e.target.value);
                }}
                id='payer'
                value={payer}
              >
                <option value='Choose Payer'>Choose Payer</option>
                {allNames.length !== 0 &&
                  allNames.map((name, index) => {
                    return (
                      <option key={index} value={name.name}>
                        {name.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className={styles.select}>
              <select
                onChange={(e) => {
                  setPayee(e.target.value);
                }}
                id='payee'
                value={payee}
              >
                <option value='Choose Payee'>Choose Payee</option>
                {allNames.length !== 0 &&
                  allNames.map((name, index) => {
                    return (
                      <option key={index} value={name.name}>
                        {name.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className={styles['form-group']}>
              <input
                type='text'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={styles['form-field']}
                placeholder='Enter Amount'
              />
              <button type='submit' className={styles['submit-button']}>
                ADD
              </button>
            </div>
          </form>
        </div>
        {allTransactions && allTransactions.length > 0 && (
          <TableComponent
            allTransactions={allTransactions}
            splitwiseTransactions={splitwiseTransactions}
            buildGraph={buildGraph}
          />
        )}
      </div>
    </div>
  );
};

export default AddTransactions;
