const ingredientsRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addElement = array => {

  return array.map(elem => {
  const itemRef = document.createElement('li')
  itemRef.textContent = elem;
  return itemRef
  });
 
}
const listArray = addElement(ingredients)
ingredientsRef.append(...listArray)

