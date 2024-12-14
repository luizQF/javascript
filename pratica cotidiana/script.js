var botao = document.querySelector('#button')
botao.addEventListener('click', clicar)

function clicar(){
    var p1 = document.querySelector('#p1')
    var corpo = document.body
    var botao = document.querySelector('#button')
    if (p1.innerHTML == 'ON'){
        p1.innerHTML = 'OFF'
        corpo.style.background = 'black'
        botao.style.background = 'red'
    }else if (p1.innerHTML =='OFF'){
        p1.innerHTML = 'ON'
        corpo.style.background = 'white'
        botao.style.background = 'green'
    }
}