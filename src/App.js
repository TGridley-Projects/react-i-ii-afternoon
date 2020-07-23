import React, {Component} from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super()

    this.state ={
      id: 0,
      name: {},
      city: "",
      country: "",
      employer: "",
      title: "",
      favoriteMovies: []
    }
  }


render(){
  return(
    <div className="App">
      <div className="Header">
        <h2 className="h2">Home</h2>
      </div>
      <div className="InfoCard">
        
      </div>

    </div>
  )
}

}

export default App;
