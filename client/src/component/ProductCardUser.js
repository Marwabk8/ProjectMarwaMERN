import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
function ProductCardUser({product}) {

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
    
  return (


<div className=''>
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
            value={product.rate}></ReactStars>  
        </Card.Body>


      </Card>




    </div>
  )
}

export default ProductCardUser