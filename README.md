# Plinko Ball Drop Game

A web-based Plinko game built with HTML5 Canvas and JavaScript. Drop balls from the top and watch them bounce through pegs to land in scoring boxes at the bottom!

---

## 🚀 Features

- Interactive ball dropping mechanism
- Realistic ball physics with collision detection
- Scoring system with different point values
- Color-coded scoring boxes (Yellow: 100K, Silver: 10K, Grey: 5K, Blue: 1K, Green: 100)
- Pause/Resume functionality
- Real-time score display
- Responsive design with modern styling

---

## 🎮 How to Play

1. Click the **"Drop Ball"** button to release a ball from the top center
2. Watch the ball bounce off the pegs as it falls down
3. Earn points when the ball lands in a scoring box at the bottom
4. Use **"Pause"** to pause the game, click again to resume
5. Try to aim for the higher-scoring boxes on the edges!

---

## 🛠️ Tech Stack

- **HTML5** - Canvas element for game rendering
- **CSS3** - Modern styling and responsive design
- **JavaScript** - Game logic, physics, and animations

---

## 📁 Project Structure

```
.
├── index.html        # Main HTML file
├── style.css         # Game styling and layout
├── script.js         # Game logic and physics
└── README.md         # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start playing!

```bash
# If using a local server (optional)
# Open terminal in project directory and run:
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 🎯 Game Mechanics

### Scoring System
- **Yellow boxes**: 100,000 points (edges)
- **Silver boxes**: 10,000 points
- **Grey boxes**: 5,000 points  
- **Blue boxes**: 1,000 points
- **Green boxes**: 100 points (center)

### Physics
- Balls start from the center top
- Random direction changes when hitting pegs
- Collision detection between balls and pegs
- Box collision detection for scoring

### Controls
- **Drop Ball**: Release a new ball
- **Pause/Resume**: Pause or resume the game animation

---

## 🎨 Customization

### Modify Game Parameters
In `script.js`, you can adjust:
- `radius`: Size of the pegs
- `spacing`: Distance between pegs
- `numRows`: Number of peg rows
- `speedY`: Ball falling speed
- `boxScores`: Point values for boxes

### Styling
Modify `style.css` to change:
- Colors and themes
- Button styles
- Canvas border and background
- Game container appearance

---

## 🔧 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

---

## 🎮 Game Features Details

### Animation System
- Uses `requestAnimationFrame` for smooth 60fps animation
- Efficient canvas clearing and redrawing
- Collision detection optimized for performance

### Physics Engine
- Simple gravity simulation
- Collision detection using distance calculation
- Random bounce directions for unpredictability

### Visual Design
- Modern UI with rounded corners and shadows
- Color-coded scoring system for easy recognition
- Responsive layout that centers on screen

---

## 🚧 Future Enhancements

- [ ] Multiple ball drops
- [ ] Sound effects
- [ ] High score saving
- [ ] Different difficulty levels
- [ ] Ball trail effects
- [ ] Mobile touch controls
- [ ] Multiplayer support

---

## 🐛 Known Issues

- Score display may overlap with canvas on very small screens
- Ball physics are simplified (no rotation or advanced bouncing)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## 🎉 Enjoy the Game!

Have fun playing Plinko and try to achieve the highest score possible!
