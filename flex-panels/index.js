// Variables
const panels = document.querySelectorAll(`.panel`)

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleACtive))

function toggleOpen() {
    this.classList.toggle('open')
}
function toggleACtive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('active')
    }
}
