const categoriesRef = document.querySelector('#categories');
console.log(`'В списке ${categoriesRef.children.length} категории.'`);

function getData(item) {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
}

getData(categoriesRef.children[0]);



