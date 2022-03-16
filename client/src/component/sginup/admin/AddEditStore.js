import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addStore } from '../../../redux/actions/storeActions'


function AddEditStore() {
 
    const[formData,setFormData]=useState({name:"",adresse:"",tel:0})
    const dispatch= useDispatch()
    const navigate = useNavigate()
    
    const handleChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value})

    }

    const handleAdd=(e)=>{
        e.preventDefault();
        dispatch(addStore(formData));
        navigate('/profile')
       
        };


  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Boutique</Form.Label>
    <Form.Control type="" placeholder="" name="name" onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="" placeholder="" name="adresse"  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>tel</Form.Label>
    <Form.Control type=" number" placeholder="" name="tel"  onChange={handleChange}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={handleAdd}> 
  Add </Button>
</Form>




    </div>
  )
}

export default AddEditStore