var agora = new Date()
var horas = agora.getHours
console.log(`agora são ${horas}`)
if(horas < 12){ 
    console.log('bom dia')
}else if (horas < 17){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}