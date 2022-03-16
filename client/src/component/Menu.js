import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';


 function Menu({search,setSearch}) {
    const auth= useSelector (state=>state.authReducers.auth)
const user= useSelector(state=>state.authReducers.user);
 const dispatch = useDispatch()
 const token = localStorage.getItem('token')
    return <div>

        {auth && token && !user.role ?
            <div>
                <Navbar  bg="light" expand="lg"  >
                    <Container fluid>
                        <Navbar.Brand href="#">Beautyadvisor</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to='/addEdit'>Add New Store</Nav.Link>
                                <Nav.Link as={Link} to='/postProduct'>Add New Product</Nav.Link>

                            </Nav>

                            <Form className="d-flex">

                                
        <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            :
            auth && token && user.role  ?
            <div>
                <Navbar Navbar bg="light" expand="lg" >
                    <Container fluid>
                        <Navbar.Brand href="#">Beautyadvisor</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to= '/postProduct'>Add New Product</Nav.Link>

                            </Nav>

                            <Form className="d-flex">
                            <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

            : 
            <Navbar bg="light" expand="lg"  >
                <Container fluid>
                    <Navbar.Brand href="#">Beautyadvisor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>

                        </Nav>

         <Form className="d-flex">
         <Nav.Link as={Link} to='/Sginup' href="#action2">SginUp</Nav.Link>
        <Nav.Link as={Link} to= '/login' href="#action2">SginIn</Nav.Link>
         <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setSearch(e.target.value)} value={search}
        />
        <Button variant="outline-success" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        }
    </div>;
}

export default Menu
