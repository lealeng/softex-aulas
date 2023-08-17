const prompt = require("prompt-sync")();

/* 1. Crie um array de números e ordene-o em ordem crescente. */
function exercicio1() {
  let numeros = [100, 250, 35, 1, 3, 8, 14, 25];
  function ordenarCrescente(a, b) {
    return a - b;
  }
  numeros.sort(ordenarCrescente);
  console.log(numeros);
}

/* 2. Encontre o maior valor em um array de números. */
function exercicio2() {
  let numeros = [100, 250, 35, 1, 3, 8, 14, 25];
  console.log(`O maior número do array é: ${Math.max.apply(null, numeros)}`);
}

/* 3. Crie um array de nomes e ordene-o em ordem alfabética. */
function exercicio3() {
  const nomes = [`Daniel`, `Gabriel`, `Alcides`, `Will`, `Zeza`];
  nomes.sort();
  console.log(nomes);
}

/* 4. Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados. */
function exercicio4() {
  const listaMeninos = [`Daniel`, `Gabriel`, `Alcides`, `Will`];
  const listaMeninas = [`Daniela`, `Gabriela`, `Amanda`, `Eduarda`];
  let listaPessoas = listaMeninos.concat(listaMeninas);
  listaPessoas.sort();
  console.log(listaPessoas);
}

/* 5.Crie um programa que encontre o valor mais frequente em um array de números. */
function exercicio5() {
  let numeros = [
    100, 250, 35, 1, 3, 8, 14, 25, 100, 25, 25, 25, 40, 100, 101, 25, 36,
  ];

  let maior = null;
  let occMaior = -1;

  for (let i = 0; i < numeros.length; i++) {
    let occ = 1;

    for (let t = i + 1; t < numeros.length; t++) {
      if (numeros[i] == numeros[t]) occ++;

      if (occ > occMaior) {
        maior = numeros[i];
        occMaior = occ;
      }
    }
  }
  console.log(
    `O número mais vezes repetido é: ${maior} na quantidade de vezes: ${occMaior}`
  );

  /*   var entrada = [1, 2, 3, 4, 5, 2, 2, 3];

  var maior = null;
  var ocorrenciasMaior = -1;

  for (var i = 0; i < entrada.length; i++) {
    var ocorrencias = 1;
    for (var t = i + 1; t < entrada.length; t++)
      if (entrada[i] == entrada[t]) ocorrencias++;

    if (ocorrencias > ocorrenciasMaior) {
      maior = entrada[i];
      ocorrenciasMaior = ocorrencias;
    }
  }
  console.log(`${maior} ${ocorrenciasMaior} `); */
}

exercicio5();
