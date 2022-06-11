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
    if(!storedCount) return updateCounter('init')
    updateCounter('show')
}

function updateCounter(type) {
    switch(type){
        case 'dec' :
            count--
            localStorage.setItem(dataName, count)
            break
        case 'inc' :
            count++
            localStorage.setItem(dataName, count)
            break
        case 'reset' :
            count = 0
            localStorage.setItem(dataName, count)
            break
        case 'init' :
            count = 0
            localStorage.setItem(dataName, count)
            break
        case 'show' :
            count = storedCount
            localStorage.setItem(dataName, count)
            break
        case 'clear' :
            count = 0
            localStorage.removeItem(dataName)
            console.log(`${dataName} cleared`)
    }
    counter.textContent = count
}
