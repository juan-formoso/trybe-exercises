const getLargestNumber = (array) => {
    let largestNumber;
      for (let index = 0; index < array.length - 1; index += 1) {
        if (array[index] > array[index + 1]) {
          largestNumber = [array[index]];
        }
      }
    return largestNumber;
  }
  
  const parameter = [45, 8, 2, 50, 1, 7, 99];
  const result = 99;
  
  const assert = require('assert');
  
  const getLargestNumber = (array) => {
    let largestNumber = array.slice().sort((a, b) => b - a);
    console.log(parameter);
    return largestNumber[0];
  }
  
  const parameter = [45, 8, 2, 50, 99, 1, 7];
  const result = 99;
  
  const output = getLargestNumber(parameter);
  const unchangedArray = [45, 8, 2, 50, 99, 1, 7];
  
  assert.strictEqual(output, result);
  assert.deepStrictEqual(parameter, unchangedArray);