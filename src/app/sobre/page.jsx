'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Sobre() {
    const [carregando, setCareegando] = useState(false)

    return (<>
        <div style={styles.fundo}>
            <div style={styles.container}>
                <h1 style={styles.title}>Sobre o Projeto</h1>
                <p style={styles.text}>
                    Atualmente, devido às consequências climáticas e a ação humana, temos visto e sentido os efeitos das queimadas nos diversos biomas brasileiros, gerando 
                    consequências negativas não somente às suas respectivas faunas e floras, mas também para os próprios seres humanos. 
                </p>
                <p style={styles.text}>
                    Neste contexto, visando abordar a problemática dessa realidade, buscamos apresentar as possibilidades de mudanças de atitude por meio desse jogo. O jogo foi
                    pensado para ser utilizado em navegador aberto, desenvolvido com o framework Next.js, criado pela equipe do projeto. Foi adaptado para ser um jogo onde você
                    pode escolher o bioma que quer salvar e o animal típico que será usado para tal. 
                </p>
                <p style={styles.text}>
                    O animal escolhido coleta água, apaga focos de incêndio e planta novas árvores, enquanto percorre seu bioma. O jogo apresenta diferentes biomas brasileiros, como 
                    a Amazônia, o Cerrado, a Caatinga e o Pantanal, proporcionando aos jogadores a oportunidade de aprender sobre a biodiversidade de cada um deles.
                </p>
                <p style={styles.text}>
                    Cada bioma possui características únicas e desafios específicos, que exigem estratégias diferentes dos jogadores para superá-los. Além do componente de jogo, 
                    oferecemos informações educativas sobre a fauna, a flora e os impactos das queimadas em cada ecossistema, promovendo uma experiência de aprendizado lúdica.
                </p>
                <p style={styles.text}>
                    O impacto esperado é a sensibilização sobre os riscos ambientais das queimadas e o engajamento dos jogadores a fazer algo em prol da proteção da natureza. 
                    Além disso, esperamos que o trabalho aumente o conhecimento dos participantes sobre características dos biomas, incentivando atitudes positivas em relação 
                    ao meio ambiente. Ao final do jogo, os jogadores receberão um feedback sobre suas ações, reforçando a importância de cuidar do nosso planeta.
                </p>

                <h2 style={styles.integrantesTitle}>Equipe do Projeto</h2>
                <p style={styles.integrantesText}>David Vinhal</p>
                <p style={styles.integrantesText}>Esther Rose</p>
                <p style={styles.integrantesText}>João Marcos</p>
                <p style={styles.integrantesText}>Marcos Piedade</p>

                <h3 style={styles.agradecimentosTitle}>Agradecimentos Especiais</h3>
                <p style={styles.text}>
                    Agradecemos especialmente a Gabriel Francisco pela sua valiosa contribuição com as artes e conceitos durante o desenvolvimento do projeto.
                </p>

                <Link onClick={()=>{setCareegando(true)}} style={styles.backButton} href="/">
                    Voltar para o Início
                </Link>
            </div>
        </div>
        
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
    </>);
}

const styles = {
    fundo: {
        width: "100%",
        height: "100%",
        backgroundImage: `url(/tiles/chao_verde.png)`
    },
    container: {
        padding: '20px',
        maxWidth: '800px',
        height: 'calc(100% - 40px)',
        margin: '20px auto',
        textAlign: 'justify',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        overflow: "auto",
    },
    title: {
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '20px',
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginBottom: '10px',
        textIndent: '40px',
    },
    backButton: {
        width: 'max-content',
        margin: '20px auto 0 auto',
        display: 'block',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    },
    integrantesTitle: {
        textAlign: 'center',
        fontSize: '1.8rem', // Tamanho da fonte para o título
        margin: '20px 0 10px 0', // Margem para separar do texto
    },
    agradecimentosTitle: {
        textAlign: 'center',
        fontSize: '1.6rem', // Tamanho da fonte para o subtítulo
        margin: '20px 0 10px 0', // Margem para separar do texto
    },
    integrantesText: {
        textIndent: '40px',
        fontSize: '1.2rem', // Tamanho da fonte para o texto
        lineHeight: '1.1', // Espaçamento entre linhas
        marginBottom: '10px', // Margem inferior
        textAlign: 'left', // Alinhamento à esquerda
    }
};
