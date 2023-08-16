const prompt = require("prompt-sync")();

/* 1. Verifique se um número é positivo, negativo ou zero usando declarações **`if`**, **`else if`** e **`else`**. */
function exercicio1() {
  const numero = prompt("Digite aqui um número: ");

  if (parseInt(numero > 0)) {
    console.log("O número digitado é positivo!");
  } else if (parseInt(numero < 0)) {
    console.log("O número digitado é negativo!");
  } else {
    console.log("O número digitado é zero!");
  }
}

/* 2. Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %. */
function exercicio2() {
  const numero = parseInt(prompt("Digite aqui um número: "));

  if (numero % 2 === 0) {
    console.log(`O número ${numero} digitado é par!`);
  } else {
    console.log(`O número ${numero} digitado é ímpar!`);
  }
}

/* 3. Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400). */
function exercicio3() {
  const ano = prompt(`Digite aqui um ano (Ex.: 2000): `);

  if (ano % 100 === 0 && ano % 400 === 0) {
    console.log(`O ano ${ano} é bissexto xD`);
  } else {
    console.log(`O ano ${ano} não é bissexto! =/`);
  }
}

/* 4. Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /). */
function exercicio4() {
  console.log(`Iniciando a calculadora...`);
  const numero1 = parseInt(prompt(`Digite um número: `));
  const numero2 = parseInt(prompt(`Digite outro número: `));
  const operador = prompt(`Escolha um operador (+, -, *, / ou digite sair.)`);

  if (operador == "+") {
    const resultado = numero1 + numero2;
    console.log(`A soma dos números é: ${resultado}`);
  } else if (operador == "-") {
    const resultado = numero1 - numero2;
    console.log(`A subtração dos número é: ${resultado}`);
  } else if (operador == "*") {
    const resultado = numero1 * numero2;
    console.log(`A multiplicação dos número é: ${resultado}`);
  } else if (operador == "/") {
    resultado = numero1 / numero2;
    console.log(`A divisão dos número é: ${resultado}`);
  } else {
    console.log(`Até mais!`);
  }
}
exercicio4();
