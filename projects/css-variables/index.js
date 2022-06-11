// Variables
const inputs = Array.from(document.querySelectorAll('.controls input'))
const resetBtn = document.querySelector('[data-action=reset]')

inputs.forEach(input => input.addEventListener('input', updateHandle))
inputs.forEach(input => input.addEventListener('', updateHandle))
resetBtn.addEventListener('click', loadInputValues)
window.onload = loadInputValues()

function updateHandle(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}-cssjs`, this.value + suffix)
    console.log(`${this.name} set to ${this.value}${suffix}`)
}

function loadInputValues(){
    inputs.forEach(input => {
        const suffix = input.dataset.sizing || '';
        const defaultValue = input.dataset.default || '';
        document.documentElement.style.setProperty(`--${input.name}-cssjs`, defaultValue + suffix)
        input.value = defaultValue
        console.log(`${input.name} set to ${defaultValue}${suffix}`)
    })
}