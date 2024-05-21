import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import WeathertReport from './components/WeathertReport';
import Forecast from "./components/Forecast";

import { BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className='mainContainer'>
      
      <Navbar/>

      <div className='container'>
      <WeathertReport/>
      
      <Forecast/>
      </div>
    

    </div>
    </BrowserRouter>
  )
}

export default App

