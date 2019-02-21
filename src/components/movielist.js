import React, { Component } from 'react'
import MovieService from './MovieService'
import { Row ,Container,Col,Media,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const movieService = new MovieService();

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      nextPageURL: ''

    };
    this.nextPage = this.nextPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    
  }  
  componentDidMount() {
    
    var self = this;
    movieService.getCustomers().then(function (result) {
      console.log(result);
      self.setState({ customers: result.data, nextPageURL: result.nextlink})
    });
  }

  handleDelete(e,pk){

    var self = this;
    movieService.deleteCustomer({pk : pk}).then(()=>{
      var newArr = self.state.customers.filter(function(obj) {
        return obj.pk !== pk;
      });

      self.setState({customers: newArr})
    });
    
  }
  
  nextPage(){
    var self = this;
    console.log(this.state.nextPageURL);
    movieService.getCustomersByURL(this.state.nextPageURL).then((result) => {

      self.setState({ customers: result.data, nextPageURL: result.nextlink})

    });      
    
  }


  render() {
    return (






<Container>

<h1 className="mt-4 mb-3 text-white">Movie
      <small>List</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">Project</li>
    </ol>
    <img className="img-fluid rounded mb-4" src="http://placehold.it/1200x400" alt="">
    </img><hr className="hr"/>


  
      
      <Row>
{this.state.customers.map( c =>
        <Col sm={3}>
          <Media className="card" >
          <Link to={"/project/" + c.pk} >
            <img className="card-img-top image" src={c.murl}  alt={c.name} style={{ height: "370px"}} />
            <div className="middle">
              <p className="p" style={{marginBottom: "80px",color:"white"}}>{c.mdate}</p>
              <p className="p">{c.name}</p>
              <p className="p" style={{marginTop: "80px", color:"white"}}><i className="fa fa-star-o" style={{ color: "palegreen" }}></i> {c.rating}/10 </p>
            </div></Link>
          </Media>
        </Col>

)}
        </Row>


          
                            {/* // <td>
                // <button className="btn btn-danger"  onClick={(e)=> this.handleDelete(e,c.pk) }><i className="fa fa-trash" alt="Delete"></i></button> |
                // <a className="btn btn-success" href={"/customer/" + c.pk}><i className="fa fa-pencil"></i></a> 
                // </td> */}  
 
      <hr className="hr"></hr>
      <center>
      <Button variant="primary" className="text-left" onClick= { this.nextPage }>Next</Button></center>
      </Container> 
      


       
                 

    );
    }
}
export default MovieList;