const prompt = require("prompt-sync")();

/* 1. Conte quantas vogais há em uma string */
function exercicio1() {
  //FALTA
}

/* 2. Converta uma string para maiúsculas. */
function exercicio2() {
  const str = "daniel";
  console.log(str.toUpperCase());
}

/* 3. Remova os espaços em branco de uma string. */
function exercicio3() {
  const str = "      Daniel         ";
  const strSemEspaco = str.trim();
  console.log(strSemEspaco);
}

/* 4. Conte quantas ocorrências de uma determinada letra existem em uma string. */
function exercicio4() {
  let contador = 0;
  let letra = "a";
  let palavra = "Lampada";

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
      contador++;
    }
  }
  console.log(`A quantidade de letras "${letra}" na palavra é: ${contador}`);
}
exercicio4();
