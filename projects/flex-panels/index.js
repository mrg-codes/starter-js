// Variables
const panels = document.querySelectorAll(`.panel`)

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

function toggleOpen() {
    // only one .open is allowed
    panels.forEach(panel => panel.classList.remove('open'))
    // close open element if clicked again
    if(!this.classList.contains('active')) this.classList.add('open')
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.remove('active')
        // prevent desync from spam looping
        if(this.classList.contains('open')) this.classList.add('active')
    }
}