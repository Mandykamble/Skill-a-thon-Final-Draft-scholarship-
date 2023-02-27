import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sources from './pages/Sources'
import Profile from './pages/Profile'
import Login from './components/Login'
import Navbar from './components/Navbar'

import './App.css'
import RequireAuth from './components/RequireAuth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResetPassword from './components/ResetPassword'
import Scholarship from './pages/Scholarship'
import ScholarshipInfo from './components/ScholarshipInfo'
import ScholarshipForm from './pages/ScholarshipForm'
import { userProfiles, scholarshipDetails } from './data'



const App = () => {

  return (
    <div>
      
        <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sources" element={<Sources/>} />
          <Route 
            path="/profile" 
            element={
            <RequireAuth>
              <Profile userProfiles={userProfiles}/>
            </RequireAuth>
            } 
          />
          <Route 
            path="/scholarship-form/:orgname" 
            element={
            <RequireAuth>
              <ScholarshipForm scholarshipDetails={scholarshipDetails}/>
            </RequireAuth>
            } 
          />
          
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarship-info/:id" element={<ScholarshipInfo/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/singup" element={<SignUp/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
        </Routes>

    </div>
  )
}

export default App
