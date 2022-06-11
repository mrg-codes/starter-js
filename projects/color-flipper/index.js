// variables
const colorList = ['red','green','blue','rgba(120,150,180)','#ff0']
const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let colorListStep = 0
const defaultColor = '#f1f5f8'
const actions = Array.from(document.querySelectorAll('[data-action]'))
const colorInfo = document.querySelector('.colorCode')

//set defaults
document.body.style.background = defaultColor
colorInfo.textContent = defaultColor;
colorInfo.style.color = defaultColor;
console.log(`Default color ${defaultColor}`)

//calls
actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action
        switch(type) {
            case 'shuffle':
                colorShuffle(type)
                break
            case 'cycle':
                colorCycle(type)
                break
            case 'random':
                colorRandom(type)
                break
            case 'reset':
                colorReset(type)
                break
        }
    })
})

var colorCycle = (type) => {
    let newColor = colorList[colorListStep]
    colorListStep = (colorListStep < colorList.length-1) ? colorListStep + 1 : colorListStep = 0;
    changeColor(newColor, 0, type)
}

var colorShuffle = (type) => {
    let newColor = colorList[colorListStep]
    newColor = colorList[randomFromArray(colorList)]
    changeColor(newColor, 1, type)
}

var colorRandom = (type) => {
    let newColor = "#"
    var hexCap = 6 //longest hex value excluding the "#"
    for (let i = 0; i < hexCap; i++){
        newColor += hexList[randomFromArray(hexList)] //generates a valid hex code
    }
    changeColor(newColor, 1, type)
}

var colorReset = (type) => {
    changeColor(defaultColor, 1, type)
}

var randomFromArray = (sentArray) => {
    return Math.floor(Math.random() * sentArray.length)
}

function changeColor(targetColor, resetCycle, actionType){
    document.body.style.background = targetColor
    colorInfo.textContent = targetColor;
    colorInfo.style.color = targetColor;
    (resetCycle) ? colorListStep = 0 : "";
    console.log(`New ${actionType} color ${targetColor}`)
}