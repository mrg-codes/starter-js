// music pad logic

function playSound(e){
    const keyCode = e.keyCode //gets pressed key code
    const key = document.querySelector(`.key[data-key="${keyCode}"`) //gets html element of pressed key by its code
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`) //gets audio with matching keyCode to pressed button
    if(!audio) return; //check for non existance
    audio.currentTime = 0; //set audio to strt over when pressed again
    audio.play() //plays selected audio
    key.classList.add('playing') //adds style to indicate a button click
}

window.addEventListener('keydown', playSound)

//removes button indicator class
function removePlayIndicator(e){
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key') //make an array of all .key class elements
keys.forEach(key => key.addEventListener('transitionend', removePlayIndicator)) // for each element in array check for style transition ending and the ncall 'removePlayIndicator' function