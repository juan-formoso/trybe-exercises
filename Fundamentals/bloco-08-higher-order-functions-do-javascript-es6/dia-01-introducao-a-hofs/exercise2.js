const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? `You win!` : `You lose!`;
};
console.log(lotteryResult(2, numberChecker));
