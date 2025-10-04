// Timer Module

export const TimerModule = (() => {
  // Private state
  let timeRemaining = 30;
  let timerInterval = null;
  let onTickCallback = null;
  let onExpireCallback = null;

  // Public API
  return {
    init(duration) {
      timeRemaining = duration;
      this.stop();
    },

    start() {
      this.stop(); // Clear any existing timer
      
      timerInterval = setInterval(() => {
        timeRemaining--;
        
        if (onTickCallback) {
          onTickCallback(timeRemaining);
        }
        
        if (timeRemaining <= 0) {
          this.stop();
          if (onExpireCallback) {
            onExpireCallback();
          }
        }
      }, 1000);
    },

    stop() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    },

    pause() {
      this.stop();
    },

    resume() {
      this.start();
    },

    reset(duration) {
      this.stop();
      timeRemaining = duration;
      if (onTickCallback) {
        onTickCallback(timeRemaining);
      }
    },

    getTimeRemaining() {
      return timeRemaining;
    },

    onTick(callback) {
      onTickCallback = callback;
    },

    onExpire(callback) {
      onExpireCallback = callback;
    }
  };
})();
