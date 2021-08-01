const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (correctAnswers, wrongAnswers, action) => {
  let counter = 0;
  for (let i = 0; i < correctAnswers.length; i += 1) {
    const actionReturn = action(correctAnswers[i], studentAnswers[i]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} corretas`;
};
console.log(repeat(rightAnswers, studentAnswers, (correctAnswer, studentAnswer) => {
  if (correctAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
