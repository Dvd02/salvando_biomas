'use client'

import { playerInteraje, getObjetosArea} from "./utils"
import { fases } from "@/utils/dados"

import { useEffect, useState } from "react"
import { notFound } from 'next/navigation';
import Link from "next/link"

import Console from "../../../componentes/Console"
import "./styles.css"

function jsonParaString(json){
    let mensagemObjetos = "{\n"
    for (const chave in json) {
        mensagemObjetos += `    ${chave}: ${JSON.stringify(json[chave])},\n`
    }
    mensagemObjetos += "}"
    return mensagemObjetos
}

function RenderizaArea({dados: {bioma, tamanho, objetos, posicaoJogador}, personagem }){
    
    const area = new Array(tamanho.y).fill().map(() => new Array(tamanho.x).fill(""));

    return (<>
        <div className={"tabuleiro"}>
            {area.map((linha, i)=>{
                return (    
                    <div className={"linha"} key={`Linha:${i}`}>
                        {linha.map((bloco, ii)=>{
                            let elementosNaCelula = ''
                            let objeto = null

                            if (objetos[i] && objetos[i][ii]){
                                objeto =  objetos[i][ii]
                            }

                            if (posicaoJogador.y == String(i) && posicaoJogador.x == String(ii)){  
                                if (objeto){
                                    if(objeto.includes("agua")){
                                        elementosNaCelula = `url('/tiles/${objeto.replace("agua","nadando")}.png'), `
                                    } 
                                    else if (objeto.includes("arbusto") && !objeto.includes("verde")){
                                        elementosNaCelula = `url('/tiles/${objeto.replace("arbusto","arbusto_baixo")}.png'), `  
                                    }
                                }

                                elementosNaCelula += `url('/tiles/${personagem.animal}_${personagem.direcao.horizontal}_${personagem.direcao.vertical}.png'), `
                            }

                            if (objeto){
                                // grama
                                if (objeto.includes("arbusto_verde")) {
                                    elementosNaCelula = `url(/tiles/${objeto}.png), ` + elementosNaCelula
                                } else {
                                    elementosNaCelula += `url('/tiles/${objeto}.png'), `
                                }
                            }

                            elementosNaCelula += `url('/tiles/${bioma}.png')`

                            return (<>
                                <div
                                    className={"celula"} 
                                    key={`Linha:${i};Coluna:${ii}`}
                                    style={{
                                        backgroundImage: elementosNaCelula,
                                        backgroundSize: 'cover',    
                                        backgroundRepeat: 'no-repeat', 
                                    }}
                                />
                            </>)
                        })}
                    </div>
                )
            })}
        </div>

        {/* <Console titulo="dados da area">
            bioma: {bioma}
            {"\n\n"}
            tamanho: {JSON.stringify(tamanho,null,4)}
            {"\n\n"}
            posicaoJogador: {JSON.stringify(posicaoJogador,null,4)}
            {"\n\n"}
            objetos: {jsonParaString(objetos)}
            {"\n\n"}
            area: {jsonParaString(area)}
        </Console> */}
    </>)
}

