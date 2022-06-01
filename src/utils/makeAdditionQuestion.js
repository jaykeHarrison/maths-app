function makeAdditionQuestion() {
  const firstNumber = Math.ceil(Math.random() * 99);
  const secondNumber = Math.ceil(Math.random() * 99);

  const questionString = `${firstNumber} + ${secondNumber} =`;
  const answer = firstNumber + secondNumber;

  return { questionString, answer };
}

module.exports = makeAdditionQuestion;
