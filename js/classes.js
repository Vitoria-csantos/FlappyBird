class obj{ //vai construir as imagens do jogo

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

}

class BG extends obj{
    move(velocidade,limite,pos){
        this.px -= 7 //o número é negativo para dar impressão de que o personagem está se movendo para a direita

        if(this.px < -limite){
            this.px = pos
        }
    }
}