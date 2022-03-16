import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getAllProducts } from '../redux/actions/productActions'

function EditForm () {
  const {id}=useParams()
  const products=useSelector(state=>state.productsReducers.products)
  const produit = products.filter(el=>el._id===id)
  const store = useSelector(state => state.storeReducers.stores)

  // console.log(produit[0].name)
  const [imageUrl,setImageUrl]= useState(null)
  const [name,setName]= useState(produit[0].name)
  const [type,setType]=useState(produit[0].type)
  const[description,setDescription] = useState(produit[0].description)
  const[rate,setRate] = useState(produit[0].rate)
  const[disponibilite,setDisponibilite]= useState(produit[0].disponibilite)
  const [storeName, setStore] = useState("")
  const dispatch = useDispatch()
  const navigate= useNavigate()
  // get id from url

 
  const editProduct = async (e)=>{
    e.preventDefault()
  const config={
  headers : {
  authorization: localStorage.getItem('token')
   
  }
  
  }

  const data =new FormData()
  data.append('myProduct',imageUrl)
  data.append('name',name)
  data.append('type',type)
  data.append('description',description)
  data.append('rate',rate)
  data.append('disponibilite',disponibilite)
  data.append('storeName', storeName)
  try {
   await axios.put(`/product/modifier/${id}`,data,config)
   dispatch (getAllProducts())
 navigate('/profile')
 
  } catch (error) {
    console.log(error)
  }
 
  }


  return (
    <div>
<Form onSubmit={editProduct} >
<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file"  onChange={e=>setImageUrl(e.target.files[0])}/>
  </Form.Group>  
  <Form.Group className="mb-3" controlId="">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>type</Form.Label>
    <Form.Control type="text" placeholder="" name="type" value={type} onChange={(e)=>setType(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder="" name="description" value={description}onChange={(e)=>setDescription(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>rate</Form.Label>
    <Form.Control type="number" placeholder="" name="rate" value={rate} onChange={(e)=>setRate(e.target.value)}/>
  </Form.Group>

<Form.Group className="mb-3" controlId="">
    <Form.Label>disponibilite</Form.Label>
    <Form.Control type="text" placeholder="" name="disponibilite" value={disponibilite} onChange={(e)=>setDisponibilite(e.target.value)}/>
  </Form.Group>
  <select className="form-select" aria-label="Default select example" value={storeName} onChange={(e) => setStore(e.target.value)}>
          <option >Open this select menu</option>
          {store && store.map((el, i)=> <option value={el.name} key={i}>{el.name}</option>)}
   
        </select>


  <Button variant="primary" type="submit"  > 
  Edit </Button>
</Form>
  
    </div>
  )
}

export default EditForm