import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  
  const recipe = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };
  
  const [recipeData, setRecipeData] = useState({ ...recipe });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const handleChange = ({ target }) => {
    setRecipeData({
      ...recipeData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipeData);
    setRecipeData({ ...recipe });
  };
  
  //set form data to the stuff being inputted into this form 
  return ( 
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td> 
              <input id="name" name="name" type="text" required={true} onChange={handleChange} value={recipeData.name} placeholder="Name" /> 
            </td>
            <td> 
              <input id="cuisine" name="cuisine" type="text" required={true} onChange={handleChange} value={recipeData.cuisine} placeholder="Cuisine" /> 
            </td>
            <td> 
              <input id="photo" name="photo" type="text" required={true} onChange={handleChange} value={recipeData.photo} placeholder="URL" />
            </td>
            <td> 
              <textarea id="ingredients" name="ingredients" type="text" required={true} rows={2} onChange={handleChange} value={recipeData.ingredients} placeholder="Ingredients" />
            </td>
            <td> 
              <textarea id="preparation" name="preparation" type="text" required={true} rows={2} onChange={handleChange} value={recipeData.preparation} placeholder="Preparation" /> 
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
