const canvas = document.getElementById ('canvas').getContext('2d')
let fundo = new BG(0, 0, 500, 900, 'img/sky.png')
let fundo2 = new BG(500, 0, 500, 900, 'img/sky.png')


function draw(){
    fundo.draw() //desenha o objeto que a variável recebeu
    fundo2.draw()
}

function update(){
    fundo.move(7,500,0)
    fundo2.move(7,0,500)
    
}

function main(){ 
canvas.clearRect(0, 0, 500, 900) //limpa o canvas
update()
draw()
}

setInterval(main, 100) //chama a função main a cada 100 milisegundos. Causa a impressão de que está tudo se movendo suavimente