let mouseX = 0
let mouseY = 0
let circleX = 0
let circleY = 0
let suavizar = 0.1
const circle = document.querySelector('.circle')
let i = 0
let score = 0
const points = document.querySelector('#points')
function mouseUpd(event){
    mouseX = event.clientX
    mouseY = event.clientY
}
function adicionarGato(){
    circle.setAttribute('src', 'gatinho.gif')
    setTimeout(function(){
        circle.removeAttribute('src', 'gatinho.gif')
        
    },2600)
    
}
function atualizarPos(){
   
    circleX += (mouseX - circleX) * suavizar
    circleY += (mouseY - circleY) * suavizar
    circle.style.left = `${circleX}px`
    circle.style.top = `${circleY}px`
    
    requestAnimationFrame(atualizarPos)
}

function matarRato(){
    adicionarGato()
    let rato = document.getElementsByClassName('rato')[i]
    i += 1
    rato.style.visibility = 'visible'
    setTimeout(function(){
        rato.style.visibility = 'hidden'
        score++
        points.innerHTML = `Score: ${Number(score)}`
    }, 2100)
}
window.addEventListener('mousemove', mouseUpd)
atualizarPos()