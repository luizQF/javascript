
var botao = document.querySelector('#botao')
    botao.addEventListener('click', clicar)
function clicar(){
    var vel = document.querySelector('#vel')//limite 50
    var p1 = document.querySelector('p#res')
    var v1 = Number(vel.value)
    p1.innerHTML = `sua velocidade é de ${v1}km/h`
        if(v1 > 50){
            p1.innerHTML += ' Você foi <strong>MULTADO</strong>, velocidade máxima é de 50km/h'
        }else{
            p1.innerHTML += ' ,você não foi <strong>MULTADO</strong>. <p>Dirija com segurança</p>'//+= concatena o texto sem substituir o texto atual
        }
}



