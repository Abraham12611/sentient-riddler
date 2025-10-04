// Main Application Entry Point

import { questionsData } from './questions.js';
import { QuizModule } from './quiz.js';
import { UIModule } from './ui.js';
import { TimerModule } from './timer.js';

// Application state
let selectedDifficulty = 'beginner';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  UIModule.init();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Difficulty selection
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const difficulty = e.currentTarget.dataset.difficulty;
      startQuiz(difficulty);
    });
  });

  // Options selection (event delegation)
  document.getElementById('options-container').addEventListener('click', (e) => {
    const optionCard = e.target.closest('.option-card');
    if (optionCard && !optionCard.classList.contains('disabled')) {
      handleAnswerSelection(parseInt(optionCard.dataset.index));
    }
  });

  // Next question button
  document.getElementById('next-question-btn').addEventListener('click', () => {
    loadNextQuestion();
  });

  // Play again button
  document.getElementById('play-again-btn').addEventListener('click', () => {
    QuizModule.reset();
    UIModule.showWelcomeScreen();
  });

  // Share button
  document.getElementById('share-btn').addEventListener('click', () => {
    shareResults();
  });
}

// Start Quiz
function startQuiz(difficulty) {
  selectedDifficulty = difficulty;
  QuizModule.init(questionsData, difficulty);
  UIModule.showQuizScreen();
  loadQuestion();
}

// Load Question
function loadQuestion() {
  const question = QuizModule.getCurrentQuestion();
  const questionNumber = QuizModule.getCurrentQuestionNumber();
  const totalQuestions = QuizModule.getTotalQuestions();
  
  // Update UI
  UIModule.renderQuestion(question, questionNumber, totalQuestions);
  UIModule.updateScore(QuizModule.getScore());
  UIModule.updateProgress(QuizModule.getProgress());
  
  // Start timer
  const timeLimit = question.timeLimit || 30;
  TimerModule.reset(timeLimit);
  
  TimerModule.onTick((time) => {
    UIModule.updateTimer(time);
  });
  
  TimerModule.onExpire(() => {
    handleTimeout();
  });
  
  TimerModule.start();
}

// Handle Answer Selection
function handleAnswerSelection(selectedIndex) {
  TimerModule.stop();
  
  const question = QuizModule.getCurrentQuestion();
  const timeRemaining = TimerModule.getTimeRemaining();
  const result = QuizModule.submitAnswer(selectedIndex, timeRemaining);
  
  // Update UI
  UIModule.disableOptions();
  UIModule.highlightAnswer(selectedIndex, question.correctAnswer);
  UIModule.showFeedback(result.isCorrect, result.points, question.explanation);
  UIModule.updateScore(QuizModule.getScore());
  
  // Add animation
  const selectedOption = document.querySelector(`[data-index="${selectedIndex}"]`);
  if (result.isCorrect) {
    selectedOption.classList.add('animate-correct');
  } else {
    selectedOption.classList.add('animate-incorrect');
  }
}

// Handle Timeout
function handleTimeout() {
  const question = QuizModule.getCurrentQuestion();
  const result = QuizModule.submitAnswer(-1, 0); // -1 indicates timeout
  
  UIModule.disableOptions();
  UIModule.highlightAnswer(-1, question.correctAnswer);
  UIModule.showFeedback(false, 0, `Time's up! ${question.explanation}`);
}

// Load Next Question
function loadNextQuestion() {
  const hasMore = QuizModule.nextQuestion();
  
  if (hasMore) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Show Results
function showResults() {
  const results = QuizModule.getResults();
  UIModule.showResults(results);
  UIModule.showResultsScreen();
}

// Share Results
function shareResults() {
  const results = QuizModule.getResults();
  const text = `I scored ${results.score}/${results.maxScore} on Sentient Riddler! 🧠\n\nTest your knowledge about Sentient AGI: ${window.location.href}`;
  
  // Try native share API first
  if (navigator.share) {
    navigator.share({
      title: 'Sentient Riddler Results',
      text: text
    }).catch(err => console.log('Share cancelled'));
  } else {
    // Fallback to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert('Results copied to clipboard!');
    }).catch(() => {
      alert('Unable to copy results');
    });
  }
}
