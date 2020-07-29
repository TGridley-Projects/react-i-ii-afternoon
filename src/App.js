import React, {Component} from 'react';
import './App.css';
import People from './data.js';
import DisplayCard from './DisplayCard.js'


class App extends Component{
  constructor(){
    super()

    this.state ={
      people: People,
      id: 0
    }
  }




render(){
  let index = this.state.id 
  const Person = this.state.people[index]
  return(
    <div className="App">
      <div className="Main">
        <div className="Header">
          <h3 className="h3">Home</h3>
        </div>
        <div className="InfoCard">       
          <DisplayCard
              id = {Person.id}
              name={Person.name}
              city={Person.city}
              country={Person.country}
              employer={Person.employer}
              title={Person.title}
          favoriteMovies={Person.favoriteMovies} />
        </div>
      </div>
    </div>
    )
  }

}
export default App;
