function clicar(){
    var input = document.querySelector('#inp1')
    var tab = document.querySelector('#tab')
    if(input.value.length == 0){
        alert('[ERROR] INSIRA UM VALOR VÁLIDO')
    }else{
        tab.innerHTML = ''
        let n1 = Number(input.value)
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.innerHTML = `${n1} X ${i} = ` + n1 * i
            tab.appendChild(item)
        } 
    }
}