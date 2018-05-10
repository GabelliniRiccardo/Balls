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

////"addANewBall(500, 350, '#'+((1<<24)*Math.random()|0).toString(16), Math.random()*100, Math.round(Math.random()*4),
// Math.round(Math.random()*4))"

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


function readBalDimensionFromInputFieldAndCreateIt() {

    correct_input = false;

    dimension = document.getElementById("ballDimension").value;

    document.getElementById('ballDimension').value = "";

    x = parseInt(document.getElementById("positionX").value);
    document.getElementById('positionX').value = "";

    y = parseInt(document.getElementById("positionY").value);
    document.getElementById('positionY').value = "";

    velocity_along_x = parseInt(document.getElementById("velocityAlongX").value);
    document.getElementById('velocityAlongX').value = "";

    velocity_along_y = parseInt(document.getElementById("velocityAlongY").value);
    document.getElementById('velocityAlongY').value = "";

    if (x > 0 & x >= dimension && x <= (canvas_width - dimension) && y <= (canvas_height - dimension) && y > 0 && y >= dimension && velocity_along_y != "" && velocity_along_x != "" && x != "" && y != "")
        correct_input = true;

    if (correct_input)
        addANewBall(x, y, '#' + ((1 << 24) * Math.random() | 0).toString(16), dimension, velocity_along_x, velocity_along_y);
    else
        alert("The ball doesn't respect the dimension!" )
}

setInterval(draw, 10);