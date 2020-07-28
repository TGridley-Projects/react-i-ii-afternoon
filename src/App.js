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
      <div className="Main">
        <div className="Header">
          <h3 className="h3">Home</h3>
        </div>
        <div className="InfoCard">
        
        </div>
      </div>
    </div>

  )
}

}

export default App;
