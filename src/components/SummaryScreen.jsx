import Button from './Button';

const SummaryScreen = ({ allQuestions, answers, handleRestart }) => {
  const correctAnswers = answers.filter(ans => ans.isCorrect === true).length;
  const scorePercentage = (correctAnswers / allQuestions.length) * 100;
  const passed = scorePercentage >= 80;
  return (
    <div className="app-quiz">
      <h1 className={passed ? 'text-green' : 'text-red'}>
        {passed
          ? 'Gratulacje! Quiz zaliczony🥇'
          : 'Niestety, quiz niezaliczony😔'}
      </h1>
      <h2>
        Twój wynik to:{' '}
        <span className={passed ? 'text-green' : 'text-red'}>
          {scorePercentage}%{' '}
        </span>
        ({correctAnswers} z {allQuestions.length} poprawnych odpowiedzi)
      </h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <h3>{answer.question}</h3>
            <p>
              Twoja odpowiedź:{' '}
              <span className={answer.isCorrect ? 'text-green' : 'text-red'}>
                {answer.selectedAnswer}
              </span>
            </p>
          </li>
        ))}
      </ul>
      <Button className="secondary" onClick={handleRestart}>
        Powrót do startu
      </Button>
    </div>
  );
};

export default SummaryScreen;
