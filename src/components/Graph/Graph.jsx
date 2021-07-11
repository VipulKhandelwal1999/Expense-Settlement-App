import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './Graph.module.css';

const Graph = ({ graphData, graphConfig }) => {
  const data = {
    labels: graphData.map(x => x.person1),
    datasets: [
      {
        label: 'How Much They Owe',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.graph__container}>
      
      <Doughnut
        data={data}
        width={90}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Graph;
