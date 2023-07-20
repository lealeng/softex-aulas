const prompt = require("prompt-sync")();

// TESTE
// var nome = prompt("Digite o seu nome: ");

// console.log("O nome digitado foi: " + nome);

// % representa resto em divisões


// EXERCICIO 1
// var numero = prompt("Digite aqui um número inteiro: ");

//     if (numero % 2 === 0) {
//         console.log("O número digitado é par!")
        
//     }
//  else {
//     console.log("O número é ímpar!")
    
// };

// EXERCICIO 2
function exercicio2(){

    const numero1 = prompt("Digite aqui um número inteiro: ");
    const numero2 = prompt("Digite mais um número inteiro: ");

    if (numero1 > numero2) {
        console.log("O maior número é: " + numero1);
    } else {
        console.log("O maior número é: " + numero2);
    }
}

function exercicio3() {
    
    const numero = prompt("Digite aqui um número inteiro positivo: ");

    if (numero === 0) {
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

exercicio3();






