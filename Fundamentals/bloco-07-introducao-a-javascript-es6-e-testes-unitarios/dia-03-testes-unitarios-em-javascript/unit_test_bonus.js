function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable; 

  if (paid < payable) throw new Error('paid value is not enough');

  for (let index = 0; index < length; index += 1) { 
    const coin = coins[index];
    const timesCoinFits = Math.floor(remaining / coin); 

    if (timesCoinFits >= 1) { 
      for (let j = 0; j < timesCoinFits; j += 1) { 
        change.push(coin);
        remaining -= coin; 
      }
    }
  }
  return change;
}

let result = getChange(1, 1); 
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); 
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); 
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); 
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

