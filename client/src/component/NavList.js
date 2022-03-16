// import React from 'react';
// import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import {  useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/actions/authActions';
// function NavList({search,setSearch}) {
// const auth= useSelector (state=>state.authReducers.auth)
// const user= useSelector(state=>state.authReducers.user);
//  const dispatch = useDispatch()
//  const token = localStorage.getItem('token')

//   return (
      
// <div>

// <Navbar bg="light" expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#">Beautyadvisor</Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0"
//         style={{ maxHeight: '80px' }}
//         navbarScroll
//       >
//         <Nav.Link as={Link} to='/' href="#action1">Home</Nav.Link>
//         {auth && token && !user.role ?
//          <div><Nav.Link onClick={()=>dispatch(logout())}> Logout </Nav.Link>
//         <Nav.Link as={Link} to= '/profile' href="#action2">Profile</Nav.Link> 
//         <NavDropdown title="Link" id="navbarScrollingDropdown">
//           <NavDropdown.Item href="#action3">Edit Users</NavDropdown.Item>
//           <NavDropdown.Item href="#action4">Edit Products </NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action5">
//           Edit Stores
//           </NavDropdown.Item>
//         </NavDropdown>

//         </div> :
//         auth && token && user.role ?
//          <div><Nav.Link onClick={()=>dispatch(logout())}> Logout </Nav.Link>
//         <Nav.Link as={Link} to= '/profile' href="#action2">Profile</Nav.Link> 
//         <Nav.Link as={Link} to= '/postProduct'>Add New Product</Nav.Link>
        
//         </div> :
//         <>
//         <Nav.Link as={Link} to='/Sginup' href="#action2">SginUp</Nav.Link>
//         <Nav.Link as={Link} to= '/login' href="#action2">SginIn</Nav.Link>
        
        
//         </> }
        
//       </Nav>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//           onChange={(e)=>setSearch(e.target.value)} value={search}
//         />
//         <Button variant="outline-success" >Search</Button>
//       </Form>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

//   </div>)
// }

// export default NavList;
