'use client'

import { playerInteraje, getObjetosArea, jsonParaString} from "./utils"
import { fases } from "@/utils/dados"

import { useEffect, useState } from "react"
import { notFound } from 'next/navigation';
import Link from "next/link"

import Console from "../../../componentes/Console"
import "./styles.css"


function RenderizaArea({area}){
    return (<>
        <div className={"tabuleiro"}>
            {area.map((linha, y) => (
                <div className={"linha"} key={`Linha:${y}`}>
                    {linha.map((listaDeObjetosNoBloco, x) => {
                        const urls = listaDeObjetosNoBloco.map(objeto => `url('/tiles/${objeto}.png')`).join(', ');

                        return (
                            <div
                                className={"celula"} 
                                key={`Linha:${y};Coluna:${x}`}
                                style={{ backgroundImage: urls }}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
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
        document.addEventListener("keydown", teclaPresionada)
        setControlesAtivos(true)
    }
    
    const desligaControles = () => {
        document.removeEventListener("keydown", teclaPresionada)
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
                area={
                    getObjetosArea(
                        objetos, 
                        fase.bioma, 
                        personagem.posicao.x, 
                        personagem.posicao.y, 
                        raioAreaDeVisao, 
                        fase.tamanho.x, 
                        fase.tamanho.y,
                        personagem
                    )
                }
            />

            <div className="dados">
                <div className="linhaDados">
                    <div className="textoDados">
                        <div className="icone" style={{backgroundImage: `url('/tiles/semente.png')`}} /> 
                        Sementes disponiveis : {String(personagem.quantidade.semente).padStart(2,"0")}
                    </div>

                    <div className="textoDados">
                        <div className="icone" style={{backgroundImage: "url('/tiles/agua_gota.png')"}} /> 
                        Agua     : {String(personagem.quantidade.agua).padStart(2,"0")}
                    </div>
                </div>
                
                <div className="linhaDados">
                    <div className="textoDados">
                        <div className="icone" style={{backgroundImage: `url('/tiles/semente.png'), url('/tiles/${fase.bioma}.png')`}} /> 
                        Sementes a plantar     : {String(Math.max(personagem.meta.plantada - personagem.quantidade.plantada, 0)).padStart(2,"0")}
                    </div>

                    <div className="textoDados">
                        <div className="icone" style={{backgroundImage: `url('/tiles/fogo.png')`}} /> 
                        Chamas : {String(Math.max( personagem.meta.fogoApagado - personagem.quantidade.fogoApagado, 0)).padStart(2,"0")}
                    </div>
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


