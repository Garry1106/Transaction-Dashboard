
import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import "./App.css";

const App = () => {
  const [month, setMonth] = useState(3); // Default to March

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    <div className='app-header'>
      <h1>Transaction Analysis Hub</h1>
      <div className='month-selector'>
        <label htmlFor="month-select">Select Month: </label>
        <select id="month-select" value={month} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>
      <TransactionsTable month={month} />
      <Statistics month={month} />
      <BarChartComponent month={month} />
      <PieChartComponent month={month} />
    </div>
  );
};

export default App;
