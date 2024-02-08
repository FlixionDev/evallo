import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Login/Login'
import SignUp from '../Signup/Signup'
import Allcontent from '../Allcontent/Allcontent'
import Postcontent from '../Postcontent/Postcontent'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import SigninPrivateRoute from '../PrivateRoute/SigninPrivateRoute'
import Navbar from '../Navbar/Navbar'

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PrivateRoute><Navbar/><Allcontent /></PrivateRoute>} />
        <Route path='/postcontent' element={<PrivateRoute><Navbar/><Postcontent /></PrivateRoute>} />
        <Route path='/login' element={<SigninPrivateRoute><SignIn /></SigninPrivateRoute>} />
        <Route path='/signup' element={<SigninPrivateRoute><SignUp /></SigninPrivateRoute>} />
      </Routes>
    </div>
  )
}