export default function Mapa({ params : { nomeFase } }){

    if (!nomeFase || !["cerrado","caatinga","amazonia","pantanal"].includes(nomeFase)) {
        notFound();
    }

    const fase = fases[nomeFase]
    const [raioAreaDeVisao] = useState(6)
    const [personagem, setPersonagem] = useState(fase.animal)
    const [objetos, setObjetos] = useState(fase.objetos)
    const [dialogo, setDialogo] = useState(fase.animal.dialogo[0])
    const [controlesAtivos, setControlesAtivos] = useState(false)
    const [carregando, setCarregando] = useState(false)

    const teclaPresionada = (e)=>{
        playerInteraje(e,
            personagem,
            setPersonagem,
            fase.bioma,
            objetos,
            setObjetos,
            fase.tamanho.x,
            fase.tamanho.y
        ) 
    }

    const ligaControles = () => {
        document.addEventListener("keyup", teclaPresionada)
        setControlesAtivos(true)
    }
    
    const desligaControles = () => {
        document.removeEventListener("keyup", teclaPresionada)
        setControlesAtivos(false)
    }

    useEffect(()=>{        
        if (personagem.estadoDoJogo == "vitoria"){
            setDialogo(personagem.dialogo[1])
            setControlesAtivos(false)
        } else if (personagem.estadoDoJogo == "perdeu"){
            setDialogo(personagem.dialogo[2])
            setControlesAtivos(false)
        }

        // setTimeout(()=>{
            if (controlesAtivos){
                ligaControles()
            }
        // },300)

        return ()=>{
            desligaControles()
        }
    },[personagem])

    return(<>
        <div className={"jogo"}>
            <RenderizaArea 
                dados={
                    getObjetosArea(
                        objetos, 
                        fase.bioma, 
                        personagem.posicao.x, 
                        personagem.posicao.y, 
                        raioAreaDeVisao, 
                        fase.tamanho.x, 
                        fase.tamanho.y,
                    )
                }
                personagem={personagem}
            />

            <div className="dados">
                <div className="textoDados">
                    <div className="icone" style={{backgroundImage: "url('/tiles/agua_gota.png')"}} /> 
                    : {personagem.quantidade.agua}
                </div>
                <div className="textoDados">
                    <div className="icone" style={{backgroundImage: `url('/tiles/semente.png')`}} /> 
                    : {personagem.quantidade.semente}
                </div>
                
                <div className="textoDados">
                    <div className="icone" style={{backgroundImage: `url('/tiles/semente.png'), url('/tiles/${fase.bioma}.png')`}} /> 
                    : {Math.max(personagem.meta.plantada - personagem.quantidade.plantada, 0)}
                </div>

                <div className="textoDados">
                    <div className="icone" style={{backgroundImage: `url('/tiles/apaga_fogo.png')`}} /> 
                    : {Math.max( personagem.meta.fogoApagado - personagem.quantidade.fogoApagado, 0)}
                </div>
            </div>
        </div>

        <Link onClick={()=>{setCarregando(true)}} href="/mapas" style={{
            position: 'fixed',
            top: "10px",
            left: "10px",
            zIndex: "1",
            fontFamily: '"pixelStyle", cursive',
            border: "3px solid black",
            backgroundColor: 'white',
            borderRadius: "5px",
            display: "block",
            textDecoration: "none",
            padding: "10px",
            color: "black"
        }}>
            Voltar
        </Link>
        
        {carregando &&
            <div style={{
                fontFamily: '"pixelStyle", cursive',
                border: "3px solid black",
                position: "absolute",
                right: "10px",
                bottom: "10px",
                padding: "10px",
                backgroundColor: 'white',
                borderRadius: "5px"
            }}>
                Carregando...
            </div>
        }

        {dialogo &&
            <div className="dialogo">
                <div className="nome">{personagem.nome}</div>
                <div className="conteudo">
                    <div className="imagem" style={{backgroundImage: `url('/tiles/${personagem.animal}_direita_baixo.png'), url('/tiles/${fase.bioma}.png')`}}/>
                    <div className="texto">
                        {dialogo}
                    </div>
                </div>

                {personagem.estadoDoJogo == "jogando" && <div className="fecharDialogo" onMouseDown={()=>{setDialogo(""); ligaControles()}}>Ok</div>}
                {personagem.estadoDoJogo == "perdeu" && <Link href="/mapas" className="fecharDialogo">Sinto muito</Link>}
                {personagem.estadoDoJogo == "vitoria" && <Link href="/mapas" className="fecharDialogo">Que bom que conseguimos</Link>}
            </div>
        }

        {/* <Console titulo = "Dados">
            controles ativos: {String(controlesAtivos)}
            {"\n\n"}
            personagem: {JSON.stringify(personagem, null, 4)}

            {"\n\n"}
            objetos no mapa: {jsonParaString(objetos)}
        </Console> */}
    </>)
}


