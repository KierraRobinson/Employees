import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

let pie = [];
let num = [];

const state = {
  labels: pie,
  datasets: [
    {
      label: 'Employee By Job Title',
      backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
      hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
      data: num
    }
  ]
};

const PieChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchJob() {
      let res = await fetch('./employees.json');
      res = await res.json();

      res.forEach((chart) => {
        let job = chart.jobTitle;
        if (!pie.includes(job)) {
          pie.push(job);
        }
      });
      let ceo = res.reduce((acc, arr) => acc + (arr.jobTitle === 'CEO' ? 1 : 0), 0);
      let dev = res.reduce((acc, arr) => acc + (arr.jobTitle === 'Developer' ? 1 : 0), 0);
      let qa = res.reduce((acc, arr) => acc + (arr.jobTitle === 'QA' ? 1 : 0), 0);
      let ms = res.reduce((acc, arr) => acc + (arr.jobTitle === 'Marketing Specialist' ? 1 : 0), 0);
      let cfo = res.reduce((acc, arr) => acc + (arr.jobTitle === 'CFO' ? 1 : 0), 0);
      if (!pie.includes(ceo && dev && qa && ms && cfo)) {
        num.push(ceo, dev, qa, ms, cfo);
      }
      setChartData(res);
    }
    fetchJob();
  }, []);

  return (
    <Pie
      data={state}
      options={{
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }}
    />
  );
};

export default PieChart;
