var botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar(){
    var corpo = document.body
    var input = document.querySelector('#txt1')
    var r = Number(input.value)
    var res = document.querySelector('#res')
    if (r >= 18){
        corpo.style.background = 'green'
        res.innerHTML = 'você é de maior'
    }else if(r < 18){
        corpo.style.background = 'red'
        res.innerHTML = 'você é de menor'
    }
}