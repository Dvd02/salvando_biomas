
const fs = require('fs-extra'); // Importa o módulo fs-extra para manipulação de arquivos e pastas
const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivo
const sharp = require('sharp'); // Importa o módulo sharp para processamento de imagens
const { nomeDosTiles } = require('../utils/dados');

const generateTiles = async () => {
    const tilesetPath = path.join(process.cwd(), 'public', 'tileset.png'); // Caminho completo para o arquivo tileset.png
    const tamanhoTile = 128; // Tamanho desejado para cada tile (128x128 pixels)
    const tilesFolderPath = path.join(process.cwd(), 'public', 'tiles'); // Caminho completo para a pasta onde os tiles serão salvos


    // Verifica se a pasta 'tiles' existe
    if (await fs.existsSync(tilesFolderPath)) {
        // Remove a pasta 'tiles' completamente, se existir
        await fs.remove(tilesFolderPath);
    }

    // Cria a pasta 'tiles' (ou a recria, se foi removida)
    await fs.mkdir(tilesFolderPath);

    // Lê o conteúdo do arquivo tileset.png como um buffer
    const tileset = await fs.readFile(tilesetPath);

    // Obtém metadados da imagem tileset.png, como largura e altura
    const tilesetMetadata = await sharp(tileset).metadata();
    const { width, height } = tilesetMetadata;

    const tilePromises = []; // Array para armazenar as promessas de geração de tiles

    nomeDosTiles.forEach((linha,y)=>{
        linha.forEach((bloco,x)=>{
            if (bloco){
                const nome = `${bloco}.png`

                // Cria uma promessa para extrair uma tile da posição (x, y) no tileset e salvar como arquivo na pasta 'tiles'
                const tilePromise = sharp(tileset)
                .extract({ left: x*tamanhoTile, top: y*tamanhoTile, width: tamanhoTile, height: tamanhoTile }) // Extrai a tile da posição (x, y)
                .toFile(path.join(tilesFolderPath, nome)); // Salva a tile como um arquivo PNG na pasta 'tiles'

                tilePromises.push(tilePromise); // Adiciona a promessa ao array de promessas de tiles
            }
            console.log(`${bloco}: [${y};${x}]`)
        })
    })

    // Aguarda a conclusão de todas as promessas de geração de tiles
    await Promise.all(tilePromises);

    console.log('Todas as tiles foram geradas com sucesso!'); // Mensagem indicando que todas as tiles foram geradas
};

generateTiles(); // Chama a função principal para gerar os tiles
