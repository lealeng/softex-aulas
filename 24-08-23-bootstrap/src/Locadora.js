import { Veiculo } from "./Veiculos.js";

export class Locadora extends Veiculo {
  veiculos;
  constructor(placa, marca, modelo, cor, ano, categoria, valor) {
    super(placa, marca, modelo, cor, ano, categoria, valor);
    this.veiculos = [];
  }

  cadastrarVeiculo(veiculo) {
    this.veiculos.push(veiculo);
  }

  alugarVeiculo(posicaoLista) {
    this.veiculos.forEach((element, index) => {
      if (index === posicaoLista) {
        element.disponivel = false;
      }
    });
  }

  devolverVeiculo(posicaoLista) {
    this.veiculos.forEach((element, index) => {
      if (index === posicaoLista) {
        element.disponivel = true;
      }
    });
  }

  excluirVeiculo(posicaoLista) {
    this.veiculos.forEach((element, index) => {
      if (index === posicaoLista) {
        this.veiculos.splice(index, 1);
      }
    });
  }
}
