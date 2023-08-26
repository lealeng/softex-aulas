const btEnviar = document.getElementById("btEnviar");
const lista = document.getElementById("minha-lista");
const inpNome = document.getElementById("inpNome");
const btExcluir = document.getElementById("btExcluir");

btEnviar.addEventListener("click", adicionar);
btExcluir.addEventListener("click", excluir);

const listaDePessoas = [];

function adicionar() {
  const valorDoCampo = inpNome.value;
  listaDePessoas.push(valorDoCampo);
  renderizarLista();
  inpNome.value = "";
}

function renderizarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < listaDePessoas.length; i++) {
    const pessoa = listaDePessoas[i];
    const itemDaLista = document.createElement("li");
    itemDaLista.innerHTML = itemDaLista.innerHTML = pessoa;
    lista.appendChild(itemDaLista);
  }
}

function excluir() {
  const valorDoCampo = inpNome.value;
  const valorDoCampoExcluir = listaDePessoas.indexOf(valorDoCampo);
  if (valorDoCampoExcluir !== -1) {
    listaDePessoas.splice(valorDoCampoExcluir, 1);
    renderizarLista();
  }
  inpNome.value = "";
}
