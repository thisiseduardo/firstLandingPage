const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('botao-voltar')
const setaAvacar = document.getElementById('botao-avacar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagens() {
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvacar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++
    }

    esconderImagens ()
    mostrarImagens ()
})

setaVoltar.addEventListener ('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }

    esconderImagens()
    mostrarImagens()
})