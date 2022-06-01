function makeSubtractQuestion() {
  const firstNum = Math.ceil(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * (firstNum + 1));

  const questionString = `${firstNum} - ${secondNum} =`;
  const answer = firstNum - secondNum;
  return { questionString, answer };
}

module.exports = makeSubtractQuestion;
