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
            <h3 className="listItem">From:</h3><p3>{props.city}, {props.country}</p3>

        </div>
    )
}

export default DisplayCard