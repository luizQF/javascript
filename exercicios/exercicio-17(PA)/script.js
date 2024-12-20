function clicar(){
    var num1 = document.querySelector('#n1')
        var n1 = Number(num1.value)
    var num2 = document.querySelector('#n2')
        var n2 = Number(num2.value)
    var pr1 = document.querySelector('#pr1')
        var add = Number(pr1.value)
    var res = document.querySelector('#res')
    if(n1 == 0 || n2 == 0 || add == 0){
        alert('[ERROR] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    }else if(n1 < n2){
        //valor crescente, quando i for menor que n2
        for(let i = n1; i <= n2; i += add){
            res.innerHTML += `${i}, `
        }
        res.innerHTML += '🎉'
    }else{
        //valor decrescente, quando i for maior que o n2
        for(let i = n1; i >= n2; i -= add){
            res.innerHTML += `${i}, `
        }
        res.innerHTML += '🎉'
    }
}