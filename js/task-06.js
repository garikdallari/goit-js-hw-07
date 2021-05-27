const inpRef = document.querySelector('#validation-input')


inpRef.addEventListener('blur', onBorderColorAdd);


function onBorderColorAdd(event) {
    const elem = event.currentTarget
    const elemValueLength = elem.value.length;
    const elemAttrValue = Number(elem.getAttribute('data-length'));
    
    if (elemValueLength === elemAttrValue) {
        inpRef.classList.add('valid')
        inpRef.classList.remove('invalid')
    }

    if (elemValueLength !== elemAttrValue) {
        inpRef.classList.remove('valid')
        inpRef.classList.add('invalid')
    }

    if (elem.value.length === 0) {
        inpRef.classList.remove('invalid')
    }
}
