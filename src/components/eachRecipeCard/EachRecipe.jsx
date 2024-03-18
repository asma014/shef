import PropTypes from 'prop-types'

const EachRecipe = ({eachrecipe}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = eachrecipe;
    return (
        <div>
            <div className="flex">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td className='pl-5'>{calories} calories</td>
      </tr>
      
    </tbody>
  </table>
  <button className="btn btn-sm bg-[#0BE58A]">Preparing</button>
</div>

        </div>
    );
};








EachRecipe.PropTypes = {
    eachrecipe: PropTypes.object
}

export default EachRecipe;