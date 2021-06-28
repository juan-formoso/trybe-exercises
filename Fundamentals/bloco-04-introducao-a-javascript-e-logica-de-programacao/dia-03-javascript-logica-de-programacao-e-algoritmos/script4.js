let number = 5;
let symbol = "*";
let input = "";
let mid = (number + 1) / 2;
let left = mid;
let right = mid;

for (let index = 0; index <=  mid; index += 1) {
    for (let columnIndex = 0; columnIndex <= number; columnIndex += 1) {
        if (columnIndex > left && columnIndex < right) {
            input = input + symbol;
        } else {
            input = input + " ";
        }
    }
    console.log(input);
    input = "";
    right += 1;
    left -= 1;
}
