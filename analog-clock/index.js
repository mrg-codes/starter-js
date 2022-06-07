// DEBUG ?
const showDebug = false
// variables
const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hrsHand = document.querySelector('.hour-hand')
const secVal = document.querySelector('.sec-val')
const minVal = document.querySelector('.min-val')
const hrsVal = document.querySelector('.hrs-val')
const secDig = document.querySelector('.clock-digital .seconds')
const minDig = document.querySelector('.clock-digital .minutes')
const hrsDig = document.querySelector('.clock-digital .hours')

// update interval in ms
const updateInterval = 100
var trueTime = Date.now() - updateInterval

setTimeout(setTime, updateInterval)

function setTime() {
    const timeDrift = Date.now() - updateInterval
    const currTime = new Date()
    if(timeDrift > trueTime) {
        console.log(`Time dialation! Offset of ${Math.floor(timeDrift - trueTime)}`)
    }
    // use seconds as global guide to update every hand
    var milliseconds = currTime.getMilliseconds()
    var seconds = currTime.getSeconds()
    var minutes = currTime.getMinutes()
    var hours = currTime.getHours()
    /*
    convert innerCounter to degrees for 
    seconds minutes and hours updated every second
    round to closes whole degree
    */
    const milr = ((milliseconds / 60000)).toFixed(4)
    const secr = ((seconds / 60) + (milr * 1)).toFixed(4)
    const minr = ((minutes / 60) + (secr / 60)).toFixed(4)
    const hrsr = ((hours / 12) + (minr / 60) + (secr / 3600)).toFixed(4)

    updateHands(secr, minr, hrsr)
    updateDisplay(seconds, minutes, hours)

    // debuging console msg
    if (showDebug) console.log(`SecDeg: ${secr} & MidDeg: ${minr} & HrsDeg: ${hrsr}`)

    trueTime += updateInterval
    setTimeout(setTime, Math.max(0, updateInterval - timeDrift))
}

function updateDisplay(seconds, minutes, hours) {
    secDig.textContent = leadZero(seconds, 2)
    minDig.textContent = leadZero(minutes, 2)
    hrsDig.textContent = leadZero(hours, 2)
}

function updateHands(secr, minr, hrsr) {
    secHand.style.transform = `rotate(${secr}turn)`
    minHand.style.transform = `rotate(${minr}turn)`
    hrsHand.style.transform = `rotate(${hrsr}turn)`
}

function leadZero(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}