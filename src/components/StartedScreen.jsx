import Button from './Button';

const StartedScreen = ({ handleStartQuiz }) => {
  return (
    <div className="app-quiz">
      <h1>Javascript Quiz</h1>
      <Button className="primary" onClick={handleStartQuiz}>
        Rozpocznij Quiz
      </Button>
    </div>
  );
};

export default StartedScreen;
