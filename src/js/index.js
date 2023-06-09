// passo 1 - dar um jeito de pegar o elemento HTML dos botoões 
const botoesCarrosel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagem')

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector ('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        // passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
        imagem[indice].classList.add('ativa')
    })
})