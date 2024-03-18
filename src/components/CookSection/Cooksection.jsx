
import PropTypes from 'prop-types'
import EachRecipe from '../eachRecipeCard/EachRecipe'

const Cooksection = ({wantToCook}) => {
  return (
   
           <div className="md:w-2/5 border-2 rounded-3xl">
            <h2 className="text-[1rem] font-bold text-center p-5">Want to Cook: {wantToCook.length}</h2>

            <hr />

            <div className="overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead className='justify-between'>
            <tr>
            
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            </tr>
            </thead>
            </table>
            </div>

            {
                wantToCook.map(eachrecipe => <EachRecipe
                    key={eachrecipe.recipe_id} 
                    eachrecipe={eachrecipe}></EachRecipe>)
            }
          

            </div>
    
  )
}

Cooksection.propTypes = {
    wantToCook: PropTypes.array
}

export default Cooksection