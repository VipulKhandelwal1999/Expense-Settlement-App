import styles from './TableComponent.module.css';
import TableContainer from '../TableContainer/TableContainer';

const TableComponent = ({
  allTransactions,
  splitwiseTransactions,
  buildGraph,
}) => {
  return (
    <div className={styles.table__background}>
      <section className={styles.section}>
        <h1 className={styles.h1}>ALL TRANSACTIONS</h1>
        <div className={styles['button__container']}>
          <button className={styles.button} onClick={buildGraph}>
            BUILD GRAPH
          </button>
          <button className={styles.button} onClick={splitwiseTransactions}>
            SIMPLIFY SETTLEMENTS
          </button>
        </div>
        <TableContainer allTransactions={allTransactions} />
      </section>
    </div>
  );
};

export default TableComponent;
