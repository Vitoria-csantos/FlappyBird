class obj{ //vai construir as imagens do jogo
    quadro = 0
    tempo = 0

    constructor(px, py, largura, altura,imagem){
        this.px = px
        this.py = py
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
    }

        draw(){
            let img = new Image()
            img.src = this.imagem
            canvas.drawImage(img, this.px, this.py, this.largura, this.altura)
        }

animacao(velocidade,limite,nomeImg){
    this.tempo += 1
    if(this.tempo >= velocidade){
        this.tempo = 0
        this.quadro += 1
    }
    if(this.quadro >= limite){
        this.quadro = 0
    }

    this.imagem = 'img/' + nomeImg + this.quadro + '.png'
}
}

class BG extends obj{
    move(velocidade,limite,pos){
        this.px -= velocidade //o número é negativo para dar impressão de que o personagem está se movendo para a direita

        if(this.px < -limite){
            this.px = pos
        }
    }
}


class ground extends BG{

}


class BIRD extends obj{
    velocidade = 2
    gravidade = 1

    move(){
       // this.py += this.gravidade
        if(this.velocidade < 10){
            this.velocidade += this.gravidade
        }
        this.py += this.velocidade
    }

    limite(){
        if(this.py >= 660){
            this.py = 660
        }

        else if(this.py <= 0){
            this.py = 0
        }
    }

}

class cano extends obj{
    move(velocidade, limite, pos, pipe2){
        this.px -= velocidade

        if(this.px <= limite){
            this.px = pos

            this.py = Math.random()* 600
        }

        pipe2.py = pipe1.py
    }
}