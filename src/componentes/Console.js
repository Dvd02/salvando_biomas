import { useEffect, useRef, useState } from 'react';

const Console = ({ children, titulo}) => {
    const consoleRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [initialX, setInitialX] = useState(0);
    const [initialY, setInitialY] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setStartY(e.clientY);
        setInitialX(consoleRef.current.offsetLeft);
        setInitialY(consoleRef.current.offsetTop);
        document.body.style.userSelect = 'none'; // Desabilita seleção de texto enquanto arrasta
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const currentX = e.clientX;
        const currentY = e.clientY;
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        consoleRef.current.style.left = Math.max(initialX + deltaX, 0) + 'px';
        consoleRef.current.style.top = Math.max(initialY + deltaY, 0) + 'px';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = ''; // Reabilita seleção de texto
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const consoleStyles = {
        position: 'fixed',
        left: '0px',
        top: '0px',
        window: 'min-content',
        height: 'min-content',
    };

    const headerStyles = {
        cursor: isDragging ? 'grabbing' : 'grab', 
        backgroundColor: 'rgb(36, 38, 48)',
        color: "white",
        userSelect: 'none', 
        width: '100%',
        padding: '5px',
        fontFamily: "'Courier New', Courier, monospace",
    };

    const contentStyles = {
        padding: '10px', 
        width: '200px',
        height: '200px',
        overflow: 'auto',
        resize: 'both', 
        maxHeight: "calc(100vh - 15px - 1em)",

        whiteSpace: 'pre',
        fontSize: '80%',
        color: 'white',
        backgroundColor: 'rgb(46, 48, 58)',
        fontFamily: "'Courier New', Courier, monospace",
    };  

    return (
        <div ref={consoleRef} style={consoleStyles}>
            <div style={headerStyles} onMouseDown={handleMouseDown}>
                {titulo}
            </div>

            <div style={contentStyles}>
                {children}

                <style jsx>{`
                    ::-webkit-scrollbar {
                        width: 15px; /* Largura da barra de rolagem */
                        height: 15px; /* Altura da barra de rolagem horizontal */
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: #444; /* Cor da "alça" da barra de rolagem */
                        border-radius: 10px; /* Arredondamento das bordas da alça */
                        border: 4px solid #222;
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background-color: #555; /* Cor da alça quando o mouse está sobre ela */
                    }
                    ::-webkit-scrollbar-track {
                        background: #222; /* Cor do fundo da barra de rolagem */
                        border-radius: 10px; /* Arredondamento das bordas do fundo */
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Console;
