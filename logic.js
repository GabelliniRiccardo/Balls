let count = 0;
let lastBallColor = null;
let balls = [];

let canvas = document.getElementsByTagName("canvas")[0];

function setCanvasSize() {
    canvas.width = window.innerWidth - (window.innerWidth > 500 ? 100 : 10);
    canvas.height = window.innerHeight - 200
}

// Set the initial size of the canvas
setCanvasSize();

// Update the size of the canvas when the window is resized
window.addEventListener("resize", setCanvasSize);

function Ball(x, y, color, dimension, speed_x, speed_y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.dimension = dimension;
    this.dx = speed_x;
    this.dy = speed_y;
}

function drawBall(ball) {
    canvas = document.getElementsByTagName("canvas")[0];
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.dimension, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    requestAnimationFrame(draw);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {
        drawBall(ball);
        ball.x += ball.dx;
        ball.y += ball.dy;
        if (ball.y > canvas.height - (ball.dimension) || ball.y < (ball.dimension)) {
            ball.dy = ball.dy * (-1);
            count++;
            lastBallColor = ball.color;
        }

        if (ball.x < (ball.dimension) || ball.x > (canvas.width - ball.dimension)) {
            ball.dx = ball.dx * (-1);
            count++;
            lastBallColor = ball.color;
        }

        if (ball.x + ball.dimension > canvas.width) {
            ball.x = canvas.width - ball.dimension
        }
    });

    const numOfCollisionDetectedElement = document.getElementById("numOfCollision");
    numOfCollisionDetectedElement.textContent = `Number of collision detected: ${count}`
    numOfCollisionDetectedElement.style.color = lastBallColor;
    canvas.style.borderColor = lastBallColor;
}

function addANewBall() {
    canvas = document.getElementsByTagName("canvas")[0];
    const color = '#' + ((1 << 24) * Math.random() | 0).toString(16);
    const dimension = Math.random() * 100;
    const speed_x = Math.round(Math.random() * 4);
    const speed_y = Math.round(Math.random() * 4);
    balls.push(new Ball(canvas.width / 2, canvas.height / 2, color, dimension, speed_x, speed_y));
    document.getElementById("ballNumberText").textContent = `There are ${balls.length} balls`
}

draw();
