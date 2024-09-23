import React from 'react';
import './App.css';
import 'h8k-components';
import Slides from './components/Slides';

// Define a constant for the title
const TITLE = 'Slideshow App';

const App = ({ slides }) => (
  <div>
    <h8k-navbar header={TITLE} />
    <div className="App">
      <Slides slides={slides} />
    </div>
  </div>
);

export default App;
