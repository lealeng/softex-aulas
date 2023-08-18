const prompt = require("prompt-sync")();

/* 1.Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex". */
function exercicio1() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`SofTex`);
    } else if (i % 3 === 0) {
      console.log(`Sof`);
    } else if (i % 5 === 0) {
      console.log(`Tex`);
    } else {
      console.log(i);
    }
  }
}

/* 2. Crie um programa que imprima a tabela de multiplicação de 1 a 10. */
function exercicio2() {
  console.log(`Tabuada de multiplicação:\n`);
  const numero = prompt(`Escolha um número de 1 a 10 ou digite "sair": `);
  if (numero == "sair") {
    console.log(`Até mais!`);
  } else {
    for (let i = 0; i <= 10; i++) {
      const resultado = numero * i;
      console.log(resultado);
    }
  }
}

/* 3. Implemente a sequência de Collatz: comece com um número n e,
se n for par, divida-o por 2; se for ímpar, multiplique por 3 e some 1. 
Repita o processo até n se tornar 1. */
function exercicio3() {
  let n = 6;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    console.log(n);
  }
}

function exercicio4() {
  const numero = 11;

  if (numero % 2 === 0) {
    console.log(`Esse número não é PRIMO.`);
  } else {
    console.log(`Esse número é primo! `);
  }
}
exercicio3();
