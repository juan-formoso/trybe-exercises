const longestWord = text => {
  let wordArray = text.split(" ");
  let maxLength = 0;
  let result = "";
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}
console.log(longestWord("O rato roeu a roupa do rei de Roma"));