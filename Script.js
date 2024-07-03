//Aqui vamos pegar o input e o seu valor

function salvarAnotacao() {
    var inputAnotacao = document.getElementById("inputAnotacao");
    var textoAnotacao = inputAnotacao.value.trim();

    if (textoAnotacao !== "") {
        adicionarAnotacao(textoAnotacao);
        inputAnotacao.value = ""; // Após salvarmos a anotação, retorna o input vazio
        inputAnotacao.focus(); // Retorna o foco para o começo
    }
}


//Agora vamos criar o botão e a lista pegando a UL 

function adicionarAnotacao(texto) {
    var listaAnotacoes = document.getElementById("listaAnotacoes");

    
    var novaAnotacao = document.createElement("li");
    novaAnotacao.textContent = texto;

    //Vamos Criar um botão de excluir 

    var botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", function() {
        excluirAnotacao(novaAnotacao);
    });

    novaAnotacao.appendChild(botaoExcluir);
    listaAnotacoes.insertBefore(novaAnotacao, listaAnotacoes.firstChild);
}

function excluirAnotacao(nota) {
    nota.remove();
}
