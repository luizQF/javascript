function clicar(){//a função não pode ter o mesmo nome da ação
    var data = new Date()
    var ano = data.getFullYear()
    var nasceu = document.querySelector('#born-date')
    var res = document.querySelector('#res')
    
    if (nasceu.value.length == 0 || nasceu.value > ano){
        alert('[ERROR] Verifique os dados e tente novamente.')    
    }else {
        var idade = ano - nasceu.value
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        var sex = document.getElementsByName('rsex') 
        var genero = ''

        if(sex[0].checked){
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
        }else if (sex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                img.setAttribute('src', 'imagens/criançam.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemm.pjg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }
        
        res.innerHTML = `Detectamos um ${genero} de ${idade} Anos`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }
   
}