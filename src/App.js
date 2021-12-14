/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React from 'react';
import Table from './Components/table';
import BarChart from './Components/Bar';
import PieChart from './Components/Pie';

function App() {
  return (
    <div className="App">
      <header className="Employees">
        <h1>Corporate Employees</h1>
        <Table />
        <hr />
        <div className="pieChart">
          <PieChart />
        </div>
        <div className="barChart">
          <BarChart />
        </div>
      </header>
    </div>
  );
}

export default App;
