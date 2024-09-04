// import './App.css';
// import { useEffect, useState } from 'react';
// import Axios from 'axios';


// function App() {
//   // fetch('https://catfact.ninja/fact')
//   // .then((response) => response.json())
//   // .then((data) => console.log(data));

//   const [fact, setFact] = useState('');
  
//   const fetchCatFact = () => {
//     Axios.get('https://catfact.ninja/fact').then((res) => {
//       setFact(res.data.fact);
//     });
//   };
  
//   useEffect(() => {
//    fetchCatFact();
//   }, [])

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}>Generate Cat Fact</button>
//       <p>{fact}</p>
//     </div>
//   );
// }
// export default App;

// react component lifeCycle
// mounting : component starting to exist
// updating : component is changing
// unmounting : component stop apearing in screen