
const Card = ({textTitle, textIngredients, textInstructions, cardImage}) => {
  return (
    <div className='container grid grid-flow-row shadow-xl p-6 my-6 w-full cursor-pointer hover:translate-y-1 '>
      <div>
        <img src={cardImage} alt={textTitle} className='w-full h-48 object-cover' />
      </div>
      <div className="card text-lg font-bold my-2 text-center">
        <p className="">{textTitle}</p>
      </div>
      <div className="text-sm text-center font-semibold">
        <p>{textIngredients}</p>
      </div>
      <div>
        {textInstructions}
      </div>
    </div>
  )
}

export default Card
