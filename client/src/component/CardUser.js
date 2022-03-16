import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { deleteProduct, updateRate } from '../redux/actions/productActions'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'


function CardUser({product}) {
  
    const dispatch = useDispatch()
    const star = useSelector(state => state.productsReducers.rate) 
    const [x, setX]=useState(star)
  const rate = 0
  const ratingChanged = async (e)=>{
  setX(e.target.value)
  rate = (rate+x/2)
  dispatch(updateRate((product._id),{rate}))
  }
 

const handeleDelete =()=>{
  if(window.confirm("Are you sure"))
  dispatch(deleteProduct(product._id));
};
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

   
     return (

       <div >
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={`/uploads/${product.imageUrl}`} />

     <Card.Body>
       <Card.Title>{product.name}</Card.Title>
       <h5> {product.type}</h5>
       <Card.Text height="100%">
       <ListGroup className="list-group-flush">
            {isReadMore ? product.description.slice(0, 50) :product.description}
            <span onClick={toggleReadMore} style={{color:'blue'}}>
        {isReadMore ? "...read more" : " show less"}
        
        </span>

  </ListGroup>
       </Card.Text>
       <ReactStars
       count={5}
       value= {product.rate}  onChange= {ratingChanged}>

       </ReactStars>
   </Card.Body>
     
   <Link to={`/editProduct/${product._id}`} ><Button variant="info" >Edit Product </Button></Link>
   <Button variant="danger" onClick={handeleDelete}>Delete</Button>
   
   </Card>
   
   
   </div>
  
     )
   }


export default CardUser