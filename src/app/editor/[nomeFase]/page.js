
'use client'

import { useState } from "react"
import cloneDeep from 'lodash/cloneDeep'
import { nomeDosTiles } from '../../../utils/dados';

import Console from "@/componentes/Console";
import "../../mapas/[nomeFase]/styles.css"

import { fases } from "@/utils/dados"

export default function CriadorDeFases({ params : { nomeFase } }){
    let faseTemp = {
        "animal": {"animal":"animalBase"},
        "tamanho": {"x": 10,"y":10},
        "bioma": "chao_verde",
        "objetos": {}
    }
    
    if (nomeFase && ["cerrado","caatinga","amazonia","pantanal"].includes(nomeFase)) {
        faseTemp = cloneDeep(fases[nomeFase])
    }

    const [fase, setFase] = useState(faseTemp);
    
    const tamanhoTile = {
        y: nomeDosTiles.length,
        x: 0
    }
    for (let i = 0; i < nomeDosTiles.length; i++) {
        if (tamanhoTile.x < nomeDosTiles[i].length){
            tamanhoTile.x = nomeDosTiles[i].length
        }
    }
    const areaTileset = new Array(tamanhoTile.y).fill().map(() => new Array(tamanhoTile.x).fill(""));


    const [tamanho, setTamanho] = useState(fase.tamanho.x)
    const [bioma, setBioma] = useState(fase.bioma)
    const [objetos, setObjetos] = useState(cloneDeep(fase.objetos))

    const area = new Array(tamanho).fill().map(() => new Array(tamanho).fill(bioma));
    const [click, setClick] = useState(false)
    const [pincel, setPincel] = useState(false)
    const [objetoSelecionado, setObjetoSelecionado] = useState("fogo")

    function getObjeto(x,y){
        if (objetos[x] && objetos[x][y]){
            return objetos[x][y]
        }
        return null
    }

    function setObjeto(x,y,objeto){
        if (objeto == null){
            delObjeto(x,y)
            return
        }

        const alterandoObjetos = cloneDeep(objetos)
        if (alterandoObjetos[x] == undefined){
            alterandoObjetos[x] = {}
        }
        alterandoObjetos[x][y] = objeto
        setObjetos(alterandoObjetos)
    }

    function delObjeto(x,y){
        const alterandoObjetos = cloneDeep(objetos)
        if (alterandoObjetos[x] && alterandoObjetos[x][y]){
            delete alterandoObjetos[x][y]
        }
        if (alterandoObjetos[x] == {}){
            delete alterandoObjetos[x]
        }
        setObjetos(alterandoObjetos)
    }

    function constroi(x,y){
        setObjeto(x,y,objetoSelecionado)
    }

    function salvaDados(){
        
        console.log(JSON.stringify({
            animal: fase.animal.animal,   
            tamanho: {
                x: tamanho,
                y: tamanho
            },
            bioma: bioma,
            objetos:objetos
        }))

        console.log("-------------------------------------------------------------")
        console.log(JSON.stringify(objetos))
    }

    return(
        <div className={"jogo"}>
            <div className={"tabuleiro"} onMouseDown={()=>{if (pincel){setClick(!click)}}}>
                {area.map((linha, i)=>{
                    return (    
                        <div 
                            key={`Linha:${i}`}
                            className={"linha"}
                        >
                            {linha.map((coluna, ii)=>{
                                const objeto = getObjeto(i,ii)
                                return (
                                    <div 
                                        key={`Linha:${i};Coluna:${ii}`}
                                        className={"celula"} 
                                        style={{
                                            backgroundImage: `url(/tiles/${objeto}.png), url(/tiles/${bioma}.png)`,
                                            backgroundSize: 'cover',    // Faz com que a imagem cubra todo o elemento
                                            backgroundRepeat: 'no-repeat', // Impede que a imagem se repita
                                        }}
                                        onMouseOver={()=>{
                                            if (click && pincel){
                                                constroi(i,ii)
                                            }
                                        }}
                                        onClick={()=>{
                                            constroi(i,ii)
                                        }}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>

            <Console titulo={"tileset"}>
                <div className={"tilesetDados"}>
                    <div 
                        className={"quadrado"} 
                        style={{
                            backgroundImage: `url(/tiles/${objetoSelecionado}.png)`,
                            backgroundSize: 'cover',    // Faz com que a imagem cubra todo o elemento
                            backgroundRepeat: 'no-repeat', // Impede que a imagem se repita
                        }}
                    />
                    <p>= objeto atual</p>
                </div>
                
                
                <div className={"tilesetDados"} onMouseDown={()=>{setPincel(!pincel)}}>
                    { pincel ?
                        <div className={"quadrado ligado"} />
                    : 
                        <div className={"quadrado desligado"} />
                    }
                    = pincel
                </div>
                
                {pincel &&
                    <div className={"tilesetDados"}>
                        { click ?
                            <div className={"quadrado ligado"} />
                        : 
                            <div className={"quadrado desligado"} />
                        }
                        = Pintando
                    </div>
                }

                <div className={"tilesetDados"}>
                    <div className={"quadrado"} 
                        onClick={()=>{setTamanho(tamanho-1)}}
                    >-</div>
                    tamanho mapa [{tamanho}]
                    <div className={"quadrado"} 
                        onClick={()=>{setTamanho(tamanho+1)}}
                    >+</div>
                </div>
                
                <div className={"tilesetDados"}>
                    <div className={"quadrado"}
                        style={{
                            backgroundImage:`url('/tiles/${bioma}.png)`,
                            backgroundSize: 'cover',    // Faz com que a imagem cubra todo o elemento
                            backgroundRepeat: 'no-repeat', // Impede que a imagem se repita
                        }}
                        onClick={()=>{setBioma(objetoSelecionado)}}
                    />
                    = bioma
                </div>

                <div className={"tilesetDados"}>
                    <div className={"quadrado"} 
                        onClick={()=>{setObjetoSelecionado(null)}}
                    />
                    = apagar
                </div>
                
                <button className={"centraliza"} onClick={salvaDados}>---- salvar ----</button>

                <div className={"tileset"} style={{aspectRatio:`${tamanhoTile.x}/${tamanhoTile.y}`}}>
                    {areaTileset.map((linha, i)=>{
                        return (    
                            <div 
                                key={`Linha:${i}`}
                                className={"tilesetLinha"}
                            >
                                {linha.map((coluna, ii)=>{
                                    if (!nomeDosTiles[i][ii]){
                                        return (
                                            <div 
                                                key={`Linha:${i};Coluna:${ii}`}
                                                className={"tilesetCelula"} 
                                            />
                                        )
                                    } 

                                    let corDeFundo = "#999999"
                                    if ((i + ii) % 2 === 0){
                                        corDeFundo = "#aaaaaa"
                                    }

                                    return (
                                        <div 
                                            style={{
                                                backgroundColor: corDeFundo,
                                                backgroundImage: `url(/tiles/${nomeDosTiles[i][ii]}.png)`,
                                                backgroundSize: 'cover',    // Faz com que a imagem cubra todo o elemento
                                                backgroundRepeat: 'no-repeat', // Impede que a imagem se repita
                                            }}
                                            key={`Linha:${i};Coluna:${ii}`}
                                            className={"tilesetCelula"} 
                                            onMouseDown={()=>{
                                                setObjetoSelecionado(nomeDosTiles[i][ii])
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </Console>
        </div>
    )
}
