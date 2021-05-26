const inpRef = document.querySelector('#validation-input')


inpRef.addEventListener('blur', onBorderColorAdd);
inpRef.style.border = '3px solid #bdbdbd'

function onBorderColorAdd(event) {
    const elem = event.currentTarget
    
    if (elem.value.length === Number(elem.getAttribute('data-length'))) {
        elem.style.borderColor = '#4caf50'
    }

    if (elem.value.length !== Number(elem.getAttribute('data-length'))) {
        elem.style.borderColor = '#f44336'
    }

    if (elem.value.length === 0) {
        elem.style.border = '3px solid #bdbdbd'
    }
}
