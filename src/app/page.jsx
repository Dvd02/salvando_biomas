'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const [carregando, setCareegando] = useState(false)

    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>Túlio Bandeira e seus amigos em:</h1>
                <h1 style={styles.title}>Salvando Biomas</h1>
                <div onClick={()=>{setCareegando(true)}} style={styles.menu}>
                    <Link style={styles.button} href="/mapas">
                        Jogar
                    </Link>
                    <Link style={styles.button} href="/sobre">
                        Sobre
                    </Link>
                </div>
            </div>

            {carregando &&
                <div style={{
                    fontFamily: '"pixelStyle", cursive',
                    border: "3px solid black",
                    position: "absolute",
                    right: "50%",
                    top: "10px",
                    transform: " translateX(50%)",
                    padding: "10px",
                    backgroundColor: 'white',
                    borderRadius: "5px"
                }}>
                    Carregando...
                </div>
            }
        </>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/tiles/chao_verde.png")',
    },
    title: {
        color: '#fff',
        fontSize: '4rem',
        textShadow: '2px 2px 4px #000',
        marginBottom: '50px',
        fontFamily: '"pixelStyle", cursive',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        fontFamily: '"pixelStyle", cursive',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '15px 30px',
        margin: '10px',
        textDecoration: 'none',
        borderRadius: '10px',
        fontSize: '1.5rem',
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};
