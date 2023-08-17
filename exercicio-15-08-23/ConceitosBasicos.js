const prompt = require("prompt-sync")();

/* 1. Crie uma função que calcule o fatorial de um número inteiro. */
function exercicio1() {
  const numero = 5;
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
  }
}

/* const numero = 5;
const resultado = exercicio1(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`); */

/* 2. Crie uma função que retorne o maior valor entre três números. */
function exercicio2() {
  console.log(`Digite três números!\n`);
  const a = parseInt(prompt(`Primeiro: `));
  const b = parseInt(prompt(`Segundo: `));
  const c = parseInt(prompt(`Terceiro: `));

  const maiorValor = Math.max(a, b, c);
  console.log(`O maior valor é: ${maiorValor}`);

  // if (a > b && a > c) {
  //   console.log(`O número maior é: ${a}.`);
  // } else if (b > a && b > c) {
  //   console.log(`O número maior é: ${b}.`);
  // } else {
  //   console.log(`O número maior é: ${c}.`);
  // }
}

/* 3. Converta uma temperatura de Celsius para Fahrenheit usando funções. */
function exercicio3() {
  console.log(
    "Aqui você irá converter a temperatura de Graus Celsius para Fahrenheit."
  );
  const celcius = parseFloat(
    prompt(`Digite aqui a temperatura em Graus Celsius: `)
  );

  const resultado = (celcius * 9) / 5 + 32;
  console.log(`A conversão em Fahrenheit é: ${resultado}`);
}

/* 4. Crie uma função que receba um array de números e retorne a média deles. */
function exercicio4() {
  let solicita = true;
  let numeros = [];
  while (solicita) {
    const numero = parseInt(
      prompt(
        `Digite números para criar um array e para finalizar digite "sair".\n`
      )
    );
    if (numero === "sair") {
      solicita = false;
    } else {
      numeros.push(numero);
    }
    //FALTA
  }
}

/* 5. Crie uma função que remova elementos duplicados de um array. */
function exercicio5() {
  let arrei = [1, 2, 1, 3, 4, 3, 5, 6, 9, 45];
  let novaArrei = arrei.filter((ar, i) => arrei.indexOf(ar) === i);
  console.log(`Array duplicado: ${arrei}.`);
  console.log(`Array sem duplicados: ${novaArrei}.`);
}

/* 6. Escreva uma função que inverta uma string (exemplo: "hello" => "olleh"). */
function exercicio6a() {
  //Funções Integradas
  let nome = "Hello";
  // Passo 1. Use o método split() para retornar um novo array
  let splitString = nome.split("");
  // Passo 2. Use o método reverse() para inverter o array recém-criado
  let reverseArray = splitString.reverse();
  // Passo 3. Use o método join() para unir todos os elementos do array em uma string
  let joinArray = reverseArray.join("");
  // Passo 4. Imprima o resultado
  console.log(`O resultado é: ${joinArray}`);
}

function exercicio6b() {
  //Usando laço FOR
  let nome = "Hello";
  let array = "";
  /* O ponto inicial do laço será (nome.length - 1), que corresponde ao 
       último caractere da string, "o"
       Enquanto i for maior ou igual a 0, o laço continuará
       Decrementamos i após cada iteração */
  for (let i = nome.length - 1; i >= 0; i--) {
    array += nome[i];
  }
  //Imprime a String invertida.
  console.log(`O resultado é: ${array}`);
}

exercicio6b();
