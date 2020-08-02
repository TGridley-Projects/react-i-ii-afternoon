import React from 'react'
import './App.css'

const DisplayCard = (props) => {    
    return (
        <div>
            <h1 className="recordNumber">{props.id}/{props.lngth}</h1>
            <br/>
            <h1 className="name">{props.name.first} {props.name.last}</h1>
            <br/>
            <br/>
            <br/>   
            <div className="textBox">
               <h3>From:<span className="inlineText"> {props.city}, {props.country}</span></h3>      
               <h3>Job Title:<span className="inlineText"> {props.title}</span></h3>        
               <h3>Employer:<span className="inlineText"> {props.employer}</span></h3>
            </div>    
            <div className="movies">
                <h3>Favorite Movies:</h3>            
                    <span className="moviesList">1.  {props.favoriteMovies[0]}</span><br/>
                    <span className="moviesList">2.  {props.favoriteMovies[1]}</span><br/>
                    <span className="moviesList">3.  {props.favoriteMovies[2]}</span><br/>                
            </div>
        </div>
    )
}
export default DisplayCard