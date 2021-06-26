let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isOdd = 0

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        isOdd += 1;
    }
}

if (isOdd === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(isOdd);
}