import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readRecipe } from "../redux/productSlice"
import  Card  from "../components/Card"

const Recetas = () => {
  const recipe = useSelector((state) => state.recipe)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
    .get('http://localhost:5000/recipes')
    .then((response) =>{
      console.log(response.data)
      dispatch(readRecipe(response.data))
    })
    .catch((error) => {
      console.error(error)
    })
  }, [dispatch])

  return (
    <div>
      <h1 className="text-xl font-extrabold text-center p-3  bg-orange-50">¡Mira estas recetas!</h1>
      {recipe.data && recipe.data.map((recipe) => (
        <Card key={recipe.id} textTitle={recipe.title} textIngredients={recipe.ingredients} textInstructions={recipe.instructions} cardImage={recipe.image}></Card>
      ))}
    </div>
  )
}

export default Recetas
