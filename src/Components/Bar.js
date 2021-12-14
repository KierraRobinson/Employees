import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

let xlabels = [];
let ylabels = [];

const state = {
  labels: xlabels,
  datasets: [
    {
      label: 'Employees By Gender',
      data: ylabels
    }
  ]
};

const BarChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchMyEmployee() {
      let res = await fetch('./employees.json');
      res = await res.json();

      res.forEach((row) => {
        let columns = row.gender;
        //If the character isn't in xLabels, then add
        if (!xlabels.includes(columns)) {
          xlabels.push(columns);
        }
      });

      // Count the number of male and female
      let male = res.reduce((acc, arr) => acc + (arr.gender === 'Male' ? 1 : 0), 0);
      let female = res.reduce((acc, arr) => acc + (arr.gender === 'Female' ? 1 : 0), 0);
      if (!xlabels.includes(male && female)) {
        ylabels.push(male, female);
      }

      setChartData(res);
    }
    fetchMyEmployee();
  }, []);

  return (
    <Bar
      data={state}
      options={{
        title: {
          display: true
        }
      }}
    />
  );
};

export default BarChart;
