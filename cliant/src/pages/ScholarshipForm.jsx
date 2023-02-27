import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";


// import axios, {isCancel, AxiosError} from 'axios';


// function ScholarshipForm() {
//   const [DepartmentName, setDepartmentName] = useState("");
//   const [scheamname, setscheamname] = useState("");
//   const [scheamnameDesc, setscheamnameDesc] = useState("");
//   const [ScheamAmmount, setScheamAmmount] = useState("");
//   const [RequiredDocuments, setRequiredDocuments] = useState("");
//   const [gender, setgender] = useState("");
//   const [familyincome, setfamilyincome] = useState("");
//   const [cast, setcast] = useState("");
//   const [applicationlink, setapplicationlink] = useState("");
//   const [startdate, setstartdate] = useState("");
//   const [enddate, setenddate] = useState("");
//   const [Contact, setContact] = useState("");
//   const [Name, setName] = useState("");
//   const [Phone, setPhone] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Address, setAddress] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       DepartmentName,
//       scheamname,
//       scheamnameDesc,
//       ScheamAmmount,
//       RequiredDocuments,
//       gender,
//       familyincome,
//       cast,
//       applicationlink,
//       startdate,
//       enddate,
//       Contact,
//       Name,
//       Phone,
//       Email,
//       Address,
//     };
//     // fetch('http://localhost:3000/api/scholarship', {
//     //   method: "POST",
//     //   mode: 'no-cors',
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(data),
//     // })
//     //   .then((response) => {
//     //     console.log(response);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });


   
  


    
//   };

