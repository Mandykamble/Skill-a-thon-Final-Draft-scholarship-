import React, {useState, useEffect} from 'react'
import { sourcesDetails } from '../data';
import Card from '../components/Card';
const Sources = () => {

  


  let data;
  const [scholarshipDetails, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/scholarship/')
      .then(response => response.json())
      .then(scholarshipDetails => setData(scholarshipDetails))
      .catch(error => console.error(error));
  }, []);


  return (
    <main>
          <ul className='container flex flex-wrap justify-center'>
            {scholarshipDetails.map(data => (

              <li className='m-4' key={data._id}>
              <Card 
                id = {data._id}
                detail = {data}
              />
            </li>
            // console.log(data)
              
            ))}
          </ul>
        </main>
  )
}

export default Sources