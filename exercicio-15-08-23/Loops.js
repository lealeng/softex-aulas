const prompt = require("prompt-sync")();

/* 1- Imprima os números de 1 a 10 utilizando um loop for. */
function exercicio1() {
  for (let i = 0; i <= 10; i++) {
    console.log("Número: " + i);
  }
}

/* 2- Calcule a soma dos números de 1 a 100 utilizando um loop while. */
function exercicio2() {
  var n = 0;
  var x = 0;

  while (n < 100) {
    n++;
    x += n;
  }
  console.log("Número: " + x);
}

/* 3- Imprima os números pares de 0 a 20 utilizando um loop for. */
function exercicio3() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log("Número: " + i);
    }
  }
}

/* 4- Calcule o produto dos números de 1 a 5 utilizando um loop do...while. */
function exercicio4() {
  let contador = 1;
  let produto = 1;

  while (contador < 5) {
    contador++;
    produto *= contador;
  }
  console.log("O produto dos números de 1 a 5 é: " + produto);
}

/* 5- Crie um loop que imprima a sequência de Fibonacci até o 10º termo. */
function exercicio5() {
  //definindo o limite do termo
  const termo = 10;
  let termoAtual = 1;
  let proxTermo = 0;

  console.log("Sequência de Fibonnaci até o 10° termo é:");

  for (let i = 1; i <= termo; i++) {
    const soma = termoAtual + proxTermo;
    termoAtual = proxTermo;
    proxTermo = soma;
    console.log(termoAtual);
  }
}

/* 6- Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for. */
function exercicio6() {
  console.log("Os múltiplos de 3, de 0 a 30 são:");
  for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

exercicio6();
