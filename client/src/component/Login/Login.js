import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { clearerrors, sginin } from '../../redux/actions/authActions';
import "./Login.css"
    function Login() {
     const[email,setEmail]= useState('')
     const[password,setPassword]= useState('')
     const dispatch =useDispatch()
     const navigate= useNavigate()
     const errors=useSelector(state=>state.authReducers.errors)
  
     useEffect(() => {
      errors && errors.map(el => alert(el.msg));
    }, [errors])
    const handleclick = async  (e)=>{
      e.preventDefault();
      await dispatch(sginin({email,password},navigate));
      dispatch(clearerrors);
    }


      return (
     
        <div className="container">
          <div className="left">
            <h1>Hello</h1>
          <h1> Don't have an account </h1>
         <Link to={'/Sginup'}> <button type="button">Sign Up</button></Link>  
          </div>
          <div className="right">
            <div className="title"> <h1>Sign In</h1> </div>
            <form>
              <label>Your email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name placeholder="email" />
              <label>Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name placeholder="password" />
              <button onClick={handleclick} type="button">SIGN In</button>
            </form>
          </div>
        </div>
      )
    }
    
    export default Login;
