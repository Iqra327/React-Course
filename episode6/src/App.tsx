import React from 'react';
import './App.css';
import { Person , Country} from './components/Person';

function App() {

  // const age  = (name: string) : number => {
  //   return 99;
  // }

  return (
    <div className="App">
      <Person 
      name = 'Iqra Rasheed'
      email = 'iqrarasheed219@gmail.com'
      age = {22}
      isMarried = {false}
      friends = {['Samra', 'Asifa', 'Shaheen']}
      country =  {Country.Pakistan}
      />
    </div>
  );
}

export default App;