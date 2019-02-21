import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route} from 'react-router-dom'
import { Navbar,Nav,Form ,FormControl,Button  } from 'react-bootstrap';

import MovieList  from './components/movielist'
import Details  from './components/Details'

const BaseLayout = () => (
<section id="facte"  className="wow fadeIn">
<div className="container">

<Navbar className="nav"  expand="lg">
  <Navbar.Brand  href="#home" style={{ color:"white",fontSize: "30px", fontWeight: "bolder" }}>
   <img
        src="https://i.imgur.com/YsPuzSV.png"
        width="200"
        height="60"
        className="d-inline-block "
        alt="React Bootstrap logo"
      />
      {/* { 'Raj Movie'} */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "palegreen" }} />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mx-auto">
      <Nav.Link  href="/" style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}><i className="fa fa-home"></i>  Home </Nav.Link>
      <Nav.Link  href="#link" style={{ color:"palegreen" ,fontSize: "22px", fontWeight: "bolder"}}><i className="fa fa-star-o"></i> Top Rated </Nav.Link>
      <Nav.Link  href="#home" style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}><i className="fa fa-film"></i> Recent </Nav.Link>
      <Nav.Link  href="#link" style={{ color:"palegreen" ,fontSize: "22px", fontWeight: "bolder"}}><i className="fa fa-user"></i > Popular </Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-0" />
      <Button variant="success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> <hr className="hr" />

<div className="content">
    <Route path="/" exact component={MovieList} />
    <Route exact path='/project/:pk' component={Details} />

</div>

</div>
</section>
  
  )

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
