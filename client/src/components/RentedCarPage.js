import React, { Component } from 'react';
import axios from "axios";

class RentedCarPage extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
componentDidMount(){
  this.getPosts();
  this.interval = setInterval(() => {
    this.getPosts();
  }, 1000);
}

  getPosts(){
    axios.get("http://localhost:5000/posts/rented").then( (res) => {
      if(res.data.success){
        this.setState({
          posts:res.data.posts,
        });
      }
    });
  };

 MoveToAvailable = ([id, bikeName, bikeType, rentPrice]) =>{
    const data = {
      bikeName:bikeName,
        bikeType:bikeType,
        rentPrice:rentPrice,
    }
    axios.post("http://localhost:5000/posts/add", data).then((res)=> {
      if (res.data.success){
        alert("added");
        
      }
      this.getPosts();
    });
    {
      axios.delete(`http://localhost:5000/posts/delete2/${id}`).then((res)=> {
        this.getPosts();
      });
    };
  };
  

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
  render() {
    return (

      <div className="container">
        <h3>Your rent </h3>
        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {this.state.posts.map((post) => (
    <tr>
      <th scope="row"></th>
      <td>{post.bikeName}</td>
      <td>{post.bikeType}</td>
      <td>{post.rentPrice}</td>
      <td>
        
        &nbsp;
        <a className="btn btn-danger" href="#" onClick = {() => this.MoveToAvailable([post._id, post.bikeName, post.bikeType, post.rentPrice])}>
          <i className="far fa-times-circle"></i>Delete
        </a>
      </td>
    </tr>
    ))}
  </tbody>
</table>
      </div>
    )
  }
}

export default RentedCarPage;