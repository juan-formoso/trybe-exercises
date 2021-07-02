// Desafio 1
function romanToDecimal(numbers) {
    let roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let arrayOfNumbers = [];
    let result = 0;

    for (let index in numbers) {
        arrayOfNumbers[index] = roman[numbers[index]];
    }
    for (let index in arrayOfNumbers) {
        if (arrayOfNumbers[index] < arrayOfNumbers[index + 1]) {
            arrayOfNumbers[index + 1] = arrayOfNumbers[index + 1] - arrayOfNumbers[index];
        } else {
            result += arrayOfNumbers[index]
        }
    } return result;
}
console.log(romanToDecimal('MMXVIII'));

// Desafio 2
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let result = [];
    for (let index = 0; index < vector.length; index += 1) {
        let numbers = vector[index];
        for (let index2 = 0; index2 < numbers.length; index2 += 1) {
            let currentNumber = numbers[index2];
            if ((currentNumber % 2) === 0) {
                result.push(currentNumber);
            }
        }
    } return result;
}
console.log(arrayOfNumbers(vector));

// Desafio 3

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

let result = {};

for (let index = 0; index < basket.length; index += 1) {
    let item = basket[index];
    if (!result[item]) result[item] = 0;
    result[item] += 1;
}

let amountOfItens = [];
for (item in result) {
    let print = `${result[item]} ${item}`;
    if (result[item] > 1) print += 's';
    amountOfItens.push[print];
}
console.log(`Sua cesta possui: ${amountOfItens.join(', ')}.`);