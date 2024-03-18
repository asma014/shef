import { useState } from 'react'
import './App.css'
import Cooksection from './components/CookSection/Cooksection'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = recipe =>{
    const isExist = wantToCook.find(item=>item.id == recipe.id);
    if(!isExist){
      const newWantToCook = [...wantToCook, recipe];
    setWantToCook(newWantToCook);
    }
    else{
      alert("already added")
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-[85%] mx-auto gap-5'>
      <Recipes handleWantToCook={handleWantToCook}></Recipes>
      <Cooksection wantToCook={wantToCook}></Cooksection>
      </div>
      
    </>
  )
}

export default App
