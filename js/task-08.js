const refs = {
    inputRef: document.querySelector('.input'),
    btnRender: document.querySelector('.render'),
    btnDestroy: document.querySelector('.destroy'),
    boxesRef: document.querySelector('#boxes')
}

refs.btnRender.addEventListener('click', createBoxes);

function createBoxes(amount) {
  
  
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement('div');
        refs.boxesRef.appendChild(div)
    }

    
}




