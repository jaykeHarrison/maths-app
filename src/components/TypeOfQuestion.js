function TypeOfQuestion({ setQuestionsToAdd }) {
  function updateQuestionType(event) {
    setQuestionsToAdd((currentQuestion) => {
      currentQuestion.TypeOfQuestion = event.target.value;
    });
  }
  return (
    <>
      <label hmtlfor="question-types">Choose question type</label>
      <select
        name="question-types"
        id="question-types"
        onChange={(event) => {
          updateQuestionType(event);
        }}
      >
        <option value="addition">Addition</option>
        <option value="subtraction">Subtraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>
    </>
  );
}

export default TypeOfQuestion;
