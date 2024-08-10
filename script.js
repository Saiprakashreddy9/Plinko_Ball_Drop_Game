const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const radius = 5;
const spacing = 40;
const numRows = 12;
const topSpace = 50;

let balls = [];
let boxes = [];
let fallingBalls = [];
let animationFrameId;
let isPaused = false;
let score = 0; 


function getColorByScore(score) {
    if (score == 100000) {
        return 'yellow';
    } else if (score == 10000) {
        return 'silver';
    } else if (score == 5000) {
        return 'grey';
    } else if (score == 1000) {
        return 'blue';
    } else {
        return 'green';
    }
}

function drawRectangle(x, y, side, color, boxScore) {
    ctx.fillStyle = color;
    ctx.fillRect(x - side / 2, y - side, side, side);
    ctx.fillStyle = 'red';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(boxScore, x -20, y - side + 25); 
}

function drawBalls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const horizontalSpacing = radius * 2 + spacing;
    const verticalSpacing = radius * 2 + spacing;
    const boxSide = spacing;

    const boxScores = [100000, 10000, 5000, 1000, 100, 100, 1000, 5000, 10000, 100000];
    let boxId = 1;

    for (let row = 0; row < numRows; row++) {
        if (row === 0) continue;

        for (let col = 0; col <= row; col++) {
            const x = (canvas.width / 2) + (col - row / 2) * horizontalSpacing;
            const y = topSpace + row * verticalSpacing + radius;

            if (row === numRows - 1) {
                if (col == 0 || col == row) continue;
                const boxScore = boxScores[boxId - 1];
                const color = getColorByScore(boxScore); 
                drawRectangle(x, y, boxSide, color, boxScore);
                boxes.push({ x, y, side: boxSide, id: boxId, score: boxScore });
                boxId++;
            } else {
                balls.push({ x, y, r: radius });
                drawCircle(x, y, radius, 'black');
            }
        }
    }
}

function drawCircle(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}

function releaseBall() {
    const fallingBall = {
        x: canvas.width / 2,
        y: topSpace,
        r: radius * 3,
        speedY: 2,
        speedX: 0,
    };

    fallingBalls.push(fallingBall);
    if (!animationFrameId) {
        animateBall();
    }
}

function randDirection() {
    return Math.random() > 0.5 ? 1 : -1;
}

function animateBall() {
    if (isPaused) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBalls();

    for (let i = fallingBalls.length - 1; i >= 0; i--) {
        const fallingBall = fallingBalls[i];
        fallingBall.y += fallingBall.speedY;

        balls.forEach(ball => {
            if (collision(ball, fallingBall)) {
                fallingBall.x += randDirection() * (radius + (spacing / 2));
            }
        });

        let hasCollidedWithBox = false;

        for (let j = 0; j < boxes.length; j++) {
            const box = boxes[j];
            if (
                fallingBall.y + fallingBall.r > box.y &&
                fallingBall.y < box.y + box.side &&
                fallingBall.x > box.x - box.side / 2 &&
                fallingBall.x < box.x + box.side / 2
            ) {
                score += box.score; 
                fallingBalls.splice(i, 1); 
                hasCollidedWithBox = true;
                break;
            }
        }

        if (!hasCollidedWithBox) {
            drawCircle(fallingBall.x, fallingBall.y, fallingBall.r, 'red');
        }
    }

    drawScore(); 

    if (fallingBalls.length > 0) {
        animationFrameId = requestAnimationFrame(animateBall);
    } else {
        animationFrameId = null;
    }
}

function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.clearRect(0, 0, 150, 50); 
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function collision(a, b) {
    const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    return dist <= (a.r + b.r);
}

document.getElementById('drop').addEventListener('click', releaseBall);
const pause = document.getElementById('pause');
pause.addEventListener('click', () => {
    isPaused = !isPaused;
    pause.innerText = isPaused ? 'Resume' : 'Pause';
    if (isPaused) {
        cancelAnimationFrame(animationFrameId);
    } else {
        animateBall();
    }
});

drawBalls();
