const prompt = require("prompt-sync")();

// TESTE
// var nome = prompt("Digite o seu nome: ");

// console.log("O nome digitado foi: " + nome);

// % representa resto em divisões


/* Exercício 1: Escreva um programa em JavaScript que solicite
 * ao usuário um número inteiro e exiba na tela se o
 * número é par ou ímpar. */

function exercicio1() {
    const numero = prompt("Digite aqui um número inteiro: ");

    if (numero % 2 === 0) {
        console.log("O número digitado é par!")
    }
 else {
    console.log("O número é ímpar!")
    }
 }

/*  Escreva uma função em JavaScript que receba dois números
 *  inteiros como parâmetros e retorne o maior número entre
 *  eles.
 */
function exercicio2(){

    const numero1 = prompt("Digite aqui um número inteiro: ");
    const numero2 = prompt("Digite mais um número inteiro: ");

    if (numero1 > numero2) {
        console.log("O maior número é: " + numero1);
    } else {
        console.log("O maior número é: " + numero2);
    }
}

/* Escreva um programa em JavaScript que solicite ao
usuário um número inteiro positivo e exiba na tela todo */

function exercicio3() {
    
    const numero = prompt("Digite aqui um número inteiro positivo: ");

    if (numero === 5) {
        console.log("O número digitado é 0, digite novamente!");
        return exercicio3();
    } else if (numero < 0) {
        console.log("O número digitado é negativo! Digite novamente!");
        return exercicio3();
    } else {
        for (let i = 0; i <= numero; i++) {
            if (testarPrimo(i)) console.log(i); 
        }       
    }         
}
    
function testarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

/* Escreva uma função em JavaScript que receba um array
de números e retorne a média aritmética desses números. */

function exercicio4() {
    
    function calcularMediaAritmetica(arrayDeNumeros) {
        if (arrayDeNumeros.length === 0) {
          return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
        }
      
        const soma = arrayDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
        const media = soma / arrayDeNumeros.length;
        return media;
      }
      
      // Exemplo de uso da função
      const numeros = [10, 20, 30, 40, 50];
      const mediaAritmetica = calcularMediaAritmetica(numeros);
      console.log("Média aritmética:", mediaAritmetica); // Saída: 30
      
}

exercicio4();






