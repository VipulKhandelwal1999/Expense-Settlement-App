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
  graphConfig,
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
        <div className={styles.table__container}>
          <div>
            {flag && <TableContainer allTransactions={allTransactions} />}
            {!flag && <TableContainer allTransactions={finalTransactions} />}
          </div>
          <div className={styles.graph__container}>
            <button className={styles.button} onClick={splitwiseTransactions}>
              SIMPLIFY SETTLEMENTS
            </button>
            {graphData && graphData.length > 0 && (
              <Graph graphData={graphData} graphConfig={graphConfig} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableComponent;
