import { Locadora } from "./Locadora.js";
import { Veiculo } from "./Veiculos.js";

const placa = document.getElementById("placa-veiculo");
const marca = document.getElementById("marca-veiculo");
const modelo = document.getElementById("modelo-veiculo");
const ano = document.getElementById("ano-veiculo");
const cor = document.getElementById("cor-veiculo");
const valor = document.getElementById("valor-veiculo");
const categoria = document.getElementById("categoria-veiculo");
const veiculosDisponiveis = document.getElementById(
  "tabela-veiculos-disponiveis"
);
const veiculosAlugados = document.getElementById("tabela-veiculos-alugados");
const btnCadastrar = document.getElementById("cadastrar");

const locadora = new Locadora();

btnCadastrar.addEventListener("click", cadastrarVeiculo);
document.addEventListener("click", (event) => {
  const idBtn = event.target.id;
  const textoBtn = event.target.textContent;
  let index = "";
  switch (textoBtn) {
    case "Alugar":
      index = idBtn.replace("alugar[", "").replace("]", "");
      locadora.alugarVeiculo(Number(index));
      console.log(textoBtn);
      renderizaDisponiveis();
      renderizaAlugados();
      break;

    case "Devolver":
      index = idBtn.replace("devolver[", "").replace("]", "");
      locadora.devolverVeiculo(Number(index));
      console.log(textoBtn);
      renderizaDisponiveis();
      renderizaAlugados();
      break;

    case "Excluir":
      index = idBtn.replace("excluir[", "").replace("]", "");
      locadora.excluirVeiculo(Number(index));
      console.log(textoBtn);
      renderizaDisponiveis();
      renderizaAlugados();
      break;

    default:
      break;
  }
});

function cadastrarVeiculo() {
  const veiculo = new Veiculo(
    placa.value,
    marca.value,
    modelo.value,
    ano.value,
    cor.value,
    valor.value,
    categoria.value,
    true
  );
  locadora.cadastrarVeiculo(veiculo);
  limpaInputCadastro();
  renderizaDisponiveis();
}

function renderizaDisponiveis() {
  veiculosDisponiveis.innerHTML = "";
  locadora.veiculos.forEach((element, index) => {
    if (element.disponivel) {
      veiculosDisponiveis.innerHTML += `<tr> 
        <th id="${index}" scope="row">${index + 1}</th>
        <td>${element.placa}</td>
        <td>${element.marca}</td>
        <td>${element.modelo}</td>
        <td>${element.ano}</td>
        <td>${element.cor}</td>
        <td>${element.valor}</td>
        <td>${element.categoria}</td>
        <td><button id="excluir[${index}]" class="btn btn-danger">Excluir</button> | <button id="alugar[${index}]" class="btn btn-success"> Alugar</button></td>
        </tr>`;
    }
  });
}

function renderizaAlugados() {
  veiculosAlugados.innerHTML = "";
  locadora.veiculos.forEach((element, index) => {
    if (!element.disponivel) {
      veiculosAlugados.innerHTML += `<tr>
                <th id="${index}" scope="row">${index + 1}</th>
                <td>${element.placa}</td>
                <td>${element.marca}</td>
                <td>${element.modelo}</td>
                <td>${element.ano}</td>
                <td>${element.cor}</td>
                <td>${element.valor}</td>
                <td>${element.categoria}</td>
                <td><button id="devolver[${index}]"class="btn btn-warning">Devolver</button></td>
            </tr>`;
    }
  });
}

function limpaInputCadastro() {
  placa.value = "";
  marca.value = "";
  modelo.value = "";
  ano.value = "";
  cor.value = "";
  valor.value = "";
  categoria.value = "";
}
