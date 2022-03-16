import React, {  useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addProduct} from '../../../redux/actions/productActions'

function AddEditProduct() { 
const[productData,setProductData]=useState({name:"",type:"",description:"",rate:0,disponibilite:""})
const dispatch=useDispatch()
const handleChange = e =>{
    setProductData({...productData,[e.target.name]:e.target.value})
}
// const edit=useSelector(state=>state.productsReducers.edit)
// const product=useSelector(state=>state.productsReducers.product)
 const navigate= useNavigate()
   
 const handleAdd=(e)=>{
      e.preventDefault();
        dispatch(addProduct(productData));
        // navigate('/profile')
       
        };

        // const handleEdit=(e)=>{
        //   e.preventDefault()
        //   dispatch(editProduct(product._id,productData))
        //   navigate('/profile')
        // }

        // useEffect(()=>{
        //   edit ? setProductData({name:product.name,type:product.type,description:product.description,rate:product.rate,disponibilite:product.disponibilite})
        //   : setProductData({name:"",type:"",description:"",rate:0,disponibilite:""})
        // },[product])


  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="">
    <Form.Label>name</Form.Label>
    <Form.Control type="" placeholder="" name="name" onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>type</Form.Label>
    <Form.Control type="" placeholder="" name="type"  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>description</Form.Label>
    <Form.Control type="description" placeholder="" name="description"  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>rate</Form.Label>
    <Form.Control type="rate" placeholder="" name="rate"  onChange={handleChange}/>
  </Form.Group>

<Form.Group className="mb-3" controlId="">
    <Form.Label>disponibilite</Form.Label>
    <Form.Control type=" disponibilite" placeholder="" name="disponibilite"  onChange={handleChange}/>
  </Form.Group>

 <Button variant="primary" type="submit" >Edit</Button>

<Button variant="primary" type="submit" onClick={handleAdd}>Add</Button>
</Form>


    </div>
  )
}

export default AddEditProduct