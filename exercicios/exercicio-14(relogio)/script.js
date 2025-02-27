
let Respour = document.querySelector('#varhour');
let now = new Date();
let hora = now.getHours();
let minutes = now.getMinutes()
let image = document.querySelector('#himg')
function carregar(){
    if(hora > 5 && hora < 12){
        Respour.innerHTML = `Bom dia <br> ${hora}:${minutes}`
        image.setAttribute('src', 'imagens/dia.jpg')
    }else if(hora >= 12 && hora <= 18){
        Respour.innerHTML = `Boa tarde <br> ${hora}:${minutes}`
        image.setAttribute('src', 'imagens/tarde.jpg')
        document.body.style.backgroundColor = 'brown'
    }else{
        Respour.innerHTML = `Boa noite <br> ${hora}:${minutes}`
        image.setAttribute('src', 'imagens/noite.jpg')
        document.body.style.backgroundColor = 'darkblue'
    }
}
