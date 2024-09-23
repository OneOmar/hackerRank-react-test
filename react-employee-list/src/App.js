import React from 'react';
import EmployeesList from './components/EmployeesList';
import './App.css';

const App = ({ employees }) => (
  <div className="app">
    <EmployeesList employees={employees} />
  </div>
);

export default App;
