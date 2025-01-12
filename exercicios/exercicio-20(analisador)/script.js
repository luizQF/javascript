let armazenar = []
function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true //está na lista
    }else{
        return false //não esta na lista
    }
}
function adicionar(){
    let inp = document.querySelector('#input')
    let inpValue = Number(inp.value) 
    if(inpValue <= 0 || inpValue > 100|| isNaN(inpValue)){
        alert('[ERRO] Insira um número entre 1 e 100')
    }else if(inlist(inp.value, armazenar)){
        alert('[ERRO] o valor ja foi adicionado')
    }else{
        //Criando elemento option
        let opt = document.createElement('option')
        let selector = document.querySelector('#selecter')
        //Definindo o conteudo para option
        opt.innerHTML = `Valor ${inpValue} foi adicionado`
        selector.appendChild(opt)
        //Salvando os valores
        armazenar.push(inpValue) 
    }
}
//Media entre os números
function media(){
    var soma = 0
    for(let i = 0; i < armazenar.length; i++){
        soma += armazenar[i]
    }
    let res = soma / armazenar.length
    return res.toFixed(1)
}
//Maior número
function maior(){
    let bigger = armazenar[0]
    for(let i = 0; i < armazenar.length; i++){
        if(armazenar[i] > bigger){
            bigger = armazenar[i]
        }
    }
    return bigger
}
//Menor número
function menor(n){
    let smaller = armazenar[0]
    for(let i = 0; i < armazenar.length; i++){
        if(smaller > armazenar[i]){
            smaller = armazenar[i]
        }
    }
    return  smaller
}
function finalizar(){
    if(armazenar.length == 0){
        alert('Insira os valores antes')
    }else{
        var p1 = document.querySelector('#p1')
        var p2 = document.querySelector('#p2')
        var p3 = document.querySelector('#p3')
        var p4 = document.querySelector('#p4')
        p1.innerHTML = `Você adicionou ${armazenar.length} números`
        p2.innerHTML = `o Maior número é ${maior()}`
        p3.innerHTML = `o Menor número é ${menor()}`
        p4.innerHTML = `a Media entre os números é ${media()}`
    }
}
function limpar(){
    p1.innerHTML = ''
    p2.innerHTML = ''
    p3.innerHTML = ''
    p4.innerHTML = ''
    armazenar = []
    let selector = document.querySelector('#selecter')
    selector.innerHTML = ''
}


