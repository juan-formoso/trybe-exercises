let numbers = []

for (index = 0; index <= 25; index += 1) {
    numbers.push(index);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] = numbers[index] / 2
}

console.log(numbers);
