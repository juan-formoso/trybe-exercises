let number = 1;
let numberToCheck = 36;

for (let number = 2; number <= numberToCheck; number += 1) {
    if (numberToCheck % number === 0) number += 1;
}

if (number === 2) {
    console.log(numberToCheck + " é primo")
} else {
    console.log(numberToCheck + " não é primo.");
}
