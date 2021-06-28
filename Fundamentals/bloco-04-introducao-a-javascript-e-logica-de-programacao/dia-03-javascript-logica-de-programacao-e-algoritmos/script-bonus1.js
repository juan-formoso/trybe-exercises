let number = 7;
let mid = (number + 1) / 2;
let left = mid;
let right = mid;
let symbol = "*";

for (let line = 1; line <= mid; line += 1) {
    let output = "";
    for (let col = 1; col <= number; col += 1) {
        if (col == left || col == right || line == mid) {
            output += symbol;
        } else {
            output += " ";
        }
    }
    left -= 1;
    right += 1;
    console.log(output);
}