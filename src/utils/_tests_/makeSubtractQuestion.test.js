const makeSubtractQuestion = require("../makeSubtractQuestion.js");

describe("makeSubtractQuestion", () => {
  test("returns an object", () => {
    const result = makeSubtractQuestion();

    expect(typeof result).toBe("object");
    expect(Array.isArray(result)).toBe(false);
  });
  test("returned object has questionString with string value", () => {
    const { questionString } = makeSubtractQuestion();

    expect(typeof questionString).toBe("string");
  });
  test("answerString is of correct format", () => {
    for (let i = 0; i < 100; i++) {
      const { questionString } = makeSubtractQuestion();
      const regex = /^[0-9]{1,3} - [0-9]{1,3} =$/;
      const isCorrectFormat = regex.test(questionString);

      expect(isCorrectFormat).toBe(true);
    }
  });
  test("returned object has answer property with number value", () => {
    const { answer } = makeSubtractQuestion();

    expect(typeof answer).toBe("number");
  });
  test("answer solves the questionString", () => {
    const { questionString, answer } = makeSubtractQuestion();
    const regex = /[0-9]{1,2}/g;
    const [firstNum, secondNum] = questionString.match(regex);

    const expectedAnswer = parseInt(firstNum) - parseInt(secondNum);

    expect(answer).toEqual(expectedAnswer);
  });
});
