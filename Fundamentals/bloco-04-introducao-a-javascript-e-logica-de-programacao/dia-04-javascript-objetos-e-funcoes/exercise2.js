// Tarefa 1
function checkPalindrome(word){
    for (index in word){
      if (word[index] != word[(word.length - 1) - index]) {
        return false;
      }
    }
    return true;
  }
  function checkPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
console.log(checkPalindrome('arara')); 
console.log(checkPalindrome('desenvolvimento')); 

// Tarefa 2
function indiceDoMaior(numbers) {
    let indiceMaior = 0;
    for (let index in numbers) {
      if (numbers[indiceMaior] < numbers[index]) {
        indiceMaior = index;
      }
    }
    return indiceMaior;
  }
  
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// Tarefa 3
function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// Tarefa 4
function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }
  
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 

// Tarefa 5
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  
  function maisRepetido(numeros) {
    let num = {};
  
    for (let index = 0; index < numeros.length; index += 1) {
      let valor = numeros[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); 

// Tarefa 6
function somaTodosNumeros(numeros) {
    let total = 0;
    for (let index = 1; index <= numeros; index += 1) {
      total = total + index;
    }
    return total;
  }
console.log(somaTodosNumeros(5));

// Tarefa 7

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    } return controle;
}
