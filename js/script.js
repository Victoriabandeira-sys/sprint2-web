alert("Bem vindo ao modo estudante!")

const formulario = document.getElementById("loginForm")
const texto = document.getElementById("msg")

formulario.addEventListener("submit", function(e){
    e.preventDefault()
    const usuario = document.getElementById("nome").value
    const senhaUsuario = document.getElementById("senha").value

    if(usuario == "" || senhaUsuario == ""){
        alert("Preencha os campos")
        texto.innerHTML = "Faltam informações"
        texto.style.color = "red"
    }

    else if(senhaUsuario.length < 6){
        texto.innerHTML = "Senha muito curta"
        texto.style.color = "orange"
    }

    else{
        texto.innerHTML = "Entrou com sucesso!"
        texto.style.color = "lightgreen"
    }
})

const fotos = [
    "./image/image resumo.jpg",
    "./image/image explicação.jpg",
    "./image/image resumo (2).jpg"
]
let posicao = 0
function trocarFoto(){
    posicao++
    if(posicao >= fotos.length){
        posicao = 0
    }
    document.getElementById("fotoAtual").src = fotos[posicao]
}

function voltarFoto(){
    posicao--
    if(posicao < 0){
        posicao = fotos.length - 1
    }
    document.getElementById("fotoAtual").src = fotos[posicao]
}

