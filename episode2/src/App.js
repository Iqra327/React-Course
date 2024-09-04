//api is not fetching what it was supposed to be but the code is correct
// similar exercises are in practice folder
//fetching apis data and useEffect, component lifecycle

import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';


function App() {

  const [excuse, setExcuse] = useState('');
  
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
      setExcuse(res.data[0].excuse);
    });  
  }
  
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={fetchExcuse('party')}>Party</button>
      <button onClick={fetchExcuse('family')}>Family</button>
      <button onClick={fetchExcuse('office')}>Office</button>
      <p>{excuse}</p>
    </div>
  );
}
export default App;
