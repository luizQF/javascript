let vogais = ['a', 'e', 'i', 'o', 'u']
let contar = 0
let word = 'super'
let ventrd = []
for(let i = 0; i < word.length; i++){
    if(vogais.includes(word[i])){
        ventrd.push(word[i])
        contar++
    }
}
console.log(`a palavra ${word}, possui ${contar} vogais, que são "${ventrd}"`)