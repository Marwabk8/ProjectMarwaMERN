import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteStore } from '../redux/actions/storeActions'

function StoreCard ({store}) {

const dispatch=useDispatch()
const handelDelete =()=>{
  if(window.confirm("Are you sure"))
  dispatch(deleteStore(store._id));
};


  return (
    <div >
    <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>{store.name}</ListGroup.Item>
    <ListGroup.Item>{store.adresse}</ListGroup.Item>
    <ListGroup.Item>{store.tel}</ListGroup.Item>
    <Card.Body>
    {/* <Button variant="primary">Edit</Button>{' '} */}
    <Button variant="danger" onClick={handelDelete}>Delete</Button>
    </Card.Body>
  </ListGroup>
</Card>
</div>

  )
}

export default StoreCard
