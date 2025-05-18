import React from 'react'
import Receipe from './Receipe';
import "./Receipe.css"
const Receipes = ({recipesData}) => {
  console.log(recipesData);
  
  return (
   <>
   <div className="receipes-container">
      {recipesData.map((recipe) => (
        <Receipe key={recipe.id} singleRecipe={recipe} />
      ))}
    </div>
   
   </>
  )
}

export default Receipes