import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Forecast from './pages/Forecast';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className='mainContainer'>
      
      <Navbar/>
      

      <Routes>
        <Route path = '/' element = {<Today/>}/>
        <Route path = '/tomorrow' element = {<Tomorrow/>}/>
        <Route path = '/forecast' element = {<Forecast/>}/>
      </Routes>
      

    </div>
    </BrowserRouter>
  )
}

export default App

