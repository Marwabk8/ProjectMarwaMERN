import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
 const token = localStorage.getItem('token')
 const loading=useSelector(state=>state.authReducers.loading)
 const auth=useSelector(state=>state.authReducers.auth)


  return <div>
{
  loading ? <h2>Wait.....</h2>:token && auth ? children:<Navigate to='/login'/>
}



  </div>
}

export default PrivateRoute;
