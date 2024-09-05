const canvas = document.getElementById ('canvas').getContext('2d')
let fundo = new BG(0, 0, 500, 900, 'img/sky.png')
let fundo2 = new BG(500, 0, 500, 900, 'img/sky.png')
let groundv = new ground(0,700,500,200, 'img/ground.png')
let ground2 = new ground(500, 700, 500, 200, 'img/ground.png')


let bird = new BIRD(50,400,63,51, 'img/bird0.png')
let pipe1 = new cano(300, 500, 96, 358, 'img/pipe1.png')
let pipe2 = new cano(300, 0, 94, 358, 'img/pipe2.png')


document.addEventListener('click', function(e){
    bird.velocidade -= 18

})

function draw(){
    fundo.draw() //desenha o objeto que a variável recebeu
    fundo2.draw()
    pipe1.draw()
    pipe2.draw()
    groundv.draw()
    ground2.draw()
    bird.draw()
   
}

function update(){
    fundo.move(2,500,0)
    fundo2.move(2,0,500)

    pipe1.move(1, -100, 600, pipe2)
    //pipe2.move(1, -100, 600)

    groundv.move(2,500,0)
    ground2.move(2,0,500)

    bird.move()
    bird.animacao(8,4,'bird')
    bird.limite()
}

function main(){ 
canvas.clearRect(0, 0, 500, 900) //limpa o canvas
update()
draw()
requestAnimationFrame(main)
}

main() //chama a função main a cada 100 milisegundos. Causa a impressão de que está tudo se movendo suavimente