import React from 'react'
import './App.css'

import Translator from './components/Translator'

const App = ({ translations }) => {
  return (
    <div className="App">
      <Translator translations={translations} />
    </div>
  )
}

export default App
