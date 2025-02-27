let Userlogin = 'gabi'//Login do usuario
let Userpass = 'xoxa123'

function logar(event){
    event.preventDefault()
    let FailLogin = document.getElementById('failLogin')//Falha de login
    let logBox = document.getElementById('login').value //Caixa de login
    let passBox = document.getElementById('senha').value //Caixa de senha
    if(logBox === Userlogin && passBox === Userpass){
        window.location.href = 'paginas/pagina01.html'
    }else{   
        FailLogin.classList.toggle('hidden')
    }
}
document.getElementById('loginForm').addEventListener('submit', logar);