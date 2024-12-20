var num = [5, 6, 8, 9, 5, 4, 4]
var acumulador = ''
for(let s in num){//s vale de 0 até a posição total de elementos 
    if(s == 6){
     acumulador += `${num[s]}`
    }else{
        acumulador += `${num[s]}, `
    }
}
    console.log(`metodo for(.....in.....) s recebe a posição do elemento, valor de num[s] = ${acumulador}`)

for(let s of num){//s vale o valor do elemento, é tipo "S é o valor de NUM"
        acumulador += `${num[s]}, `
}
console.log(`metodo for(.....of.....) s recebe o valor do elemento, valor de s = ${acumulador}`)
