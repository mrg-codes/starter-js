// grab elements
const canvas = document.querySelector('#canvas')
const resetBtn = document.querySelector('.nav-links a[data-action="reset"]')

// canvas vars
let isDrawing = false
let lastX, lastY
[lastX, lastY] = [0, 0]
// make touch coords fixed to touch center
let touchOffsetX = 50
let touchOffsetY = 48
let hue = 0
let hueStep = .1
let dynamicBrushSize = true
let maxBrushSize = 100
let minBrushSize = 25
let brishSizeStep = .05

// canvas params
const ctx = canvas.getContext('2d')
const canvasSizeLimit = .9
canvas.width = window.innerWidth * canvasSizeLimit
canvas.height = window.innerHeight * canvasSizeLimit
ctx.lineWidth = minBrushSize
ctx.strokeStyle = '#FFC400'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = minBrushSize

// resize tracker
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth * canvasSizeLimit
    canvas.height = window.innerHeight * canvasSizeLimit
})

// mouse and touch functionality
function mouseDraw(e) {
    var newX = e.offsetX
    var newY = e.offsetY
    return paint(newX, newY)
}

function touchDraw(e) {
    var newX = e.touches[0].pageX - touchOffsetX
    var newY = e.touches[0].pageY - touchOffsetY
    return paint(newX, newY)
}

// actual drawing logic
function paint(x, y){
    if(!isDrawing) return
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath() // init path
    ctx.moveTo(lastX, lastY) // start from
    ctx.lineTo(x, y) // go to
    ctx.stroke(); // create visible stroke 
    [lastX, lastY] = [x, y]; // update last pos coords
    hue += hueStep
    if(hue >=360) hue = 0

    if (ctx.lineWidth > 200 || ctx.lineWidth < minBrushSize) dynamicBrushSize = !dynamicBrushSize
    
      if(dynamicBrushSize) {
        ctx.lineWidth += brishSizeStep;
      } else {
        ctx.lineWidth -= brishSizeStep;
      }
}

// listeners
// mouse
canvas.addEventListener('mousemove', mouseDraw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
    ctx.lineWidth = minBrushSize
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
// touch
canvas.addEventListener('touchmove', touchDraw)
canvas.addEventListener('touchstart', (e) => {
    var newX = e.touches[0].pageX - touchOffsetX
    var newY = e.touches[0].pageY - touchOffsetY
    isDrawing = true;
    [lastX, lastY] = [newX, newY]
    ctx.lineWidth = minBrushSize
})
canvas.addEventListener('touchend', () => isDrawing = false)
canvas.addEventListener('touchcancel', () => isDrawing = false)

// clear canvas
resetBtn.addEventListener('click', () => ctx.clearRect(0,0,canvas.width, canvas.height))
