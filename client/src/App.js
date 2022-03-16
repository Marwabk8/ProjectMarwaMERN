import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router';
import './App.css';
import EditForm from './component/EditForm';
import Home from './component/Home';
import Login from './component/Login/Login';
import Menu from './component/Menu';
import PostForm from './component/postForm';

import PrivateRoute from './component/privateRoute';
import Profile from './component/Profile';

import AddEditStore from './component/sginup/admin/AddEditStore';
import SginUp from './component/sginup/SginUp';
import { getcurrent } from './redux/actions/authActions';

function App() {
  const [search,setSearch]=useState('')
  const dispatch=useDispatch()
  // get current user
  useEffect(()=>{
    dispatch(getcurrent())
  },[])

  return (
    <div className="App">
     
<Menu search={search} setSearch={setSearch} />

<Routes>
  <Route path='/' element={<Home search={search}></Home>}   />
 <Route path='/Sginup' element={ <SginUp></SginUp>}/>
 <Route path='/login' element={ <Login></Login>}/>
 <Route path='/profile' element=
 {<PrivateRoute><Profile /> </PrivateRoute> }> </Route>
  <Route path ='/editProduct/:id' element={<PrivateRoute><EditForm/></PrivateRoute>}/>
 <Route path ='/addEdit' element={<PrivateRoute><AddEditStore/></PrivateRoute>}/>
 <Route path ='/postProduct' element={<PrivateRoute><PostForm/></PrivateRoute>}/>

  </Routes>
    </div>
  );
}

export default App;
