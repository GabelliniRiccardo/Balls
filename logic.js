var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvas_width = 1000;
var canvas_height = 700;
var count = 0;


function Ball(x, y, color, dimension, speed_x, speed_y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.dimension = dimension;
    this.dx = speed_x;
    this.dy = speed_y;
}


var balls = [new Ball(250, 200, "#1edd34", 100, 1, 3), new Ball(220, 110, "#dd1d1d", 30, 2, 4), new Ball(420, 380, "#5568dd", 40, 3, 3), new Ball(270, 300, "#c805dd", 45, 4, 5)];


function drawBall(ball) {

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.dimension, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();

}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    for (i = 0; i < balls.length; i++) {
        drawBall(balls[i]);


        balls[i].x += balls[i].dx;
        balls[i].y += balls[i].dy;

        if (balls[i].y > canvas_height - (balls[i].dimension)) {
            balls[i].dy = balls[i].dy * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            executeTimerAndChangeColor(balls[i].color);

        } else if (balls[i].y < (balls[i].dimension)) {
            balls[i].dy = balls[i].dy * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            executeTimerAndChangeColor(balls[i].color);
        }


        if (balls[i].x < (balls[i].dimension)) {
            balls[i].dx = balls[i].dx * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            executeTimerAndChangeColor(balls[i].color);

        } else if (balls[i].x > (canvas_width - balls[i].dimension)) {
            balls[i].dx = balls[i].dx * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            executeTimerAndChangeColor(balls[i].color);
        }


    }
}

function executeTimerAndChangeColor(colorOfTheBall) {

    setTimeout(function () { document.getElementById("numOfCollision").style.color = colorOfTheBall;
                                canvas.style.borderColor=colorOfTheBall;});

}

setInterval(draw, 10);