
import React from 'react';
import { useSelector } from 'react-redux';
import Admin from './Admin';
import User from './User';


function Profile() {
   
 const user= useSelector(state=>state.authReducers.user);




  return (
  
  <div>

<h1> {user && user.role ? <User></User>:<Admin></Admin>} </h1>


  </div>)
}

export default Profile;
