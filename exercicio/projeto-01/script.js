function carregar(){  //executa função quando a pág carregar
   
    var agora = new Date()
    var hora = agora.getHours()
    var p1 = document.querySelector('#varhour')
    var h1 = document.querySelector('#vartime')
    var corpo = document.body.style
    var img = document.querySelector('#himg')

    p1.innerHTML = `Agora são ${hora} Horas`
        if(hora > 0 && hora < 12){
            h1.innerText = 'Bom Dia'
            corpo.background = '#D0C08F'
            img.src = 'imagens/dia.jpg'
            
        }else if(hora >= 12 && hora <= 17){
            h1.innerText = 'Boa Tarde'
            corpo.background = '#A37862'
            img.src = 'imagens/tarde.jpg'
        }else{
            h1.innerText = 'Boa Noite'
            corpo.background = '#0b1336'
            img.src = 'imagens/noite.jpg'
        }
}
    