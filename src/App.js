import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";
import CardItem from "./CardItem.js";
import Summary from "./Summary.js";
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand
       href="#">
         <img alt="happay" src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#card"><Link to="/card">Card</Link></Nav.Link>
    <Nav.Link href="#list"><Link to="/list">List</Link></Nav.Link>
    <Nav.Link href="#create"><Link to="/create">Create</Link></Nav.Link>
    <Nav.Link href="#details"><Link to="/details">Details</Link></Nav.Link>
    <Nav.Link href="#search"><Link to="/search">Search</Link></Nav.Link>
    <Nav.Link href="#update"><Link to="/update/id">Update</Link></Nav.Link> 

    <Nav.Link style={{marginLeft:'150%'}}>
      <Link to="/summary">
        <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart-icon" />  
      </Link>
      </Nav.Link><small style={{color:'red'}}> 5 </small>
      <Nav.Link>
        <img style={styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/3048/3048122.svg" alt="cart-icon" />
      </Nav.Link> 
  </Nav>   
</Navbar.Collapse>
</Navbar>
<Route path="/" ></Route>
<Route exact path="/card" ><CardItem /></Route>
<Route exact path="/summary" ><Summary /></Route>
      </Router>
    
  </div>
    );
  }
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  }
}

export default App;