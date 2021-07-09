import styles from './TableComponent.module.css';

const TableComponent = ({ allTransactions }) => {
  return (
    <div className={styles.table__background}>
      <section className={styles.section}>
        <h1 className={styles.h1}>ALL TRANSACTIONS</h1>
        <div className={styles['tbl-header']}>
          <table
            className={styles.table}
            cellPadding='0'
            cellSpacing='0'
            border='0'
          >
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>PAYER</th>
                <th className={styles.th}>PAYEE</th>
                <th className={styles.th}>AMOUNT</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={styles['tbl-content']}>
          <table
            className={styles.table}
            cellPadding='0'
            cellSpacing='0'
            border='0'
          >
            <tbody>
              {allTransactions.map(({ payer, payee, amount }, index) => (
                <tr key={index}>
                  <td className={styles.td}>{payer}</td>
                  <td className={styles.td}>{payee}</td>
                  <td className={styles.td}>{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.spacing}></div>
      </section>
    </div>
  );
};

export default TableComponent;
