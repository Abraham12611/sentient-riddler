// Quiz Logic Module

export const QuizModule = (() => {
  // Private state
  let state = {
    currentQuestionIndex: 0,
    questions: [],
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    difficulty: 'beginner',
    startTime: null,
    endTime: null,
    answeredQuestions: []
  };

  // Private methods
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function filterQuestionsByDifficulty(questions, difficulty) {
    return questions.filter(q => q.difficulty === difficulty);
  }

  // Public API
  return {
    init(questionsData, difficulty) {
      state.difficulty = difficulty;
      const filtered = filterQuestionsByDifficulty(questionsData.questions, difficulty);
      state.questions = shuffleArray(filtered).slice(0, 10); // Take 10 questions
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.currentStreak = 0;
      state.bestStreak = 0;
      state.startTime = Date.now();
      state.answeredQuestions = [];
    },

    getCurrentQuestion() {
      return state.questions[state.currentQuestionIndex];
    },

    getTotalQuestions() {
      return state.questions.length;
    },

    getCurrentQuestionNumber() {
      return state.currentQuestionIndex + 1;
    },

    getProgress() {
      return ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    },

    submitAnswer(selectedIndex, timeRemaining) {
      const question = this.getCurrentQuestion();
      const isCorrect = selectedIndex === question.correctAnswer;
      
      // Calculate points
      let points = 0;
      if (isCorrect) {
        points = question.points || 10;
        
        // Speed bonus (50% if answered in first 25% of time)
        const timePercentage = timeRemaining / question.timeLimit;
        if (timePercentage > 0.75) {
          points = Math.floor(points * 1.5);
        }
        
        // Streak bonus
        state.currentStreak++;
        if (state.currentStreak > state.bestStreak) {
          state.bestStreak = state.currentStreak;
        }
        const streakBonus = Math.min(state.currentStreak * 0.1, 0.5);
        points = Math.floor(points * (1 + streakBonus));
        
        state.correctAnswers++;
        state.score += points;
      } else {
        state.currentStreak = 0;
        state.incorrectAnswers++;
      }

      // Record answer
      state.answeredQuestions.push({
        questionId: question.id,
        selectedIndex,
        isCorrect,
        points,
        timeRemaining
      });

      return { isCorrect, points };
    },

    nextQuestion() {
      state.currentQuestionIndex++;
      return state.currentQuestionIndex < state.questions.length;
    },

    isQuizComplete() {
      return state.currentQuestionIndex >= state.questions.length;
    },

    getResults() {
      state.endTime = Date.now();
      const timeTaken = Math.floor((state.endTime - state.startTime) / 1000);
      
      return {
        score: state.score,
        maxScore: state.questions.reduce((sum, q) => sum + (q.points || 10), 0),
        correctAnswers: state.correctAnswers,
        incorrectAnswers: state.incorrectAnswers,
        totalQuestions: state.questions.length,
        bestStreak: state.bestStreak,
        timeTaken,
        difficulty: state.difficulty,
        percentage: Math.round((state.correctAnswers / state.questions.length) * 100)
      };
    },

    getScore() {
      return state.score;
    },

    reset() {
      state = {
        currentQuestionIndex: 0,
        questions: [],
        score: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        currentStreak: 0,
        bestStreak: 0,
        difficulty: 'beginner',
        startTime: null,
        endTime: null,
        answeredQuestions: []
      };
    }
  };
})();
