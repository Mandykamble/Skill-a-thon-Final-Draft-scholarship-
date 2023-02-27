import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = ({userProfiles}) => {

  const userProfile = userProfiles[0];
  const navigate = useNavigate();

  const goToForm = () => {
    
      navigate(`/scholarship-form/${userProfile.orgname}`);
    
  };


  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mb-20 mx-auto sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Minority Development Department
          </h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="sm:divide-y sm:divide-gray-200">
            {/* <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Scholarship Count</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userProfile.scholarshipcount}
              </div>
            </div> */}
            <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">About</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {/* {userProfile.about} */}

                State Minority Scholarship Part II (DHE)
Scheme of Post Matric Scholarships to the students belonging to Scheduled Tribes for Studies in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <>
        <a
          className="btn btn-block mx-10 w-full  px-4 py-2 text-center text-white bg-purple-600 rounded-md shadow hover:bg-purple-400 cursor-pointer"
          onClick={goToForm}
        >
          Add Scholarship
        </a>
    </>
    
  </div>
  )
}

export default Profile