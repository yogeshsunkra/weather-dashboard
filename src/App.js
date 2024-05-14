import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import Today from './components/Today';

const App = () => {
  return (
    <div className='mainContainer'>
      <Navbar/>
      <Today/>
    </div>
  )
}

export default App

