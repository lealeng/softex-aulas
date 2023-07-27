const prompt = require("prompt-sync")();

//Exercícios sala de aula

function exercicio1() {
    console.log("Olá Mundo!");
    
}

function exercicio2() {
    const userName = prompt("Digite seu nome aqui: ");
    console.log("Seu nome de guerra é: " + userName);
}

function exercicio3() {
    const number1 = parseInt(prompt("Digite um número inteiro: "));
    const number2 = parseInt(prompt("Digite outro número inteiro: "));

    const result = number1 + number2;

    console.log("A soma dos números digitados é: " + result);
}

function exercicio4() {
    const idade = parseInt(prompt("Digite aqui a sua idade: "));

    if (idade >= 18) {
        console.log("Você já e maior de idade! xD ");
    } else {
        console.log("Você ainda é de menor. . . =/ ");
    }
}

function exercicio5() {
    const number = parseInt(prompt("Digite aqui um número para saber se ele é par ou ímpar: "));

    if (number % 2 === 0) {
        console.log("O número " + number + "que você digitou é par!");
    } else {
        console.log("O número " + number + "que você digitou é ímpar!");
    }
}

function exercicio6() {
    let pedindo = true;
    let numeros = [];
    while (pedindo === true) {
        const numero = prompt("Digite um número ou digite 'sair' para finalizar a aplicação: ");
        if (numero === "sair") {
            pedindo = false;
        } else {
            numeros.push(numero);
        }
    }
    let media = numeros.reduce((a, b) => +a + +b, 0) / numeros.length;
    console.log("A média dos números digitados é " + media); 
}

function exercicio7() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        
    }

}

function exercicio8() {
    console.log("Aqui estão os números pares de 1 a 20: ");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
        console.log(i);
        }
    }
}

function exercicio9() {
    
}

exercicio8();