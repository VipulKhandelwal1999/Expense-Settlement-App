import styles from './TableComponent.module.css';
import TableContainer from '../TableContainer/TableContainer';
import Graph from '../Graph/Graph';

const TableComponent = ({
  allTransactions,
  splitwiseTransactions,
  outputList,
  flag,
  finalTransactions,
  graphData,
}) => {
  return (
    <div className={styles.table__background}>
      <section className={styles.section}>
        {flag && <h1 className={styles.h1}>ALL TRANSACTIONS</h1>}
        {!flag && <h1 className={styles.h1}>SIMPLIFIED TRANSACTIONS</h1>}
        <div className={styles['button__container']}>
          {outputList && outputList.length === 0 && (
            <button className={styles.button} onClick={splitwiseTransactions}>
              SIMPLIFY SETTLEMENTS
            </button>
          )}
        </div>
        <div className={!flag ? styles.table__container : ''}>
          <div>
            {flag && <TableContainer allTransactions={allTransactions} />}
            {!flag && <TableContainer allTransactions={finalTransactions} />}
          </div>
          {!flag && (
            <div className={styles.graph__container}>
              
              {graphData && graphData.length > 0 && (
                <Graph graphData={graphData} />
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TableComponent;
