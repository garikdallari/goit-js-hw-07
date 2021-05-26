const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sliderRef.addEventListener('input', onSliderChange)

function onSliderChange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px'
}

