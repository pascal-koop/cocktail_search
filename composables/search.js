export const useExtractIdFromChosenIngredients = (...ingredients) => {
  let chosenIngredients = []
  for (let ingredient of ingredients){
    if (ingredient.id) return ingredient.id
    chosenIngredients.push(ingredient.id)
  }
  console.log('chosenIngredients', chosenIngredients);
}