// import './App.css';
// import { useEffect, useState } from 'react';
// import Axios from 'axios';


// function App() {
//   const [name, setName] = useState('');
//   const [data, setData] = useState(null);
  
//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       setData(res.data);
//     }) 
//   };

//   return (
//     <div className="App">
//       <input 
//         placeholder='Ex.  Iqra...' 
//         onChange={(event) => {
//           setName(event.target.value)
//         }} />
//       <button onClick={fetchData}>Predict App</button>
//       <h1>Predicted Name: {data?.name}</h1>
//       <h1>Predicted Age: {data?.age}</h1>
//     </div>
//   );
// }
// export default App;