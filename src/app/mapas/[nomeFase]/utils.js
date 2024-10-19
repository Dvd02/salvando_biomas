
import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep'

export function getObjetosArea(objetos,bioma,x,y,raio,tamanhoMapaX,tamanhoMapaY,personagem){
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

    const matrizMapa = new Array()
    const tamanho =  {
        x: xFinal - xInicial,
        y: yFinal - yInicial
    }
    const posicaoJogador = {
        x: x-xInicial,
        y: y-yInicial
    }

    for (let y = 0; y <= tamanho.y; y++) {
        matrizMapa.push(new Array())
        for (let x = 0; x <= tamanho.x; x++) {
            const listaDeObjetosNoBloco = new Array()
            
            let objeto = null
            if (novaAreaObjetos[y] && novaAreaObjetos[y][x]){
                objeto =  novaAreaObjetos[y][x]
            }

            if (posicaoJogador.y == y && posicaoJogador.x == x){  
                if (objeto){
                    if(objeto.includes("agua")){
                        listaDeObjetosNoBloco.push(objeto.replace("agua","nadando"))
                    } 
                    else if (objeto.includes("arbusto") && !objeto.includes("verde")){
                        listaDeObjetosNoBloco.push(objeto.replace("arbusto","arbusto_baixo")) 
                    }
                }

                listaDeObjetosNoBloco.push(`${personagem.animal}_${personagem.direcao.horizontal}_${personagem.direcao.vertical}`)
            }

            if (objeto){
                // grama
                if (objeto.includes("arbusto_verde")) {
                    listaDeObjetosNoBloco.unshift(objeto)
                } else {
                    listaDeObjetosNoBloco.push(objeto) 
                }
            }
            
            listaDeObjetosNoBloco.push(bioma) 

            matrizMapa[y].push(listaDeObjetosNoBloco)
        }
    }

    const miraResultante = {
        x: posicaoJogador.x + personagem.posicao_mira.x,
        y: posicaoJogador.y + personagem.posicao_mira.y
    }
    if (matrizMapa[miraResultante.y] && matrizMapa[miraResultante.y][miraResultante.x]){
        matrizMapa[miraResultante.y][miraResultante.x].unshift("mira")
    }

    return matrizMapa
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
        case "W":
        case "ARROWUP":
            novaPosicaoY -= 1
            alterandoPersonagem.direcao.vertical = "cima"
            alterandoPersonagem.posicao_mira = {"x":0, "y":-1}
            break
        case "A": 
        case "ARROWLEFT":
            novaPosicaoX -= 1
            alterandoPersonagem.direcao.horizontal = "esquerda"
            alterandoPersonagem.posicao_mira = {"x":-1, "y":0}
            break
        case "S":
        case "ARROWDOWN":
            novaPosicaoY += 1
            alterandoPersonagem.direcao.vertical = "baixo"
            alterandoPersonagem.posicao_mira = {"x":0, "y":1}
            break
        case "D":
        case "ARROWRIGHT":
            novaPosicaoX += 1
            alterandoPersonagem.direcao.horizontal = "direita"
            alterandoPersonagem.posicao_mira = {"x":1, "y":0}
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

    const miraResultante = {
        x: novaPosicaoX + personagem.posicao_mira.x,
        y: novaPosicaoY + personagem.posicao_mira.y
    }
    if (
        interacao == " " &&
        (0 <= miraResultante.x && miraResultante.x <= tamanhoMapaX-1) && 
        (0 <= miraResultante.y && miraResultante.y <= tamanhoMapaY-1)
    ){
        objetoResultante = bioma
        if (objetos[miraResultante.y] && objetos[miraResultante.y][miraResultante.x]){
            objetoResultante = objetos[miraResultante.y][miraResultante.x]
        }
        
        if (
            (alterandoPersonagem.quantidade.agua <= 9) && 
            (alterandoPersonagem.coleta.includes("agua")) && 
            (objetoResultante.includes("agua"))
        ){
            alterandoPersonagem.quantidade.agua += 1
        }
        
        if (
            (alterandoPersonagem.quantidade.semente <= 9) && 
            (alterandoPersonagem.coleta.includes("semente")) && 
            (objetoResultante.includes("folha") || objetoResultante.includes("tronco"))
        ){
            alterandoPersonagem.quantidade.semente += 1
        }

        if (
            (objetoResultante.includes("fogo")) && 
            (alterandoPersonagem.quantidade.agua >= 1)
        ){
            const alterandoObjetos = cloneDeep(objetos)
            if(alterandoObjetos[miraResultante.y] && alterandoObjetos[miraResultante.y][miraResultante.x]){
                delete alterandoObjetos[miraResultante.y][miraResultante.x]
                if (isEmpty(alterandoObjetos[miraResultante.y])){
                    delete alterandoObjetos[miraResultante.y]
                }
                salvaObjetos(alterandoObjetos)
                alterandoPersonagem.quantidade.agua -= 1
                alterandoPersonagem.quantidade.fogoApagado += 1
            }
        }
        
        if (
            (objetoResultante.includes("chao") || objetoResultante.includes("arbusto")) &&
            (alterandoPersonagem.quantidade.semente >= 1)
        ){
            const alterandoObjetos= cloneDeep(objetos)
            if (isEmpty(alterandoObjetos[miraResultante.y])){
                alterandoObjetos[miraResultante.y] = {}
            }
            alterandoObjetos[miraResultante.y][miraResultante.x] = `muda_${bioma.replace("chao_","")}`
            salvaObjetos(alterandoObjetos)
            
            alterandoPersonagem.quantidade.semente -= 1
            alterandoPersonagem.quantidade.plantada += 1
        }
    }

    if (alterandoPersonagem.quantidade.fogoApagado >= alterandoPersonagem.meta.fogoApagado && 
        alterandoPersonagem.quantidade.plantada >= alterandoPersonagem.meta.plantada){
        alterandoPersonagem.estadoDoJogo = "vitoria"
    }

    salvaPersonagem(alterandoPersonagem)
}


export function jsonParaString(json){
    let mensagemObjetos = "{\n"
    for (const chave in json) {
        mensagemObjetos += `    ${chave}: ${JSON.stringify(json[chave])},\n`
    }
    mensagemObjetos += "}"
    return mensagemObjetos
}
