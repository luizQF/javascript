
function clicar(){
    let inputN = document.querySelector('#inp1')
    //Caixa que recebe o valor
    let tab = document.querySelector('#tab')
    //Tabela onde as opções vão ficar
    if(inputN.value.length == 0){
        alert('[ERROR] insira um valor válido')//checa se o valor inserido no input está válido
    }if(inputN.value == 0){
        alert('Todo número multiplicado por zero é igual a zero')
        //pergunta interativa
        let ask = window.prompt(`Você entendeu? se sim digite 1 , caso não tenha entendido digite 2`).toUpperCase()
        setTimeout(function(){
            alert('carregando resposta...')
        }, 400) 
        setTimeout(function(){
            if(ask == '2'){
                alert('fodasse')
            }else if(ask == '1'){
                alert('tu fez o minimo menor')
            }
        }, 3500)
            
    }else{
        tab.innerHTML = ''//Limpa a tabela
        let n1 = Number(inputN.value)//converte de string para Number
        for(let i = 1; i <= 10; i++){/*Inicia um laço multiplicando o valor N1(inserido pelo usuario) por 1 até 10*/
            let item = document.createElement('option')//cria um elemento option
            item.innerHTML = `${n1} x ${i} = ${n1 * i}`//define o conteudo do elemento option
            tab.appendChild(item)//exibe o elemento como filho do "select"
        }
    }
}