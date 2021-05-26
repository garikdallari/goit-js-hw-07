const refs = {
    btnDecr: document.querySelector('[data-action="decrement"]'),
    btnIncr: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
}


let counterValue = Number(refs.valueRef.textContent)

refs.btnIncr.addEventListener('click', onIncrement)

refs.btnDecr.addEventListener('click', onDecrement)

function onIncrement() {
    refs.valueRef.textContent = counterValue += 1
}

function onDecrement() {
    refs.valueRef.textContent = counterValue -= 1
}