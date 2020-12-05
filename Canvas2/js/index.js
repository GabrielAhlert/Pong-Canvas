class Config{
    constructor(velocidade){
        this.velocidade = velocidade
        this.tamanho = tamanho
    }
}
class Player{
    constructor(){
        this.posY = 200
        this.mov = 0 
    }
}
class Jogo{
    constructor(bolaPosY,velocidade,tamanho){
        this.p1 = {posY:180}
        this.bola = {posY:bolaPosY,posX:200,accY:1,accX:-1}
        this.p2 = {posY:180,mov:0} //mov -> 0 - parado, 1 = baixo, -1 = cima
        this.config = {vel:velocidade,tam:tamanho}
    }

    tick(){
        if(this.bola.posY >= 400)
            this.bola.accY *= -1
        if(this.bola.posY <= 0)
            this.bola.accY *= -1
        if(this.bola.posX <= 15 && this.bola.posY >= this.p1.posY && this.bola.posY <=this.p1.posY+this.config.tam)
            this.bola.accX *= -1
        if(this.bola.posX >= 380 && this.bola.posY >= this.p2.posY && this.bola.posY <=this.p2.posY+this.config.tam)
            this.bola.accX *= -1
            this.bola.posX += (this.bola.accX*this.config.vel)
        this.bola.posY += (this.bola.accY*this.config.vel)
        this.p1.posY = this.bola.posY-20
        this.p2.posY = this.bola.posY-20

        if(this.p1.posY + this.config.tam >400)
            this.p1.posY = 400 - this.config.tam
        if(this.p2.posY + this.config.tam >400)
            this.p2.posY = 400 - this.config.tam
        if(this.p1.posY <0)
            this.p1.posY = 0
        if(this.p2.posY <0)
            this.p2.posY = 0


        return {
            bolaX:this.bola.posX,
            bolaY:this.bola.posY,
            p1:this.p1.posY,
            p2:this.p2.posY,
            tam:this.config.tam
        }
    }

}

var game = new Jogo(200,1,40)
var intervalID = window.setInterval(run,10)

function run(){
    draw(game.tick())
}

function draw(img){
    var canvas = document.getElementById('tutorial')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(0,0,400,400)

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, img.p1, 5, img.tam);

    ctx.fillStyle = "rgb(0, 0, 200)";
    ctx.fillRect (380, img.p2, 5, img.tam );
    
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.fillRect (img.bolaX,img.bolaY,5,5)
}

