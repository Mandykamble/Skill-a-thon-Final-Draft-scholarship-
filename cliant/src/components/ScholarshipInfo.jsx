import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { scholarshipDetails } from '../data';
import Footer from './Footer'

const ScholarshipInfo = () => {
  const params = useParams();


  let data;
  const [scholarshipDetails, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/scholarship/')
      .then(response => response.json())
      .then(scholarshipDetails => setData(scholarshipDetails))
      .catch(error => console.error(error));
  }, []);
  
  // console.log(params.id);
  scholarshipDetails.map((scholarship => {
    if(params.id == scholarship._id){
       data = scholarship;
      return
    }
  }))
  if(data === undefined)
    return(
      <div></div>
    )
  // console.log(data.DepartmentName);
  return (
  
    
    <div className="my-10 max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{data.DepartmentName}</h2>
      <p className="mt-2 text-gray-600">{data.scheamname}</p>
      <div className="mt-4">
        <div className="flex items-center">
          <span className="font-semibold">About scheam:</span>
          <span className="ml-2">{data.scheamnameDesc}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Ammout:</span>
          <span className="ml-2">₹{data.ScheamAmmount}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Required Documents:</span>
          <span className="ml-2">{data.RequiredDocuments}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Details:</span>
          <span className="ml-2 ">
            Application-Link: {data.applicationlink},
            Start-Date: {data.startdate}, 
            End-Date :{data.enddate}
          </span>
        </div>
        {/* <div className="flex items-center">
          <span className="font-semibold">Application Process:</span>
          <span className="ml-2">
            Apply online <a href={detail.applicationProcess.applicationLink}>here</a> by {detail.applicationProcess.applicationDeadline}.
            Required materials: {detail.applicationProcess.applicationMaterials.join(', ')}.
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">Contact:</span>
          <span className="ml-2">{detail.contact.name}, {detail.contact.email}, {detail.contact.phone}, {detail.contact.address}</span>
        </div> */}
      </div>
    </div>

  )
}

export default ScholarshipInfo