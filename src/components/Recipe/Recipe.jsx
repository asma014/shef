import PropTypes from 'prop-types';

const Recipe = ({recipe, handleWantToCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='border-2 rounded-3xl gap-5 p-5'>
            <div className='grid place-items-center'>
            <img className='w-[90%] rounded-2xl' src={recipe_image} alt="" />
            </div>
            <h3 className='text-[1.15rem] font-bold my-5'>{recipe_name}</h3>
            <p className='my-5 text-gray-600 font-thin'>{short_description}</p>

            <hr />

            <h4 className='my-5 font-bold text-gray-700'>Ingredients: {ingredients.length}</h4>
            <ol className='my-3 font-[600] text-gray-500'>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
                <li>{ingredients[6]}</li>
            </ol>

            <hr />

            <div id='time-cal' className='flex gap-5 my-5'>
                <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='text-[.90rem]'>{preparing_time} minutes</p>
                </div>

                <div className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFE5B4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                    <p className='text-[.90rem]'>{calories} calories</p>

                </div>
            </div>

            <button onClick={() => handleWantToCook(recipe)} className="btn btn-accent text-[1rem] font-bold rounded-3xl bg-[#0BE58A] text-black border-none">Want to cook</button>

        </div>
    );
};

Recipe.PropTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipe;