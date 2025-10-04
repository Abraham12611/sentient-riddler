# 🧠 Sentient Riddler

An interactive quiz game to test your knowledge about **Sentient AGI** - the world's first open, community-built Artificial General Intelligence platform.

![Sentient Riddler](https://img.shields.io/badge/Status-Live-success)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 About

**Sentient Riddler** is an educational quiz game that helps you learn about:
- **OML Framework** (Open, Monetizable, and Loyal AI)
- **ROMA** (Recursive Open Meta Agent)
- **Grid** distributed computing platform
- **OpenDeepSearch** and other Sentient technologies
- The team, research, and ecosystem behind Sentient

## ✨ Features

- 🎮 **4 Difficulty Levels** - Beginner to Expert
- ⏱️ **Timed Challenges** - Race against the clock
- 📊 **Score Tracking** - Points, streaks, and bonuses
- 🎨 **Beautiful UI** - Modern pink theme design
- 📱 **Fully Responsive** - Works on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🚀 **Zero Dependencies** - Pure vanilla JavaScript

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser. That's it!

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
cd sentient-riddler
python -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
cd sentient-riddler
npx live-server
```

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
sentient-riddler/
├── index.html              # Main HTML file
├── css/
│   ├── reset.css          # CSS reset
│   ├── variables.css      # Design tokens (colors, spacing)
│   ├── layout.css         # Layout and responsive design
│   ├── components.css     # Component styles
│   └── animations.css     # Animations and transitions
├── js/
│   ├── main.js           # App initialization
│   ├── quiz.js           # Quiz logic
│   ├── ui.js             # UI management
│   ├── timer.js          # Timer functionality
│   └── questions.js      # Question database
└── README.md             # This file
```

## 🎮 How to Play

1. **Choose Your Difficulty**
   - 🌱 Beginner - New to Sentient
   - ⚡ Intermediate - Know the basics
   - 🚀 Advanced - Technical knowledge
   - 🎓 Expert - Deep expertise

2. **Answer Questions**
   - Read each question carefully
   - Select your answer before time runs out
   - Earn points for correct answers
   - Get bonus points for speed and streaks

3. **View Results**
   - See your final score
   - Check your statistics
   - Share your results
   - Play again to improve!

## 🎨 Color Theme

The design uses a soft pink color palette:
- **Primary Pink**: `#FF69B4` - Buttons and accents
- **Light Pink**: `#FFE4F0` - Cards and backgrounds
- **Soft Pink**: `#FFD4E5` - Tiles and elements
- **White**: `#FFFFFF` - Clean containers
- **Dark Gray**: `#2D3748` - Text

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript (ES6+)** - No frameworks
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions

## 📊 Scoring System

### Base Points
- Beginner: 10 points
- Intermediate: 20 points
- Advanced: 30 points
- Expert: 50 points

### Bonuses
- **Speed Bonus**: +50% if answered in first 25% of time
- **Streak Bonus**: +10% per consecutive correct answer (max 50%)

## 🌟 Features in Detail

### Accessibility
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA labels
- ✅ Focus indicators
- ✅ Reduced motion support

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop layouts
- ✅ Touch-friendly buttons

### Performance
- ✅ No dependencies
- ✅ Fast load times
- ✅ Smooth animations
- ✅ Optimized assets

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Adding Questions
1. Edit `js/questions.js`
2. Follow the existing format:
```javascript
{
  id: "q011",
  category: "Category Name",
  difficulty: "beginner|intermediate|advanced|expert",
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0, // Index of correct option
  explanation: "Explanation of the answer",
  points: 10,
  timeLimit: 30
}
```
3. Verify facts with official Sentient sources
4. Test the question in the game

### Improving Design
- Enhance CSS styles
- Add new animations
- Improve responsive layouts
- Optimize performance

### Fixing Bugs
- Report issues
- Submit pull requests
- Test on different browsers
- Improve accessibility

## 📚 Learn More About Sentient

- **Website**: https://www.sentient.xyz/
- **Foundation**: https://sentient.foundation/
- **Documentation**: https://docs.sentient.xyz/
- **Blog**: https://blog.sentient.xyz/
- **GitHub**: https://github.com/sentient-agi/
- **Chat**: https://chat.sentient.xyz/

## 📝 License

This project is open source under the MIT License.

## 🙏 Acknowledgments

- **Sentient Foundation** for building open AGI
- **Sentient Community** for inspiration and support
- All contributors who help improve this project

## 🎯 Roadmap

### Version 1.1 (Planned)
- [ ] More questions (50+ total)
- [ ] Category filtering
- [ ] Sound effects
- [ ] Dark mode toggle

### Version 1.2 (Future)
- [ ] Leaderboard
- [ ] User accounts
- [ ] Multiplayer mode
- [ ] More languages

## 📞 Support

- **Issues**: Report bugs or request features
- **Questions**: Ask in discussions
- **Community**: Join the Sentient community

---

**Built with ❤️ for the Sentient community**

Test your knowledge and learn about the future of open AGI! 🚀
