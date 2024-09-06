import { useQuery } from "@tanstack/react-query";
import  Axios  from 'axios';

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
    }
  });
  
  if(isLoading){
    return <h1>Loading...</h1>
  };

  if(isError){
    return <h1>Error occured</h1>
  }

  return (
    <h1>
      I am Home Page <p> {data?.fact} </p> 
      <button onClick={refetch}>Update Data</button>
    </h1>
  )
};