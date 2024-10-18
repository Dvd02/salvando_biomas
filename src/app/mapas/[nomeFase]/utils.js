
import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep'

export function getObjetosArea(objetos,bioma,x,y,raio,tamanhoMapaX, tamanhoMapaY){
    let xInicial = x - raio
    let yInicial = y - raio
    let xFinal   = x + raio
    let yFinal   = y + raio

    if (yFinal > tamanhoMapaY-1){
        yFinal = tamanhoMapaY-1
        yInicial = yFinal - 2 * raio
    }
    
    if (xFinal > tamanhoMapaX-1){
        xFinal = tamanhoMapaX-1
        xInicial = xFinal - 2 * raio
    }
    
    if (xInicial < 0){
        xInicial = 0
        xFinal = 2 * raio
    }
    
    if (yInicial < 0){
        yInicial = 0
        yFinal = 2 * raio
    }

    const novaAreaObjetos = {}

    for (let posicaoY = yInicial, contagemDistanciaY = 0; posicaoY <= yFinal; posicaoY++, contagemDistanciaY++) {
        for (let posicaoX = xInicial, contagemDistanciaX = 0; posicaoX <= xFinal; posicaoX++, contagemDistanciaX++) {
            let objeto = undefined
            if (objetos[posicaoY] && objetos[posicaoY][posicaoX]){
                objeto = objetos[posicaoY][posicaoX]
            }

            if (objeto){
                if (!novaAreaObjetos[contagemDistanciaY]){
                    novaAreaObjetos[contagemDistanciaY] = {}
                }
                novaAreaObjetos[contagemDistanciaY][contagemDistanciaX] = objeto
            }
        }
    }

    return {
        posicaoJogador: {
            x: x-xInicial,
            y: y-yInicial
        },
        tamanho: {
            x: xFinal - xInicial + 1,
            y: yFinal - yInicial + 1
        },
        bioma: bioma,
        objetos: novaAreaObjetos,
    }
}

export function playerInteraje(event, personagem, salvaPersonagem, bioma, objetos, salvaObjetos,tamanhoMapaX, tamanhoMapaY){
    const interacao = event.key.toUpperCase()
    const alterandoPersonagem = cloneDeep(personagem)
    let novaPosicaoX = alterandoPersonagem.posicao.x
    let novaPosicaoY = alterandoPersonagem.posicao.y

    let objetoAnterior = bioma
    if (objetos[novaPosicaoY] && objetos[novaPosicaoY][novaPosicaoX]){
        objetoAnterior = objetos[novaPosicaoY][novaPosicaoX]
    }

    switch (interacao) {
        case "W", "ARROWUP":
            novaPosicaoY -= 1
            alterandoPersonagem.direcao.vertical = "cima"
            break
        case "A", "ARROWLEFT":
            novaPosicaoX -= 1
            alterandoPersonagem.direcao.horizontal = "esquerda"
            break
        case "S", "ARROWDOWN":
            novaPosicaoY += 1
            alterandoPersonagem.direcao.vertical = "baixo"
            break
        case "D", "ARROWRIGHT":
            novaPosicaoX += 1
            alterandoPersonagem.direcao.horizontal = "direita"
            break
        case " ":
            break
        default:
            return
    }
    
    let objetoResultante = bioma
    if (objetos[novaPosicaoY] && objetos[novaPosicaoY][novaPosicaoX]){
        objetoResultante = objetos[novaPosicaoY][novaPosicaoX]
    }

    if (
        (0 <= novaPosicaoX && novaPosicaoX <= tamanhoMapaX-1) && 
        (0 <= novaPosicaoY && novaPosicaoY <= tamanhoMapaY-1) &&
        (
            (alterandoPersonagem.anda.includes("grama") && (objetoResultante.includes("chao") || objetoResultante.includes("muda")) || objetoResultante.includes("arbusto")) ||
            (alterandoPersonagem.anda.includes("agua") && (objetoResultante.includes("agua")))  ||
            // (alterandoPersonagem.anda.includes("arvore") && (objetoResultante.includes("tronco") || (((objetoAnterior.includes("tronco") || objetoAnterior.includes("folha")) && objetoResultante.includes("folha")))))
            (alterandoPersonagem.anda.includes("arvore") && (objetoResultante.includes("folha") || objetoResultante.includes("tronco")))
        )
    ){
        alterandoPersonagem.posicao.x = novaPosicaoX
        alterandoPersonagem.posicao.y = novaPosicaoY
    }   
    
    if (
        (alterandoPersonagem.quantidade.agua <= 9) && 
        (alterandoPersonagem.coleta.includes("agua")) && 
        (objetoResultante.includes("agua")) &&
        (
            !alterandoPersonagem.anda.includes("agua") || 
            alterandoPersonagem.anda.includes("agua") && interacao == " " 
        )
        
    ){
        alterandoPersonagem.quantidade.agua += 1
    }

    if (
        (alterandoPersonagem.quantidade.semente <= 9) && 
        (alterandoPersonagem.coleta.includes("semente")) && 
        (objetoResultante.includes("folha") || objetoResultante.includes("tronco")) &&
        (
            !alterandoPersonagem.anda.includes("arvore") || 
            alterandoPersonagem.anda.includes("arvore") && interacao == " " 
        )  
    ){
        alterandoPersonagem.quantidade.semente += 1
    }

    if (
        (objetoResultante.includes("fogo")) && 
        (alterandoPersonagem.quantidade.agua >= 1)
    ){
        const alterandoObjetos = cloneDeep(objetos)
        if(alterandoObjetos[novaPosicaoY] && alterandoObjetos[novaPosicaoY][novaPosicaoX]){
            delete alterandoObjetos[novaPosicaoY][novaPosicaoX]
            if (isEmpty(alterandoObjetos[novaPosicaoY])){
                delete alterandoObjetos[novaPosicaoY]
            }
            salvaObjetos(alterandoObjetos)
            alterandoPersonagem.quantidade.agua -= 1
            alterandoPersonagem.quantidade.fogoApagado += 1
        }
    }

    if (
        (interacao == " ") &&
        (objetoResultante.includes("chao") || objetoResultante.includes("arbusto")) &&
        (alterandoPersonagem.quantidade.semente >= 1)
    ){
        const alterandoObjetos= cloneDeep(objetos)
        if (isEmpty(alterandoObjetos[novaPosicaoY])){
            alterandoObjetos[novaPosicaoY] = {}
        }
        alterandoObjetos[novaPosicaoY][novaPosicaoX] = `muda_${bioma.replace("chao_","")}`
        salvaObjetos(alterandoObjetos)
        
        alterandoPersonagem.quantidade.semente -= 1
        alterandoPersonagem.quantidade.plantada += 1
    }

    if (alterandoPersonagem.quantidade.fogoApagado >= alterandoPersonagem.meta.fogoApagado && 
        alterandoPersonagem.quantidade.plantada >= alterandoPersonagem.meta.plantada){
        alterandoPersonagem.estadoDoJogo = "vitoria"
    }

    salvaPersonagem(alterandoPersonagem)
}
