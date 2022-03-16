

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { clearerrors, sginup } from '../../redux/actions/authActions';

import "./Sginup.css"


function SginUp() {
 const[email,setEmail]= useState('')
 const[password,setPassword]= useState('')

 const dispatch = useDispatch()
  const navigate = useNavigate()
  const errors=useSelector(state=>state.authReducers.errors)
  
  useEffect(() => {
    errors && errors.map(el => alert(el.msg));
  }, [errors])

  const handleclick = async (e) => {
    e.preventDefault();
    await dispatch(sginup({email,password},navigate)) ;
    dispatch(clearerrors)
  }

  return (

    <div className="container">
      <div className="left">
        <h1>Hello</h1>
        <h1> Already have an account sign in here</h1>
      <Link to= {'/login'}>  <button type="button">SIGN In</button></Link>
      </div>
      <div className="right">
        <div className="title"> <h1>Sign Up</h1> </div>
        <form>
          <label>Your email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  name placeholder="email" />
          <label>Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name placeholder="password" />
          <button onClick={handleclick} type="button">SIGN Up</button>
        </form>
      </div>
    </div>
  );
}



export default SginUp;
