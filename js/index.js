var gameSpeed = 1;
var accx = -1
var accy = 1




var screen = new Object()
screen.p1 = 135
screen.p2 = 135
screen.ballx = 147
screen.bally = getRandomInt(30,270)
var intervalID = window.setInterval(game,10)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function game(){
    
    if(screen.bally == 300)
        accy *= -1
    if(screen.bally == 0)
        accy *= -1
    if(screen.ballx == 15 && screen.bally >= screen.p1 && screen.bally <=screen.p1+35)
        accx *= -1
    if(screen.ballx == 285 && screen.bally >= screen.p2 && screen.bally <=screen.p2+35)
        accx *= -1
    screen.ballx += (accx*gameSpeed)
    screen.bally += (accy*gameSpeed)
    screen.p1 = (screen.bally - 17)
    screen.p2 = (screen.bally - 17)

    draw()
}
function draw(){
    
    var canvas = document.getElementById('tutorial')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(0,0,300,300)

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, screen.p1, 5, 35);

    ctx.fillStyle = "rgb(100, 100, 200)";
    ctx.fillRect (285, screen.p2, 5, 35);
    
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.fillRect (screen.ballx,screen.bally,5,5)


}