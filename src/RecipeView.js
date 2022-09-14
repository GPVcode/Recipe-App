import React from 'react';

function RecipeView({ recipe, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (

      <tr>
        <td>
          {recipe.name}
        </td>
        <td>
          {recipe.cuisine}
        </td>
        <td>
          <img className="photo"  height={100} src={recipe.photo}/>
        </td>
        <td className="content_td">
          <p>{(recipe.ingredients)}</p>
        </td>
        <td className="content_td">
          <p>{(recipe.preparation)}</p>
        </td>
        <td>
          <button type="submit" name="delete" onClick={deleteRecipe}>Delete</button>
        </td>
      </tr>
    
  )
}

export default RecipeView