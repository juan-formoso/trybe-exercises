let number = 5;
let symbol = "*";
let input = "";
let inputPosition = number;

for (let index = 0; index < number; index += 1) {
    for (let columnIndex = 0; columnIndex <= number; columnIndex += 1) {
        if (columnIndex < inputPosition) {
            input = input + " ";
        }   else {
            input = input + symbol;
        }
    }
    console.log(input);
    input = "";
    inputPosition -= 1;
}