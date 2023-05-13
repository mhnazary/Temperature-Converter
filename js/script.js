
let inputValue = document.getElementById('converter')
let placeholderValue = inputValue.getAttribute('placeholder')
let result = document.querySelector('.result')
let c = document.querySelector('.C')
let f = document.querySelector('.F')
let convertBtn = document.querySelector('.convertButton')
let resetBtn = document.querySelector('.resetButton')
let changeBtn = document.querySelector('.changeButton')

function convert() {
    
    if (inputValue.value === '') {
        result.innerHTML = 'Invalid input';
      } else {
            if (c.innerHTML === '°C') {
            const resultDegree = inputValue.value * 1.8 + 32;
            result.innerHTML = inputValue.value + ' °C = ' +  resultDegree + ' °F';
            inputValue.value = '';
        } else if (c.innerHTML === '°F') {
        const resultDegree = (inputValue.value - 32) / 1.8;
        result.innerHTML =inputValue.value + ' °F = ' + resultDegree.toFixed(2) + ' °C';
        inputValue.value = '';
      } }
}

function reset() {
    inputValue.value = ''
    result.innerHTML = ''
    return true

}

function change() {
    if(c.innerHTML === '°C'){
        c.innerHTML = '°F'
        f.innerHTML = '°C'
        inputValue.setAttribute('placeholder','°F')
        document.title = 'Weather F to C'
    }else if(c.innerHTML === '°F'){
        c.innerHTML = '°C'
        f.innerHTML = '°F'
        inputValue.setAttribute('placeholder','°C')
        document.title = 'Weather C to F'
    }
}

convertBtn.addEventListener('click',function () {
    convert()
})

resetBtn.addEventListener('click',function () {
    reset()
})

changeBtn.addEventListener('click',function () {
    change()
})