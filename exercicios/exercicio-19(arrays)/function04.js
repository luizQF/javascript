function fator(n){
    var res = ''
    var valor = 1
    for(let i = n; n >= 1; n--){
       res += `${n}*`
       valor *= n
    }
    return `5! = ${res} = ${valor}`
}
console.log(fator(5))