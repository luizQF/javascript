let vogais = ['a', 'e', 'i', 'o', 'u']
function contarVogais(str){
    let contador = 0
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(vogais.includes(str[i])){
            contador += 1
        }
    }
    return contador
}
console.log(contarVogais('banana'))