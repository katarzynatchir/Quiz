import Button from './Button';

const Question = ({ question, currentQuestion, handlerAnswer }) => {
  return (
    <div className="app-quiz">
      <h2>
        Pytanie {currentQuestion + 1}: {question.text}
      </h2>
      {question.answers.map((answer, index) => (
        <Button
          key={index}
          className="light"
          onClick={() => handlerAnswer(answer)}
        >
          {answer.text}
        </Button>
      ))}
    </div>
  );
};

export default Question;
