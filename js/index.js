window.addEventListener('keydown',this.kDown,false)
window.addEventListener('keyup',this.kUp,false)

var gameSpeed = 1
var ball = new Object()
ball.accX = -1
ball.accY = 1
ball.x = 147
ball.y = getRandomInt(30,270)
var player = new Object()
player.n1 = {y:135}
player.n2 = {y:135,m:0}

var intervalID = window.setInterval(game,10)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
    
function kDown(e){
    switch(e.keyCode){
        case 38:
            player.n2.m = 2
            break
        case 40:
            player.n2.m = 8
            break
    }
}

function kUp(e){
    if(e.keyCode == 38 || e.keyCode == 40)
        player.n2.m=0
}

function game(){
    if(ball.y == 300)
        ball.accY *= -1
    if(ball.y == 0)
        ball.accY *= -1
    if(ball.x == 15 && ball.y >= player.n1.y && ball.y <=player.n1.y+35)
        ball.accX *= -1
    if(ball.x == 285 && ball.y >= player.n2.y && ball.y <=player.n2.y+35)
        ball.accX *= -1
    ball.x += (ball.accX*gameSpeed)
    ball.y += (ball.accY*gameSpeed)
    player.n1.y = (ball.y - 17)
    if(player.n2.m == 8)
        player.n2.y += 1
    else if (player.n2.m == 2)
        player.n2.y += -1

    draw()
}

function draw(){
    
    var canvas = document.getElementById('tutorial')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(0,0,300,300)

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, player.n1.y, 5, 35);

    ctx.fillStyle = "rgb(100, 100, 200)";
    ctx.fillRect (285, player.n2.y, 5, 35);
    
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.fillRect (ball.x,ball.y,5,5)


}