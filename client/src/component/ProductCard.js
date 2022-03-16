import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateRate } from '../redux/actions/productActions';
import "../App.css"


function ProductCard({ product }) {
  const star = useSelector(state => state.productsReducers.rate)
  const dispatch= useDispatch()
  const [x, setX]=useState(star)
  const rate = 0
  const ratingChanged = async (e)=>{
  setX(e.target.value)
  rate = (rate+x/2)
  dispatch(updateRate(product._id,{rate}))
  }
 
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };


  return (
    <div className='m'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/uploads/${product.imageUrl}`} height="100%"/>
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
          <Card.Text height="100%">
           Store : {product.storeName}
          </Card.Text>
          <ReactStars
            count={5}
            value={product.rate} onChange={ratingChanged}></ReactStars>

        <Link to ={'/Sginup'}><Button variant="secondary">votre avis nous intéresse</Button></Link>  
        </Card.Body>


      </Card>



    </div>
  )
}

export default ProductCard