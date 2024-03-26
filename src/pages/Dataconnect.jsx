import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Dataconnect() {

    const [data, setData] = useState(null);

  useEffect(() => {
    // Define a function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Assuming your backend server is running on the same domain
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



      // Call the function to fetch data when the component mounts
      fetchData();
    }, []);
  
  return (
    <div>
         <div>
      <h1>Backend Data:</h1>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  )
}