const AddScholarship = () => {
  const [formData, setFormData] = useState({
    DepartmentName:'',
    scheamname: '',
    scheamnameDesc:'',
    ScheamAmmount: '',
    RequiredDocuments: '',
    gender: '',
    familyincome: '',
    cast: '',
    applicationlink: '',
    startdate:'',
    enddate: '',
    Name:'',
    Phone:'',
    Email:'',
    Address:''
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handlePhoneeChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      auxPhoneNumber: e.target.value
    })
  }
  const handleDepartmentNameChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    DepartmentName: e.target.value
    })
  }
  const handlescheamnameChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    scheamname: e.target.value
    })
  }

  const handlescheamnameDescChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    scheamnameDesc: e.target.value
    })
  }
  
  const handleScheamAmmountChange=(e)=>{
    e.preventDefault()
    
    setFormData({
      ...formData,
      ScheamAmmount: e.target.value
    })
  }
  const handleRequiredDocumentsChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    RequiredDocuments: e.target.value
    })
  }

  const handlegenderChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    gender: e.target.value
  })
  }

  const handlefamilyincomeChange=(e)=>{
    e.preventDefault()
    
    setFormData({
    ...formData,
    familyincome: e.target.value
    })
  }

  const handlecastChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    cast: e.target.value
    })
  }
 


  const handleapplicationlinkChange=(e)=>{
    e.preventDefault()
    
    setFormData({
    ...formData,
    applicationlink: e.target.value
    })
  }
  const handlestartdateChange=(e)=>{
    e.preventDefault()

    setFormData({
      ...formData,
      startdate: e.target.value
    })
  }
  const handleenddateChange=(e)=>{
    e.preventDefault()

    setFormData({
      ...formData,
      enddate: e.target.value
    })
  }
  const handleNameChange=(e)=>{
    e.preventDefault()

    setFormData({
      ...formData,
      Name: e.target.value
    })
  }
  const handlePhoneChange=(e)=>{
    e.preventDefault()

    setFormData({
      ...formData,
      Phone: e.target.value
    })
  }
  const handleEmailChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    Email: e.target.value
    })
  }
  const handleAddressChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    Address: e.target.value
    })
  }

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;
  //   setFormValues({ ...formValues, [name]: files[0] });
  // };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Submit form to backend
    await fetch('http://localhost:3000/api/scholarship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(error => {
        console.log(error);
      });

      alert("Submitted")
  };


  return (
    <>
      <div className="max-w-md my-10 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create Scholarship</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="departmentname" className="block font-medium">
              Department Name
            </label>
            <input
              type="text"
              name="departmentname"
              id="name"
              value={formData.DepartmentName}
              onChange={handleDepartmentNameChange}
              className=" bg-blue-100 gw-full border-gray-300 rounded-md shadow-sm px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="scheamname" className="block font-medium">
              Scheam Name
            </label>
            <input
              type="text"
              name="scheamname"
              id="scheamname"
              value={formData.scheamname}
              onChange={handlescheamnameChange}
              className=" bg-blue-100 gw-full border-gray-300 rounded-md shadow-sm px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="scheamdescription" className="block font-medium ">
              Scheam Description
            </label>
            <textarea
              name="scheamdescription"
              id="scheamdescription"
              rows="3"
              value={formData.scheamnameDesc}
              onChange={handlescheamnameDescChange}
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
              required
            />
          </div>
          <div>
            <label htmlFor="scheamammount" className="block font-medium">
              Scheam Ammount
            </label>
            <input
              type="number"
              name="scheamammount"
              id="scheamammount"
              value={formData.ScheamAmmount}
              onChange={handleScheamAmmountChange}
              className=" bg-blue-100  w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="documentsrequired" className="block font-medium ">
              Documents Required
            </label>
            <textarea
              name="documentsrequired"
              id="documentsrequired"
              rows="3"
              value={formData.RequiredDocuments}
              onChange={handleRequiredDocumentsChange}
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
              required
            />
          </div>
          <h1 className="block text-lg text-gray-700 font-bold mb-2">
            Eligibility Criteria
          </h1>
          <div>
            <label htmlFor="gender" className="block font-medium">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handlegenderChange}
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
              required
            >
              <option value="">Choose a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
              <option value="everyone">Everyone</option>
            </select>
          </div>
          <div>
            <label htmlFor="familyincome" className="block font-medium">
              Family Income
            </label>
            <input
              type="number"
              name="familyincome"
              value={formData.familyincome}
              onChange={handlefamilyincomeChange}
              id="familyincome"
              className=" bg-blue-100  w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="cast" className="block font-medium">
              Cast
            </label>
            <select
              name="cast"
              id="cast"
              value={formData.cast}
              onChange={handlecastChange}
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
              required
            >
              <option value="">Choose a cast</option>
              <option value="open">Open</option>
              <option value="obc">OBC</option>
              <option value="st">ST</option>
              <option value="sc">SC</option>
              <option value="everyone">Everyone</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="applicationLink"
            >
              Application Link
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="applicationLink"
              value={formData.applicationlink}
              onChange={handleapplicationlinkChange}
              type="text"
              placeholder="https://example.com/apply"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="startdate"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startdate"
              value={formData.startdate}
              onChange={handlestartdateChange}
              type="date"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="enddate"
            >
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="enddate"
              value={formData.enddate}
              onChange={handleenddateChange}
              type="date"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <h1 className="block text-lg text-gray-700 font-bold mb-2">
              Contact
            </h1>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={formData.Name}
                onChange={handleNameChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                value={formData.Email}
                onChange={handleEmailChange}
                name="email"
                placeholder="janedoe@example.com"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="phone"
                value={formData.Phone}
              onChange={handlePhoneChange}
                type="tel"
                name="Phone"
                placeholder="555-123-4567"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="no-resize appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="address"
                value={formData.Address}
                onChange={handleAddressChange}
                name="address"
                placeholder="123 Main St, Anytown USA 12345"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-block mx-10 w-full  px-4 py-2 my-5 text-center text-white bg-purple-600 rounded-md shadow hover:bg-purple-400 cursor-pointer"
            >
              Add Scholarship
            </button>
          </div>
        </form>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AddScholarship;
