const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ingredientsList = document.querySelector('#ingredients');
const ingredientCreatLi = ingridientsEl => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingridientsEl;
  ingredientItem.classList.add('item');
  console.log(ingredientItem);
  return ingredientItem;
};

const ingredientItem = ingredients.map(ingredientCreatLi);
ingredientsList.append(...ingredientItem);
console.log(ingredientItem)