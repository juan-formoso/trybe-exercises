const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArray = sortArray(oddsAndEvens);
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);