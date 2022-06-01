import { useState } from "react";
import QuestionOptions from "./QuestionOptions";

function QuestionBuilder() {
  const [questions, setQuestions] = useState([]);

  return (
    <>
      <QuestionOptions setQuestions={setQuestions} />
    </>
  );
}

export default QuestionBuilder;
