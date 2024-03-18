import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{setRecipes(data)})
    }, [])

    return (
        <div className="md:w-3/5 grid grid-flow-row grid-cols-2 gap-5">
            {/* <h1>Recipe: {recipes.length}</h1> */}
            {
                recipes.map(recipe => <Recipe 
                    recipe={recipe}
                    key={recipe.recipe_id}
                    handleWantToCook={handleWantToCook} >
                    </Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleWantToCook: PropTypes.func
}

export default Recipes;