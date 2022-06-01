function makeAdditionQuestion() {
  const firstNumber = Math.ceil(Math.random() * 99);
  const secondNumber = Math.ceil(Math.random() * 99);

  const answerString = `${firstNumber} + ${secondNumber} =`;
  const answer = firstNumber + secondNumber;

  return { answerString, answer };
}

module.exports = makeAdditionQuestion;
