import React, { Component } from 'react';
import axios from 'axios';

class CreatePost extends Component {
    constructor(props){
        super(props)
            this.state = {
                bikeName: "",
                bikeType: "",
                rentPrice: ""
            }
    }
    handleInputChange = (e) => {
        const { name, value} = e.target;
        this.setState({
            ...this.state,
            [name]:value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {bikeName, bikeType, rentPrice} = this.state;
        const data = {
            bikeName:bikeName,
            bikeType:bikeType,
            rentPrice: rentPrice,
        }
        console.log(data);
axios.post ("http://localhost:5000/posts/add", data).then ((res)=>{
            if(res.data.success){
                alert("added");
                this.setState({bikeName:"", bikeType:"", rentPrice:""});
            }
        })
    }
    render() {
        return (
        
<div className="container">
        <h1>Awesome Bike Rental</h1>
        &nbsp;
        <h3>Create new rent</h3>
        <table class="table">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">bikeName</th>
      <th scope="col">bikeType</th>
      <th scope="col">rentPrice</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
      <th scope="row"></th>
      <td><input type="text"
                        className="form-control"
                        name="bikeName"
                        placeholder="enter bikeName"
                        value={this.state.bikeName}
                        onChange={this.handleInputChange}
                        /></td>
      <td>

      <input type="text"
                        className="form-control"
                        name="bikeType"
                        placeholder="enter bikeType"
                        value={this.state.bikeType}
                        onChange={this.handleInputChange}
                        />

      </td>
      <td>
      <input type="text"
                        className="form-control"
                        name="rentPrice"
                        placeholder="enter rentPrice"
                        value={this.state.rentPrice}
                        onChange={this.handleInputChange}
                        />
          
          </td>
      <td>
        &nbsp;
        <button className="btn btn-success" type="submit" onClick={this.onSubmit}>Submit rent</button>
        
      </td>
    </tr>
  </tbody>
</table>
      </div>

        );
    }
}

export default CreatePost;