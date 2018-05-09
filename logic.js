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


var balls = [];


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

        document.getElementById("subtitle").innerText = "There are " + balls.length + " balls ";

        if (balls[i].y > canvas_height - (balls[i].dimension)) {
            balls[i].dy = balls[i].dy * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            changeColorOfTheNumberOfCollisionAndRectangleOfCanvas(balls[i].color);

        } else if (balls[i].y < (balls[i].dimension)) {
            balls[i].dy = balls[i].dy * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            changeColorOfTheNumberOfCollisionAndRectangleOfCanvas(balls[i].color);
        }


        if (balls[i].x < (balls[i].dimension)) {
            balls[i].dx = balls[i].dx * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            changeColorOfTheNumberOfCollisionAndRectangleOfCanvas(balls[i].color);

        } else if (balls[i].x > (canvas_width - balls[i].dimension)) {
            balls[i].dx = balls[i].dx * (-1);
            count = count + 1;
            document.getElementById("numOfCollision").innerText = "Number of collision detected: " + count;

            changeColorOfTheNumberOfCollisionAndRectangleOfCanvas(balls[i].color);
        }


    }
}

function changeColorOfTheNumberOfCollisionAndRectangleOfCanvas(colorOfTheBall) {

    document.getElementById("numOfCollision").style.color = colorOfTheBall;
    canvas.style.borderColor = colorOfTheBall;

}

function addANewBall(x, y, color, dimension, speed_x, speed_y) {
    balls[balls.length] = new Ball(x, y, color, dimension, speed_x, speed_y);
}


setInterval(draw, 10);