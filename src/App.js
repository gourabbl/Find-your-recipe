import { useState, useEffect } from 'react';
import Recipe from './Recipe.js';



export default function App() {

  const [saveItem, setSaveItem] = useState([])  //storing API
  const [search, setSearch] = useState("") //storing search items
  const [finalSubmit, setFinalSubmit] = useState("") //after pressing submit

  useEffect(()=>{
    getRecipe()
  },[finalSubmit])

  const getRecipe = async ()=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${finalSubmit}&app_id=52324e2f&app_key=29bcb5df6f313ae562adb2c23e1c5f63`);
    const data = await response.json();
    setSaveItem(data.hits)
    console.log(data.hits)
  }

  const searchItem = (event) =>{
    setSearch(event.target.value)
  }

  const submit = (event)=>{
    event.preventDefault()
    setFinalSubmit(search)
  }
  

  return (
    <div>
      <div className='logo--title'>
      <img className='logo' src='../Main--logo.svg' />
      <h1>Cooked</h1>
      </div>
     
    <form className='input--search' onSubmit={submit}>
       <input type='text' placeholder='Search for recipe' onChange={searchItem} />
       <button>Search</button> 
    </form>
    <div>
    {saveItem.map(recipes =>(
      <Recipe 
        image={recipes.recipe.image}
        title={recipes.recipe.label}
        calories={recipes.recipe.calories}
      />
    ))}
    </div>
    
    </div>
  )
  };
