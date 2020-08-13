import React from "react";
import style from "../recipe.module.css"

const Recipe = ({ title, calories, image, ingredients }) => {
  return (

    <div className={style.recipe}>
      <h1>
        {title}
      </h1>
      {ingredients.map(ingredient => (
        <li style={{ listStyleType: "none" }}>{ingredient.text}</li>
      ))}
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  )
}


export default Recipe;