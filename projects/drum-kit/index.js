//make an array of all .key class elements
const keys = document.querySelectorAll('.key')


// music pad logic
function playSound(e){
    //gets pressed key code
    const keyCode = e.keyCode
    //gets html element of pressed key by its code
    const key = document.querySelector(`.key[data-key="${keyCode}"`) 
    //gets audio with matching keyCode to pressed button
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`) 
    //check for non existance
    if(!audio) return; 
    //set audio to strt over when pressed again
    audio.currentTime = 0; 
    //plays selected audio
    audio.play() 
    //adds style to indicate a button click
    key.classList.add('playing') 
}

//removes button indicator class
function removePlayIndicator(e){
    this.classList.remove('playing')
}

function touchPlay(){
    const buttonKeyCode = this.dataset.key
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': buttonKeyCode
    }))
    console.log(buttonKeyCode)
}
// for each element in array check for style transition ending and the ncall 'removePlayIndicator' function
keys.forEach(key => key.addEventListener('transitionend', removePlayIndicator))
keys.forEach(key => key.addEventListener('pointerdown', touchPlay))
window.addEventListener('keydown', playSound)