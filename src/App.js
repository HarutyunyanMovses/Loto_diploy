import './App.css';
import React ,{useState} from 'react';
import OneNumber from './components/oneNumber/OneNumber';
import logo from "./icons/big-logo.png"
import AllNumbers from './components/allNumbers/AllNumbers';

function App() {

  const [lotos, setLotos] = useState([])


  return (
    <div className="App">
      <header className="app-header">
        <div className='PX_box'>
          <p>Powered by </p>
          <img src={logo} className="app-header-logo" alt='PX' />
        </div>
        <h1>Super Loto</h1>
        <span>About of creator</span>
      </header>
      <div className='app-body'>
         <OneNumber lotos={lotos} setLotos={setLotos}/>
         <AllNumbers lotos={lotos}/>
      </div>
    </div>
  );
}

export default App;
