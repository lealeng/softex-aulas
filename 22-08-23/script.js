const botao = document.getElementById("botao1");
const input = document.getElementById("input1");

botao.addEventListener("click", lidarComClique);

function lidarComClique(evento) {
    const valorDoCampo = input.value;
    alert(valorDoCampo);
}

function listarAlunos() {
    let alunos = [];
    const nome = prompt(`Insira um nome`);
}