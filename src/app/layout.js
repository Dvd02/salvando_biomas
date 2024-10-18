import './globals.css'

export const metadata = {
    title: 'Salvando Biomas',
    description: 'Um jogo divertido e educativo sobre salvar biomas',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    )
}
