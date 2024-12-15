function clicar(){//a função não pode ter o mesmo nome da ação
    var data = new Date()
    var ano = data.getFullYear()
    var nasceu = document.querySelector('#born-date')
    var res = document.querySelector('#res')
    
    if (nasceu.value.length == 0 || nasceu.value > ano || nasceu.value <= 1900){
        alert('[ERROR] Verifique os dados e tente novamente.')    
    }else {
        var idade = ano - nasceu.value
        var img = document.createElement('img')//cria tag img no documento
        img.setAttribute('id', 'img')//id="img"
        var sex = document.getElementsByName('rsex') //tras os dois radios para o script
        var genero = ''

        if(sex[0].checked){//se o primeiro radio estiver marcado
            genero = 'Homem'
            if(idade < 10){
                img.setAttribute('src', 'imagens/criançah.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemh.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/homem.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else if (sex[1].checked){//se o segundo estiver marcado
            genero = 'Mulher'
            if(idade < 10){
                img.setAttribute('src', 'imagens/criançam.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemm.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        
        res.innerHTML = `Detectamos um ${genero} de ${idade} Anos`
        res.appendChild(img)//reproduz a imagem abaixo da var res
        res.style.textAlign = 'center'
    }
   
}