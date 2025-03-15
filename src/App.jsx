import { useState } from 'react';
import { QUESTIONS } from './mocks/quizQuestions';
import StartedScreen from './components/StartedScreen';
import SummaryScreen from './components/SummaryScreen';
import Question from './components/Question';

function App() {
  const [startedScreen, setStartedScreen] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = selectedAnswer => {
    setAnswers([
      ...answers,
      {
        question: QUESTIONS[currentQuestion].text,
        selectedAnswer: selectedAnswer.text,
        isCorrect: selectedAnswer.isCorrect,
      },
    ]);
    setCurrentQuestion(prev => prev + 1);
  };

  return (
    <div className="container">
      {startedScreen && (
        <StartedScreen
          handleStartQuiz={() => {
            setStartedScreen(prev => !prev);
          }}
        />
      )}

      {!startedScreen &&
        (currentQuestion < QUESTIONS.length ? (
          <Question
            question={QUESTIONS[currentQuestion]}
            currentQuestion={currentQuestion}
            handlerAnswer={handleAnswer}
          />
        ) : (
          <SummaryScreen
            allQuestions={QUESTIONS}
            answers={answers}
            handleRestart={() => {
              setStartedScreen(true);
              setCurrentQuestion(0);
              setAnswers([]);
            }}
          />
        ))}
    </div>
  );
}

export default App;
