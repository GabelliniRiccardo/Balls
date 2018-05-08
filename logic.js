var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvas_width = 1000;
var canvas_height = 700;

function Ball(x, y, color, dimension, speed_x, speed_y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.dimension = dimension;
    this.dx = speed_x;
    this.dy = speed_y;
}



var balls = [new Ball(250, 200, "#1edd34", 100, 1, 3), new Ball(220, 110, "#dd1d1d", 30, 2, 4), new Ball(420, 380, "#5568dd", 40, 3,3), new Ball(270,300,"#c805dd", 45,4,5)];


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

        if (balls[i].y > canvas_height - (balls[i].dimension))
            balls[i].dy = balls[i].dy * (-1);
        else if (balls[i].y < (balls[i].dimension))
            balls[i].dy = balls[i].dy * (-1);

        if (balls[i].x < (balls[i].dimension))
            balls[i].dx = balls[i].dx * (-1);
        else if (balls[i].x > (canvas_width - balls[i].dimension))
            balls[i].dx = balls[i].dx * (-1);


    }
}

setInterval(draw, 10);
document.getElementById("title").style.marginLeft = canvas_width/2 -50 + 'px';
document.getElementById("title").style.fontSize = 50 + 'px';
document.getElementById("title").style.fontFamily = "Impact,Charcoal,sans-serif";

document.getElementById("subtitle").style.marginLeft = canvas_width/2 -75 + 'px';
//document.getElementById("title").style.fontSize = 2 + 'px';
document.getElementById("subtitle").style.fontFamily = "Impact,Charcoal,sans-serif";