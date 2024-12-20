let valores = []
//LIMITE DE 1 A 100 
function Limit(){
    let inp1 = document.getElementById('txtn')
    if(inp1.value < 1 || inp1.value > 100){
        return true
    }else{
        return false
    }
}
//ADICIONAR ELEMENTOS
function adicionar(){
    let inp1 = document.getElementById('txtn')
    if(inp1.value.length == 0 || Limit(inp1.value)){
        alert('[ERRO] Insira um numero de 1 a 100')
    }else{
        let valor = Number(inp1.value)
        let opt = document.createElement('option')
        valores.push(valor)
        let select = document.querySelector('#tab')
        opt.innerHTML = `O valor ${valor} foi adicionado`
        select.appendChild(opt)
    }
}
//CALCULA O MENOR NÚMERO
function menor(){
    let menor1 = valores[0]
    for(let i = 1; i < valores.length; i++){
        if(valores[i] < menor1){
            menor1 = valores[i]
        }
    }
    return menor1
}
//CALCULA O MAIOR NÚMERO
function maior(){
    let maior1 = valores[0]
    for(let i = 1; i < valores.length; i++){
        if(valores[i] > maior1){
            maior1 = valores[i]
        }
    }
    return maior1
}
//CALCULA A MEDIA DOS VALORES
function media(){
    let m = 0
    for(let i = 1; i < valores.length; i++){
        m += valores[i]
    }
    return m / valores.length
}

//FINALIZA
function finalizar(){
    let p1 = document.querySelector('#me1')
    let p2 = document.querySelector('#ma1')
    let p3 = document.querySelector('#media')
    let p4 = document.querySelector('#total')
    p1.innerHTML = `O menor valor é ${menor(valores)}`
    p2.innerHTML = `O maior valor é ${maior(valores)}`
    p3.innerHTML = `A media dos valores é ${media(valores)}`
    p4.innerHTML = `${valores.length} valores foram registrados`
}