import React from 'react'
// import SearchFilter from '../components/SearchFilter'
import ScholarshipCard from '../components/ScholarshipCard';
// import {BiTimeFive} from 'react-icons/bi'
// import { scholarshipDetails } from '../data';
import { useState,useEffect } from "react";

const Scholarship = () => {
  const [scholarshipDetails, setData] = useState([]);

  useEffect(() => {
    fetch('https://scholerships.onrender.com/api/scholarship/')
      .then(response => response.json())
      .then(scholarshipDetails => setData(scholarshipDetails))
      .catch(error => console.error(error));
  }, []);

  // console.log(scholarshipDetails);
  return (
    // <div className="flex flex-col min-h-screen overflow-hidden">

    //   {/*  Page content */}
    //   <main className="flex-grow">

    //     {/* {
        
    //     <SearchFilter onSearch={handleSearch}/>} */}

    //     {/* Scholarship Cards */}
    //     <main>
    //       <ul className='container flex flex-wrap justify-center'>
    //         {scholarshipDetails.map((scholarship) => (

    //           <li className='m-4' key={scholarship.id}>
    //           <ScholarshipCard 
    //             id = {scholarship.id}
    //             title = {scholarship.DepartmentName}
    //             overview = {scholarship.RequiredDocuments}
    //             detail = {scholarship.ScheamAmmount}
    //           />
    //         </li>
              
    //         ))}
    //       </ul>
    //     <ScholarshipCard/>
    //     </main>
     
    //   </main>

      
      
    
    // </div>


    <div> 
            
            <div  className = "jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

                {
                    scholarshipDetails.map((e)=>{

                      return (<ScholarshipCard id={e._id} data={e} />)
          //               return (
          //                   <div key = {e._id} className="group group/item singlejob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8]-400/700 hover:shadow-lg">
          //           <span className='flex justify-between items-center gap-4'>
          //               <h1 className ='text-[16px] font-semibold text-textColor group-hover:text-white'>
          //                   {e.DepartmentName}
          //               </h1>
                   

                   

          //           </span>

          //           {/* <h6 className ="text-[#000]">{e.location}</h6> */}

          //   <p className ='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                
          //      {e.scheamnameDesc}...
                  
          //   </p>

          //   <div className='company flex items-center gap-2'>
          //       {/* <img src={image} alt="Company Logo" className = 'w-[10%]' /> */}

          //       <span className = "text-[14px] py-[1rem] block group-hover:text-white">
          //           {e.ScheamAmmount}
          //       </span>
          //   </div>

            
                        

          //   <botton className='align-center border-[2px] mt-2 rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
          //  View More
          //   {/* <NavLink to="/Sources/form" className="px-3 py-2 bg-[#328cf2] rounded-3xl font-semibold text-white">Apply Now</NavLink> */}
          //   </botton>

          //       </div>
          //               )
                    })
                }
            </div>

        </div>


  );
}

export default Scholarship