import React from "react";

const Recipe = (props)=>{
    return(
        <div className='card--component' key={props.id}>
           <img className="img" src={props.image} />
           <h1> {props.title}</h1>
           <p>{props.calories}</p>
        </div>
    )
}

export default Recipe;