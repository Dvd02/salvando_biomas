
import Link from 'next/link';

export default function SelecaoMapa() {
    const mapas = [
        [
            {
                nome: 'Caatinga',
                backgroundImage: '/tiles/chao_caatinga.png',
                animalImage: '/tiles/tamandua_direita_baixo.png',
                link: '/editor/caatinga'
            },
            {
                nome: 'Cerrado',
                backgroundImage: '/tiles/chao_cerrado.png',
                animalImage: '/tiles/lobo_direita_baixo.png',
                link: '/editor/cerrado'
            },
            {
                nome: 'Novo Bioma',
                backgroundImage: '/tiles/chao_caatinga.png',
                animalImage: '/tiles/fogo.png',
                link: '/editor/novo'
            },
        ],
        [
            {
                nome: 'Amazonia',
                backgroundImage: '/tiles/chao_verde.png',
                animalImage: '/tiles/macaco_direita_baixo.png',
                link: '/editor/amazonia'
            },
            {
                nome: 'Pantanal',
                backgroundImage: '/tiles/chao_verde.png',
                animalImage: '/tiles/capivara_direita_baixo.png',
                link: '/editor/pantanal'
            }
        ]
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Seleção de Mapa PARA EDIÇÃO</h1>

            <div style={styles.mapas}>
                {mapas.map((linha, i) => (
                    <div key={i} style={styles.linha}>
                        {linha.map((mapa, j) => (
                            <Link 
                                key={`${i};${j}`} 
                                href={mapa.link}
                                style={{ 
                                    ...styles.mapa, 
                                    backgroundImage: `url(${mapa.backgroundImage})`
                                }}
                            >
                                <h2 style={styles.nome}>
                                    {mapa.nome}
                                </h2>

                                <div style={{...styles.imagem, backgroundImage: `url(${mapa.animalImage})`}}/>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            
            <Link style={styles.button} href="/">
                voltar
            </Link>
        </div>
    );
}

const styles = {
    container: {
        height: '100%',
        backgroundImage: 'url("/tiles/agua_centro.png")',
        textAlign: 'center',
        overflow: "auto"
    },
    title: {
        textAlign: 'center', 
        color: '#fff',
        textShadow: '2px 2px 4px #000',
        margin: '20px',
        fontFamily: '"pixelStyle", cursive',
    },
    mapas: {
        height: "calc(100% - 110px - 3.5rem)",
        margin: "0 auto",
        aspectRatio: "16/9",
    },
    linha: {
        width: '100%',
        height: 'calc(50% - 20px)',
        margin: "20px",
        display: "flex",
    },
    mapa: {
        display: 'block',
        width: "100%",
        height: "100%",
        border: "5px solid black",
        margin: "10px",
        borderRadius: '15px',
        textDecoration: 'none',
        position: "relative",
        overflow:'hidden'
    },
    nome: {
        color: '#fff',
        textShadow: '2px 2px 4px #000',
        margin: '10px',
        fontFamily: '"pixelStyle", cursive',
    },
    imagem: {
        backgroundSize:"cover",
        position: "absolute",
        bottom: "-15%",
        left: "-8%",
        height: "75%",
        aspectRatio: "1",
        borderEndStartRadius: "10px",
    },
    button: {
        display: 'inline-block',
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
};
