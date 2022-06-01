function makeMultiplyQuestion() {
  const firstNum = Math.ceil(Math.random() * 10);
  const secondNum = Math.floor(Math.random() * 11);

  const questionString = `${firstNum} x ${secondNum} =`;
  const answer = firstNum * secondNum;
  return { questionString, answer };
}

module.exports = makeMultiplyQuestion;
