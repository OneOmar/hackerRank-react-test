import React from 'react';
import './App.css';
import CycleCounter from './components/CycleCounter';

const App = ({ cycle }) => {
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <CycleCounter cycle={cycle} />
    </div>
  );
};

export default App;
