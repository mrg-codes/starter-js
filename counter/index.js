// variables
const buttons = document.querySelectorAll('.counter-btn')
const counter = document.querySelector('.count')
buttons.forEach(button => button.addEventListener('click', doCount))
// data
const dataName = 'count'
const storedCount = localStorage.getItem(dataName)
// set data on page load
window.onload = setCounter

function doCount(){
    const type = this.dataset.action
    // has data action ?
    if(!type) return console.log('no data type')
    updateCounter(type)
}

function setCounter() {
    if(storedCount) return updateCounter('load')
    updateCounter('init')
}

function updateCounter(type) {
    let count = counter.textContent || '0'
    // determine action
    switch(type){
        case 'dec' :
            count--
            break
        case 'inc' :
            count++
            break
        case 'reset' :
            count = 0
            break
        case 'init' :
            count = 0
            break
        case 'save' :
            count = counter.textContent
            localStorage.setItem(dataName, count)
            break
        case 'load' :
            count = localStorage.getItem(dataName)
            console.log(count)
            break
        case 'clear' :
            count = 0
            localStorage.removeItem(dataName)
            console.log(`${dataName} cleared`)
    }
    // counter value colors
    let newColor = 'lighttext'
    if(count > 0) newColor = 'success'
    if(count < 0) newColor = 'danger'
    document.documentElement.style.setProperty(`--counter-color`, `var(--${newColor})`)
    console.log(`${count} and --${newColor}`)
    // update counter element
    counter.textContent = count
}
