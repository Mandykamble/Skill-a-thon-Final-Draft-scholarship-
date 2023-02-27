import React from 'react'
import { Link } from 'react-router-dom'

function ScholarshipCard({id, data}){
  // console.log(data);

  if(id == undefined)
    return(
      <div></div>
    )
  return (
    // <div>Hello</div>
    <Link
      to={`/scholarship-info/${id}`}
    >
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.DepartmentName}</div>
          <div className="text-xl mb-2">{data.scheamname}</div>
          <p className="text-gray-700 text-base">{data.scheamnameDesc}</p>
          <p className="text-gray-700 font-bold text-base">₹{data.ScheamAmmount}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">View</span>
        </div>
      </div>
    </Link>
  )
}

export default ScholarshipCard
