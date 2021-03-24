import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import CreatePost from './components/CreatePost';
import LandingPage from './components/LandingPage';
import RentedCarPage from './components/RentedCarPage';


class App extends Component {
render(){
  return (
    <BrowserRouter>
    <div className="container">
      <CreatePost/>
      <RentedCarPage/>
      <Route path="/" exact component = {LandingPage}/>
      </div>
      </BrowserRouter>
  )
}
}

export default App;
