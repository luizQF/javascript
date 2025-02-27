let num = 7
let contar = 0
for(let i = 1; i <= Math.sqrt(num); i++){
    if(num % i == 0){
        contar ++
        if(i !== num/i){
            contar ++
        }
    }
}
if(contar == 2){
    console.log('primo')
}else{
    console.log('não é primo')
}
console.log(contar)