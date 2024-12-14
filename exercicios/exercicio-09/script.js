var button = document.querySelector('#botao')
        button.addEventListener('click', clicar)

function clicar(){
        var pais = document.querySelector('#pais')
                var rpais = pais.value 
        var res = document.querySelector('#res')
        res.innerText = `seu país é ${rpais}`

        if (rpais == 'Brasil'){
                res.innerHTML += '<p>Você é Brasileiro</p>'
        }else{
                res.innerHTML += '<p>Você é Estrangeiro</p>'
        }
}