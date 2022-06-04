// music pad logic

window.addEventListener('keydown', playSound)

function playSound(e){
    const keyCode = e.keyCode
    const key = document.querySelector(`.key[data-key="${keyCode}"`)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    audio.currentTime = 0;
    audio.play()
    console.log(audio)
}
