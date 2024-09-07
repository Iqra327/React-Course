import './App.css';
import { Counter } from './components/counter';
// import { Cat } from './components/Cat';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
//  const client = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus : true,
//     },
//   },
//  });

  return (
    <div className="App">
    {/* <QueryClientProvider client={client}>
      <Cat />
    </QueryClientProvider>   */}
    <Counter />
    </div>
  );
}

export default App;
