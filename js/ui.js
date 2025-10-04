// UI Management Module

export const UIModule = (() => {
  // DOM elements
  let elements = {};

  // Private methods
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
  }

  function announce(message) {
    const announcements = document.getElementById('announcements');
    announcements.textContent = message;
  }

  // Public API
  return {
    init() {
      // Cache DOM elements
      elements = {
        // Screens
        welcomeScreen: document.getElementById('welcome-screen'),
        quizScreen: document.getElementById('quiz-screen'),
        resultsScreen: document.getElementById('results-screen'),
        
        // Quiz elements
        questionText: document.getElementById('question-text'),
        questionCategory: document.getElementById('question-category'),
        optionsContainer: document.getElementById('options-container'),
        currentScore: document.getElementById('current-score'),
        timerValue: document.getElementById('timer-value'),
        timerDisplay: document.getElementById('timer'),
        progressBar: document.getElementById('progress-bar'),
        questionNumber: document.getElementById('question-number'),
        totalQuestions: document.getElementById('total-questions'),
        
        // Feedback
        feedbackContainer: document.getElementById('feedback-container'),
        feedbackIcon: document.getElementById('feedback-icon'),
        feedbackMessage: document.getElementById('feedback-message'),
        feedbackExplanation: document.getElementById('feedback-explanation'),
        nextQuestionBtn: document.getElementById('next-question-btn'),
        
        // Results
        finalScore: document.getElementById('final-score'),
        maxScore: document.getElementById('max-score'),
        correctCount: document.getElementById('correct-count'),
        incorrectCount: document.getElementById('incorrect-count'),
        streakCount: document.getElementById('streak-count'),
        timeTaken: document.getElementById('time-taken')
      };
    },

    showWelcomeScreen() {
      showScreen('welcome-screen');
    },

    showQuizScreen() {
      showScreen('quiz-screen');
      elements.feedbackContainer.classList.add('hidden');
    },

    showResultsScreen() {
      showScreen('results-screen');
    },

    renderQuestion(question, questionNumber, totalQuestions) {
      elements.questionText.textContent = question.question;
      elements.questionCategory.textContent = question.category;
      elements.questionNumber.textContent = questionNumber;
      elements.totalQuestions.textContent = totalQuestions;
      
      // Clear and render options
      elements.optionsContainer.innerHTML = '';
      question.options.forEach((option, index) => {
        const optionCard = document.createElement('button');
        optionCard.className = 'option-card';
        optionCard.textContent = option;
        optionCard.dataset.index = index;
        optionCard.setAttribute('role', 'button');
        optionCard.setAttribute('aria-label', `Option ${index + 1}: ${option}`);
        elements.optionsContainer.appendChild(optionCard);
      });

      announce(`Question ${questionNumber} of ${totalQuestions}: ${question.question}`);
    },

    updateScore(score) {
      elements.currentScore.textContent = score;
    },

    updateTimer(seconds) {
      elements.timerValue.textContent = seconds;
      
      // Update timer state
      elements.timerDisplay.classList.remove('warning', 'danger');
      if (seconds <= 5) {
        elements.timerDisplay.classList.add('danger');
      } else if (seconds <= 10) {
        elements.timerDisplay.classList.add('warning');
      }
    },

    updateProgress(percentage) {
      elements.progressBar.style.width = `${percentage}%`;
    },

    showFeedback(isCorrect, points, explanation) {
      elements.feedbackContainer.classList.remove('hidden');
      
      if (isCorrect) {
        elements.feedbackIcon.textContent = '🎉';
        elements.feedbackMessage.textContent = `Correct! +${points} points`;
        elements.feedbackMessage.className = 'feedback-message correct';
      } else {
        elements.feedbackIcon.textContent = '❌';
        elements.feedbackMessage.textContent = 'Incorrect';
        elements.feedbackMessage.className = 'feedback-message incorrect';
      }
      
      elements.feedbackExplanation.textContent = explanation;
      
      announce(isCorrect ? `Correct! You earned ${points} points` : 'Incorrect answer');
    },

    disableOptions() {
      document.querySelectorAll('.option-card').forEach(card => {
        card.classList.add('disabled');
        card.style.pointerEvents = 'none';
      });
    },

    highlightAnswer(selectedIndex, correctIndex) {
      const options = document.querySelectorAll('.option-card');
      options[correctIndex].classList.add('correct');
      if (selectedIndex !== correctIndex) {
        options[selectedIndex].classList.add('incorrect');
      }
    },

    showResults(results) {
      elements.finalScore.textContent = results.score;
      elements.maxScore.textContent = results.maxScore;
      elements.correctCount.textContent = results.correctAnswers;
      elements.incorrectCount.textContent = results.incorrectAnswers;
      elements.streakCount.textContent = results.bestStreak;
      elements.timeTaken.textContent = `${results.timeTaken}s`;
      
      announce(`Quiz complete! You scored ${results.score} out of ${results.maxScore} points`);
    },

    getElements() {
      return elements;
    }
  };
})();
