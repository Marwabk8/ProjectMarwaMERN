import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStore } from '../redux/actions/storeActions'
import{getAllProducts} from'../redux/actions/productActions'
import StoreCard from './StoreCard'
import CardUser from'./CardUser'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Admin() {
 const stores = useSelector(state=>state.storeReducers.stores)
 const dispatch = useDispatch()
 useEffect (()=>{
   dispatch (getAllStore())
},[]);

const products = useSelector(state=>state.productsReducers.products)
  
  useEffect(()=>{
        dispatch (getAllProducts())
      },[]);


  return (
    <div >
 <h1> stores list</h1>
 <Link to ='/addEdit'>
 <Button variant="dark">Add New Store</Button>{' '}
</Link>
<div className='storecard'>

 {stores.map(el=><StoreCard store ={el} key={el._id}/>)}

 </div>



 <h1> Product list</h1>
 <Link to ='/postProduct'>
 <Button variant="dark">Add New product</Button>{' '}
</Link>

<div className='storecard'>
 {products.map( el=><CardUser product={el} key={el._id}/>)}
 {/* filter(el=>el.name.toUpperCase().includes(find.toUpperCase() */}

 </div>

    </div>
  )
}

export default Admin