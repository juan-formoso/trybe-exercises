const longestWord = text => text.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord("Bluebird é a melhor opening de Naruto Shippuden"))