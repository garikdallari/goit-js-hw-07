const ingredientsRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function addElement(array) {

  array.forEach(elem => {
   const itemRef = document.createElement('li')
  itemRef.textContent = elem;
   return ingredientsRef.appendChild(itemRef)
});
 
}

addElement(ingredients)

