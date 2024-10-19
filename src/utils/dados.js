
const nomeDosTiles = [
    ["chao_cerrado","fogo","folhas_arvore_fina_cerrado","folha_esquerda_arvore_grande","folha_arvore_grande"],
    ["arbusto_cerrado","arbusto_baixo_cerrado","tronco_arvore_fina_cerrado","muda_cerrado","tronco_arvore_grande_cerrado"],

    ["chao_caatinga"   ,"muda_caatinga"         ,"cacto_cima_caatinga" ,"folha_arvore_caatinga" ,"folha_arvore_2_caatinga"],
    ["arbusto_caatinga","arbusto_baixo_caatinga","cacto_baixo_caatinga","tronco_arvore_caatinga","tronco_arvore_2_caatinga"],
    
    ["chao_verde"      ,"folha_floresta_verde_esquerda_cima"  ,"folha_floresta_verde_esquerda_centro_cima"  ,"folha_floresta_verde_direita_centro_cima"  ,"folha_floresta_verde_direita_cima"  ,"folha_arvores_verde_esquerda_cima"  ,"folha_arvores_verde_direita_cima"  ],
    ["muda_verde"      ,"folha_floresta_verde_esquerda"       ,"folha_floresta_verde_esquerda_centro"       ,"folha_floresta_verde_direita_centro"       ,"folha_floresta_verde_direita"       ,"tronco_arvores_verde_esquerda_baixo","tronco_arvores_verde_direita_baixo"],
    ["arbusto_verde"   ,"tronco_floresta_verde_esquerda_baixo","tronco_floresta_verde_esquerda_centro_baixo","tronco_floresta_verde_direita_centro_baixo","tronco_floresta_verde_direita_baixo","folha_floresta_verde_esquerda_centro_cima_continua_cima"  ,"folha_floresta_verde_direita_centro_cima_continua_cima"  ],

    ["agua_esquerda_cima" ,"agua_centro_cima","agua_direita_cima" , "agua_canto_esquerda_cima", "agua_canto_direita_cima"],
    ["agua_esquerda"      ,"agua_centro"     ,"agua_direita"      , "agua_canto_esquerda_baixo", "agua_canto_direita_baixo"],
    ["agua_esquerda_baixo","agua_centro_baixo","agua_direita_baixo","agua_canto_diagonal_principal","agua_canto_diagonal_secundaria"],
    
    ["nadando_esquerda_cima" ,"nadando_centro_cima","nadando_direita_cima" , "nadando_canto_esquerda_cima", "nadando_canto_direita_cima"],
    ["nadando_esquerda"      ,"nadando_centro"     ,"nadando_direita"      , "nadando_canto_esquerda_baixo", "nadando_canto_direita_baixo"],
    ["nadando_esquerda_baixo","nadando_centro_baixo","nadando_direita_baixo","nadando_canto_diagonal_principal","nadando_canto_diagonal_secundaria"],    

    ["lobo_direita_baixo" ,"capivara_direita_baixo" ,"tamandua_direita_baixo" ,"macaco_direita_baixo" ,"agua_gota"],
    ["lobo_direita_cima"  ,"capivara_direita_cima"  ,"tamandua_direita_cima"  ,"macaco_direita_cima"  ,"apaga_fogo"],
    ["lobo_esquerda_baixo","capivara_esquerda_baixo","tamandua_esquerda_baixo","macaco_esquerda_baixo","semente"],
    ["lobo_esquerda_cima" ,"capivara_esquerda_cima" ,"tamandua_esquerda_cima" ,"macaco_esquerda_cima" ,"mira"],
]

// nomenclartura dos blocos
/*
    fogo
    cinza
    chao
        BIOMA
    arbusto
        BIOMA
    muda
        BIOMA
    agua
        POSICAO
    nadando
        POSICAO
    tronco
        NOME
        POSICAO
    folha
        NOME
        POSICAO
    ANIMAL
        DIRECAOhORIZONTAL
        DIRECAOvERTICAL
*/


const animalBase = { 
    "nome": "Lobo, o animal base.", 
    "animal": "lobo",
    "dialogo": [
        "ola",
        "parabens",
        "é uma pena"
    ],
    "anda": ["grama"],
    "coleta": ["agua","semente"],

    "direcao": {
        "vertical": "baixo", //cima
        "horizontal": "direita" //esquerda
    },
    "posicao_mira": {
        "x": 1,
        "y": 0
    },
    "posicao": {
        "x": 0,
        "y": 0
    },
    "quantidade": {
        "agua": 0,
        "semente": 0,
        "fogoApagado": 0,
        "plantada": 0,
    },
    "meta": {
        "fogoApagado": 1,
        "plantada": 1
    },
    "estadoDoJogo":"jogando"
}

const tamandua = { 
    "nome": "Tulio, o tamandua bandeira.", 
    "animal": "tamandua",
    "dialogo": [
        "Olá! Eu sou o Túlio Bandeira,o tamanduá , e essa é a Caatinga, um bioma único no mundo. Aqui temos uma vegetação adaptada à seca, com cactos e árvores espinhosas. O clima é semiárido, quente e com pouca chuva. A Caatinga está no Nordeste do Brasil. No entanto, estamos sofrendo com a desertificação e incêndios que estão destruindo nossa vegetação. Você pode ajudar a apagar os incêndios e plantar novas plantas para restaurar a Caatinga?Vamos Juntos!",
        "Obrigado por tudo amigo,a natureza agradece! Agora a Caatinga pode respirar de novo. Esse bioma é o lar de várias espécies que só existem aqui, e é fundamental para o equilíbrio do nosso país. Nós ajudamos a proteger a diversidade do Nordeste e a manter o Brasil como um país riquíssimo em biodiversidade. Valeu mesmo!Nao esqueça que a batalha não acabou,continue contribuindo para o meio ambiente!",
        "Ah não! O tempo se esgotou e não conseguimos salvar a Caatinga. As queimadas estão devastando nosso lar e muitos animais estão em perigo. Mas não desanime! Vamos aprender com essa experiência e voltar mais fortes na próxima tentativa!"
    ],
    "anda": ["grama"],
    "coleta": ["agua","semente"],

    "direcao": {
        "vertical": "baixo", //cima
        "horizontal": "direita" //esquerda
    },
    "posicao_mira": {
        "x": 1,
        "y": 0
    },
    "posicao": {
        "x": 7,
        "y": 11
    },
    "quantidade": {
        "agua": 0,
        "semente": 0,
        "fogoApagado": 0,
        "plantada": 0,
    },
    "meta": {
        "fogoApagado": 24,
        "plantada": 15
    },
    "estadoDoJogo":"jogando"
}

const faseCaatinga = {
    "animal": tamandua,
    "tamanho":{
        "x":30,
        "y":30
    },
    "bioma":"chao_caatinga",
    "objetos":{
        "0":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","22":"folha_arvore_caatinga"},
        "1":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","3":"arbusto_caatinga","8":"agua_esquerda_cima","9":"agua_direita_cima","16":"arbusto_caatinga","17":"arbusto_caatinga","18":"arbusto_caatinga","19":"arbusto_caatinga","20":"arbusto_caatinga","22":"tronco_arvore_caatinga","27":"arbusto_caatinga","28":"arbusto_caatinga"},
        "2":{"0":"arbusto_caatinga","1":"arbusto_caatinga","6":"cacto_cima_caatinga","8":"agua_esquerda_baixo","9":"agua_direita_baixo","12":"folha_arvore_caatinga","15":"arbusto_caatinga","16":"arbusto_caatinga","17":"arbusto_caatinga","18":"arbusto_caatinga","19":"arbusto_caatinga","20":"arbusto_caatinga","21":"arbusto_caatinga","26":"arbusto_caatinga","27":"arbusto_caatinga","28":"arbusto_caatinga","29":"agua_esquerda_cima"},
        "3":{"6":"cacto_baixo_caatinga","12":"tronco_arvore_caatinga","15":"arbusto_caatinga","16":"arbusto_caatinga","20":"arbusto_caatinga","21":"arbusto_caatinga","24":"cacto_cima_caatinga","27":"arbusto_caatinga","28":"arbusto_caatinga","29":"agua_esquerda_baixo"},
        "4":{"3":"folha_arvore_2_caatinga","18":"folha_arvore_caatinga","24":"cacto_baixo_caatinga","28":"arbusto_caatinga"},
        "5":{"3":"tronco_arvore_2_caatinga","13":"cacto_cima_caatinga","18":"tronco_arvore_caatinga"},
        "6":{"4":"fogo","7":"folha_arvore_caatinga","10":"fogo","13":"cacto_baixo_caatinga","27":"folha_arvore_2_caatinga"},
        "7":{"0":"arbusto_caatinga","1":"arbusto_caatinga","3":"fogo","5":"fogo","7":"tronco_arvore_caatinga","9":"fogo","11":"fogo","21":"arbusto_caatinga","22":"arbusto_caatinga","27":"tronco_arvore_2_caatinga"},
        "8":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","4":"fogo","10":"fogo","14":"arbusto_caatinga","15":"arbusto_caatinga","16":"arbusto_caatinga","18":"folha_arvore_2_caatinga","21":"arbusto_caatinga","22":"arbusto_caatinga","23":"arbusto_caatinga"},
        "9":{"1":"arbusto_caatinga","2":"arbusto_caatinga","5":"cacto_cima_caatinga","13":"arbusto_caatinga","14":"arbusto_caatinga","15":"arbusto_caatinga","16":"arbusto_caatinga","18":"tronco_arvore_2_caatinga","21":"arbusto_caatinga","22":"arbusto_caatinga","23":"arbusto_caatinga","29":"arbusto_caatinga"},
        "10":{"5":"cacto_baixo_caatinga","11":"folha_arvore_caatinga","13":"arbusto_caatinga","14":"arbusto_caatinga","15":"arbusto_caatinga","21":"arbusto_caatinga","22":"arbusto_caatinga","28":"arbusto_caatinga","29":"arbusto_caatinga"},
        "11":{"11":"tronco_arvore_caatinga","19":"agua_esquerda_cima","20":"agua_direita_cima","24":"folha_arvore_caatinga","28":"arbusto_caatinga","29":"arbusto_caatinga"},
        "12":{"1":"fogo","6":"arbusto_caatinga","7":"arbusto_caatinga","16":"folha_arvore_caatinga","19":"agua_esquerda_baixo","20":"agua_direita_baixo","24":"tronco_arvore_caatinga"},
        "13":{"0":"fogo","2":"fogo","5":"arbusto_caatinga","6":"arbusto_caatinga","7":"arbusto_caatinga","16":"tronco_arvore_caatinga"},
        "14":{"1":"fogo","5":"arbusto_caatinga","6":"arbusto_caatinga","9":"cacto_cima_caatinga","13":"arbusto_caatinga","14":"arbusto_caatinga","20":"cacto_cima_caatinga","28":"folha_arvore_2_caatinga"},
        "15":{"4":"folha_arvore_caatinga","9":"cacto_baixo_caatinga","12":"arbusto_caatinga","13":"arbusto_caatinga","14":"arbusto_caatinga","20":"cacto_baixo_caatinga","24":"arbusto_caatinga","28":"tronco_arvore_2_caatinga"},
        "16":{"0":"arbusto_caatinga","1":"arbusto_caatinga","4":"tronco_arvore_caatinga","11":"arbusto_caatinga","12":"arbusto_caatinga","13":"arbusto_caatinga","23":"arbusto_caatinga","24":"arbusto_caatinga"},
        "17":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","11":"arbusto_caatinga","12":"arbusto_caatinga","16":"folha_arvore_2_caatinga","19":"fogo","22":"arbusto_caatinga","23":"arbusto_caatinga","24":"arbusto_caatinga","26":"folha_arvore_caatinga"},
        "18":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","9":"agua_esquerda_cima","10":"agua_direita_cima","16":"tronco_arvore_2_caatinga","18":"fogo","20":"fogo","22":"arbusto_caatinga","23":"arbusto_caatinga","26":"tronco_arvore_caatinga"},
        "19":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","6":"cacto_cima_caatinga","9":"agua_esquerda_baixo","10":"agua_direita_baixo","19":"fogo"},
        "20":{"0":"arbusto_caatinga","6":"cacto_baixo_caatinga","13":"folha_arvore_caatinga","19":"cacto_cima_caatinga","25":"fogo"},
        "21":{"13":"tronco_arvore_caatinga","19":"cacto_baixo_caatinga","24":"fogo","26":"fogo"},
        "22":{"2":"folha_arvore_caatinga","9":"folha_arvore_2_caatinga","16":"arbusto_caatinga","17":"arbusto_caatinga","23":"folha_arvore_caatinga","25":"fogo","28":"folha_arvore_2_caatinga"},
        "23":{"2":"tronco_arvore_caatinga","7":"arbusto_caatinga","9":"tronco_arvore_2_caatinga","15":"arbusto_caatinga","16":"arbusto_caatinga","17":"arbusto_caatinga","23":"tronco_arvore_caatinga","28":"tronco_arvore_2_caatinga"},
        "24":{"0":"agua_direita_cima","7":"arbusto_caatinga","8":"arbusto_caatinga","12":"cacto_cima_caatinga","15":"arbusto_caatinga","16":"arbusto_caatinga","17":"arbusto_caatinga","18":"arbusto_caatinga"},
        "25":{"0":"agua_direita","4":"cacto_cima_caatinga","7":"arbusto_caatinga","8":"arbusto_caatinga","9":"arbusto_caatinga","12":"cacto_baixo_caatinga","14":"fogo","15":"fogo","22":"arbusto_caatinga","25":"cacto_cima_caatinga"},
        "26":{"0":"agua_direita_baixo","4":"cacto_baixo_caatinga","8":"arbusto_caatinga","9":"arbusto_caatinga","10":"arbusto_caatinga","14":"fogo","15":"fogo","18":"folha_arvore_caatinga","21":"arbusto_caatinga","22":"arbusto_caatinga","23":"arbusto_caatinga","25":"cacto_baixo_caatinga"},
        "27":{"2":"arbusto_caatinga","7":"folha_arvore_caatinga","9":"arbusto_caatinga","10":"arbusto_caatinga","18":"tronco_arvore_caatinga","21":"arbusto_caatinga","22":"arbusto_caatinga","23":"arbusto_caatinga","28":"arbusto_caatinga","29":"arbusto_caatinga"},
        "28":{"0":"arbusto_caatinga","1":"arbusto_caatinga","2":"arbusto_caatinga","7":"tronco_arvore_caatinga","14":"folha_arvore_2_caatinga","22":"arbusto_caatinga","23":"arbusto_caatinga","27":"arbusto_caatinga","28":"arbusto_caatinga","29":"arbusto_caatinga"},
        "29":{"1":"arbusto_caatinga","2":"arbusto_caatinga","3":"arbusto_caatinga","14":"tronco_arvore_2_caatinga","18":"agua_esquerda_cima","19":"agua_direita_cima","27":"arbusto_caatinga","28":"arbusto_caatinga","29":"arbusto_caatinga"}
    }
}

const lobo = { 
    "nome": "Gui, o lobo guara.", 
    "animal": "lobo",
    "dialogo": [
        "Olá amigão! Eu sou o lobo Gui , o símbolo do Cerrado. Aqui é uma savana, com vegetação de gramíneas e árvores tortuosas. Temos um clima com duas estações bem marcadas: seca e chuvosa. O Cerrado fica no coração do Brasil, abrangendo o Centro-Oeste e parte de outros estados. Mas queimadas têm destruído nosso lar, e precisamos reflorestar. Você pode nos ajudar a combater os incêndios e plantar novas árvores?",
        "Você foi incrível amigão! Obrigado por me ajudar a salvar o Cerrado. Esse bioma é considerado a caixa d’água do Brasil, porque muitas das nossas nascentes vêm daqui. Sem ele, a vida de várias espécies e até do nosso povo seria ameaçada. Nosso esforço garantiu que o Cerrado continue a abastecer o Brasil de água e vida.”Continue com essa missão daqui em diante amigão!",
        "Ah não! O tempo se esgotou e não conseguimos salvar o Cerrado. As queimadas estão se espalhando e nosso lar está em perigo. Mas não desista! Aprendemos lições valiosas nesta fase. Vamos tentar de novo e proteger este bioma tão importante!"
    ],
    "anda": ["grama"],
    "coleta": ["agua","semente"],
    
    "direcao": {
        "vertical": "baixo", //cima
        "horizontal": "direita" //esquerda
    },
    "posicao_mira": {
        "x": 1,
        "y": 0
    },
    "posicao": {
        "x": 19,
        "y": 8
    },
    "quantidade": {
        "agua": 0,
        "semente": 0,
        "fogoApagado": 0,
        "plantada": 0,
    },
    "meta": {
        "fogoApagado": 34,
        "plantada": 15
    },
    "estadoDoJogo":"jogando"
}

const faseCerrado = {
    "animal": lobo,
    "tamanho":{
        "x":25,
        "y":25
    },
    "bioma":"chao_cerrado",
    "objetos":{
        "0":{"0":"arbusto_cerrado","1":"fogo","2":"fogo","3":"arbusto_cerrado","4":"arbusto_cerrado","8":"arbusto_cerrado","9":"arbusto_cerrado","10":"agua_esquerda_baixo","11":"agua_canto_esquerda_baixo","12":"agua_centro","13":"agua_centro","14":"agua_centro","15":"agua_canto_direita_baixo","16":"agua_direita_baixo","21":"arbusto_cerrado","22":"arbusto_cerrado","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "1":{"0":"arbusto_cerrado","1":"fogo","2":"fogo","3":"fogo","9":"arbusto_cerrado","10":"arbusto_cerrado","11":"agua_esquerda_baixo","12":"agua_centro_baixo","13":"agua_centro_baixo","14":"agua_centro_baixo","15":"agua_direita_baixo","17":"folha_esquerda_arvore_grande","18":"folha_arvore_grande","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "2":{"0":"arbusto_cerrado","2":"fogo","5":"folha_esquerda_arvore_grande","6":"folha_arvore_grande","18":"tronco_arvore_grande_cerrado","24":"arbusto_cerrado"},
        "3":{"2":"folhas_arvore_fina_cerrado","6":"tronco_arvore_grande_cerrado","12":"folhas_arvore_fina_cerrado","21":"folha_esquerda_arvore_grande","22":"folha_arvore_grande"},
        "4":{"2":"tronco_arvore_fina_cerrado","7":"arbusto_cerrado","8":"fogo","12":"tronco_arvore_fina_cerrado","17":"arbusto_cerrado","22":"tronco_arvore_grande_cerrado"},
        "5":{"0":"arbusto_cerrado","1":"arbusto_cerrado","7":"fogo","8":"fogo","9":"fogo","16":"agua_esquerda_cima","17":"agua_direita_cima","20":"folhas_arvore_fina_cerrado","23":"fogo"},
        "6":{"0":"arbusto_cerrado","1":"agua_esquerda_cima","2":"agua_centro_cima","3":"agua_direita_cima","6":"folhas_arvore_fina_cerrado","8":"fogo","9":"fogo","10":"arbusto_cerrado","12":"arbusto_cerrado","13":"arbusto_cerrado","14":"arbusto_cerrado","16":"agua_esquerda_baixo","17":"agua_direita_baixo","18":"arbusto_cerrado","20":"tronco_arvore_fina_cerrado","22":"fogo","23":"fogo","24":"fogo"},
        "7":{"0":"arbusto_cerrado","1":"agua_esquerda_baixo","2":"agua_centro_baixo","3":"agua_direita_baixo","6":"tronco_arvore_fina_cerrado","8":"arbusto_cerrado","9":"arbusto_cerrado","13":"arbusto_cerrado","14":"arbusto_cerrado","15":"arbusto_cerrado","23":"fogo","24":"arbusto_cerrado"},
        "8":{"0":"arbusto_cerrado","3":"arbusto_cerrado","4":"arbusto_cerrado","10":"folha_esquerda_arvore_grande","11":"folha_arvore_grande","20":"arbusto_cerrado","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "9":{"2":"folhas_arvore_fina_cerrado","4":"arbusto_cerrado","5":"arbusto_cerrado","11":"tronco_arvore_grande_cerrado","16":"folha_esquerda_arvore_grande","17":"folha_arvore_grande","19":"arbusto_cerrado","20":"arbusto_cerrado","21":"arbusto_cerrado","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "10":{"2":"tronco_arvore_fina_cerrado","4":"arbusto_cerrado","5":"arbusto_cerrado","17":"tronco_arvore_grande_cerrado","19":"arbusto_cerrado","20":"arbusto_cerrado","21":"arbusto_cerrado","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "11":{"0":"agua_direita_cima","5":"arbusto_cerrado","7":"folhas_arvore_fina_cerrado","10":"arbusto_cerrado","11":"arbusto_cerrado","12":"arbusto_cerrado","13":"arbusto_cerrado","14":"arbusto_cerrado","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "12":{"0":"agua_direita","1":"arbusto_cerrado","7":"tronco_arvore_fina_cerrado","9":"arbusto_cerrado","10":"arbusto_cerrado","11":"arbusto_cerrado","12":"arbusto_cerrado","13":"arbusto_cerrado","21":"folhas_arvore_fina_cerrado","24":"arbusto_cerrado"},
        "13":{"0":"agua_direita_baixo","3":"folha_esquerda_arvore_grande","4":"folha_arvore_grande","16":"folhas_arvore_fina_cerrado","19":"arbusto_cerrado","21":"tronco_arvore_fina_cerrado","24":"arbusto_cerrado"},
        "14":{"4":"tronco_arvore_grande_cerrado","6":"agua_esquerda_cima","7":"agua_direita_cima","10":"folha_esquerda_arvore_grande","11":"folha_arvore_grande","16":"tronco_arvore_fina_cerrado","18":"arbusto_cerrado","19":"arbusto_cerrado"},
        "15":{"0":"arbusto_cerrado","1":"arbusto_cerrado","6":"agua_esquerda_baixo","7":"agua_direita_baixo","11":"tronco_arvore_grande_cerrado","18":"fogo","19":"arbusto_cerrado","24":"arbusto_cerrado"},
        "16":{"0":"arbusto_cerrado","1":"arbusto_cerrado","8":"arbusto_cerrado","13":"arbusto_cerrado","14":"arbusto_cerrado","17":"fogo","18":"fogo","19":"fogo","21":"folhas_arvore_fina_cerrado","23":"arbusto_cerrado","24":"arbusto_cerrado"},
        "17":{"0":"arbusto_cerrado","2":"folhas_arvore_fina_cerrado","7":"arbusto_cerrado","8":"arbusto_cerrado","9":"arbusto_cerrado","13":"arbusto_cerrado","14":"arbusto_cerrado","15":"arbusto_cerrado","16":"arbusto_cerrado","17":"fogo","18":"fogo","21":"tronco_arvore_fina_cerrado","23":"agua_esquerda_cima","24":"agua_centro_cima"},
        "18":{"2":"tronco_arvore_fina_cerrado","4":"folha_esquerda_arvore_grande","5":"folha_arvore_grande","7":"arbusto_cerrado","8":"arbusto_cerrado","11":"folhas_arvore_fina_cerrado","15":"arbusto_cerrado","16":"arbusto_cerrado","17":"arbusto_cerrado","18":"arbusto_cerrado","19":"arbusto_cerrado","23":"agua_esquerda_baixo","24":"agua_centro_baixo"},
        "19":{"0":"fogo","5":"tronco_arvore_grande_cerrado","11":"tronco_arvore_fina_cerrado","17":"arbusto_cerrado","18":"arbusto_cerrado","19":"arbusto_cerrado","24":"arbusto_cerrado"},
        "20":{"0":"fogo","1":"fogo","12":"fogo"},
        "21":{"0":"fogo","1":"fogo","2":"arbusto_cerrado","3":"arbusto_cerrado","8":"folhas_arvore_fina_cerrado","11":"fogo","12":"fogo","13":"fogo","15":"folhas_arvore_fina_cerrado","20":"folha_esquerda_arvore_grande","21":"folha_arvore_grande"},
        "22":{"0":"fogo","3":"arbusto_cerrado","4":"arbusto_cerrado","8":"tronco_arvore_fina_cerrado","12":"fogo","15":"tronco_arvore_fina_cerrado","21":"tronco_arvore_grande_cerrado","22":"agua_esquerda_cima","23":"agua_centro_cima","24":"agua_centro_cima"},
        "23":{"1":"folha_esquerda_arvore_grande","2":"folha_arvore_grande","4":"arbusto_cerrado","10":"arbusto_cerrado","11":"arbusto_cerrado","12":"arbusto_cerrado","13":"arbusto_cerrado","18":"arbusto_cerrado","19":"arbusto_cerrado","22":"agua_esquerda","23":"agua_centro","24":"agua_centro"},
        "24":{"2":"tronco_arvore_grande_cerrado","5":"agua_esquerda_cima","6":"agua_direita_cima","9":"arbusto_cerrado","10":"arbusto_cerrado","11":"arbusto_cerrado","12":"arbusto_cerrado","13":"arbusto_cerrado","14":"arbusto_cerrado","17":"arbusto_cerrado","18":"arbusto_cerrado","19":"arbusto_cerrado","20":"arbusto_cerrado","21":"arbusto_cerrado","22":"agua_esquerda","23":"agua_centro","24":"agua_centro"}
    }
}

const capivara = { 
    "nome": "Celina, a capivara.", 
    "animal": "capivara",
    "dialogo": [
        "Oi, eu sou a Celina,sua amiga capivara, o maior roedor do mundo, e estou aqui no Pantanal. Esse é o maior bioma alagado do planeta, com muita água e uma fauna riquíssima, cheia de aves, répteis e mamíferos. O clima é tropical, com estações secas e chuvosas. Estamos no Centro-Oeste, entre Mato Grosso e Mato Grosso do Sul. Mas o Pantanal está pegando fogo e secando! Eu preciso da sua ajuda para apagar os focos de incêndio e replantar o que foi destruído. Você vem comigo?",
        "Conseguimos,Urruuuu! O Pantanal está seguro de novo. Muito obrigado! Esse lugar é importantíssimo para a preservação de espécies e para o equilíbrio do nosso ecossistema. Com sua ajuda, os rios vão continuar a correr e a fauna a florescer. O Pantanal é um orgulho do Brasil, e você fez parte de sua proteção!Obrigada ,e não esqueça de continuar essa batalha,ela não acabou por aqui!",
        "Ah não! O tempo se esgotou e não conseguimos salvar o Cerrado. As queimadas estão se espalhando e nosso lar está em perigo. Mas não desista! Aprendemos lições valiosas nesta fase. Vamos tentar de novo e proteger este bioma tão importante!"
    ],
    "anda": ["grama", "agua"],
    "coleta": ["agua","semente"],

    "direcao": {
        "vertical": "baixo", //cima
        "horizontal": "direita" //esquerda
    },
    "posicao_mira": {
        "x": 1,
        "y": 0
    },
    "posicao": {
        "x": 21,
        "y": 16
    },
    "quantidade": {
        "agua": 0,
        "semente": 0,
        "fogoApagado": 0,
        "plantada": 0,
    },
    "meta": {
        "fogoApagado": 40,
        "plantada": 15
    },
    "estadoDoJogo":"jogando"
}

const fasePantanal = {
    "animal": capivara,
    "tamanho":{
        "x":34,
        "y":34
    },
    "bioma":"chao_verde",
    "objetos":{
        "0":{"0":"folha_arvores_verde_esquerda_cima","1":"folha_arvores_verde_direita_cima","4":"arbusto_verde","5":"arbusto_verde","6":"arbusto_verde","7":"arbusto_verde","8":"fogo","10":"fogo","12":"fogo","21":"arbusto_verde","22":"arbusto_verde","23":"arbusto_verde","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde"},
        "1":{"0":"tronco_arvores_verde_esquerda_baixo","1":"tronco_arvores_verde_direita_baixo","5":"arbusto_verde","6":"arbusto_verde","9":"fogo","11":"fogo","16":"folha_arvores_verde_esquerda_cima","17":"folha_arvores_verde_direita_cima","23":"arbusto_verde","24":"arbusto_verde","29":"folha_arvores_verde_esquerda_cima","30":"folha_arvores_verde_direita_cima"},
        "2":{"16":"tronco_arvores_verde_esquerda_baixo","17":"tronco_arvores_verde_direita_baixo","20":"agua_esquerda_cima","21":"agua_centro_cima","22":"agua_centro_cima","23":"agua_centro_cima","24":"agua_centro_cima","25":"agua_centro_cima","26":"agua_direita_cima","29":"tronco_arvores_verde_esquerda_baixo","30":"tronco_arvores_verde_direita_baixo","33":"fogo"},
        "3":{"2":"agua_esquerda_cima","3":"agua_centro_cima","4":"agua_centro_cima","5":"agua_centro_cima","6":"agua_direita_cima","19":"agua_esquerda_cima","20":"agua_canto_esquerda_cima","21":"agua_centro","22":"agua_centro","23":"agua_centro","24":"agua_centro","25":"agua_centro","26":"agua_canto_direita_cima","27":"agua_direita_cima","32":"fogo"},
        "4":{"2":"agua_esquerda_baixo","3":"agua_canto_esquerda_baixo","4":"agua_centro","5":"agua_canto_direita_baixo","6":"agua_direita_baixo","14":"folha_arvores_verde_esquerda_cima","15":"folha_arvores_verde_direita_cima","18":"agua_esquerda_cima","19":"agua_canto_esquerda_cima","20":"agua_centro","21":"agua_centro","22":"agua_centro","23":"agua_centro","24":"agua_centro","25":"agua_centro","26":"agua_centro","27":"agua_direita","29":"arbusto_verde","30":"arbusto_verde","33":"fogo"},
        "5":{"3":"agua_esquerda_baixo","4":"agua_centro_baixo","5":"agua_direita_baixo","8":"folha_arvores_verde_esquerda_cima","9":"folha_arvores_verde_direita_cima","14":"tronco_arvores_verde_esquerda_baixo","15":"tronco_arvores_verde_direita_baixo","18":"agua_esquerda_baixo","19":"agua_centro_baixo","20":"agua_canto_esquerda_baixo","21":"agua_centro","22":"agua_centro","23":"agua_centro","24":"agua_centro","25":"agua_centro","26":"agua_canto_direita_baixo","27":"agua_direita_baixo","29":"arbusto_verde","30":"arbusto_verde","32":"fogo"},
        "6":{"0":"arbusto_verde","1":"arbusto_verde","8":"tronco_arvores_verde_esquerda_baixo","9":"tronco_arvores_verde_direita_baixo","20":"agua_esquerda_baixo","21":"agua_centro_baixo","22":"agua_canto_esquerda_baixo","23":"agua_centro","24":"agua_centro","25":"agua_canto_direita_baixo","26":"agua_direita_baixo","30":"arbusto_verde","31":"arbusto_verde","33":"fogo"},
        "7":{"0":"arbusto_verde","1":"arbusto_verde","11":"arbusto_verde","12":"arbusto_verde","13":"arbusto_verde","22":"agua_esquerda_baixo","23":"agua_centro_baixo","24":"agua_centro_baixo","25":"agua_direita_baixo","28":"folha_arvores_verde_esquerda_cima","29":"folha_arvores_verde_direita_cima","30":"arbusto_verde","31":"arbusto_verde"},
        "8":{"1":"arbusto_verde","2":"arbusto_verde","4":"folha_arvores_verde_esquerda_cima","5":"folha_arvores_verde_direita_cima","10":"arbusto_verde","11":"arbusto_verde","12":"arbusto_verde","13":"arbusto_verde","14":"arbusto_verde","16":"arbusto_verde","17":"arbusto_verde","18":"arbusto_verde","28":"tronco_arvores_verde_esquerda_baixo","29":"tronco_arvores_verde_direita_baixo"},
        "9":{"1":"arbusto_verde","2":"arbusto_verde","4":"tronco_arvores_verde_esquerda_baixo","5":"tronco_arvores_verde_direita_baixo","18":"arbusto_verde","19":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde"},
        "10":{"0":"fogo","10":"agua_esquerda_cima","11":"agua_centro_cima","12":"agua_centro_cima","13":"agua_centro_cima","14":"agua_centro_cima","15":"agua_direita_cima","19":"arbusto_verde","20":"arbusto_verde","23":"folha_arvores_verde_esquerda_cima","24":"folha_arvores_verde_direita_cima","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde"},
        "11":{"1":"fogo","9":"agua_esquerda_cima","10":"agua_canto_esquerda_cima","11":"agua_centro","12":"agua_centro","13":"agua_centro","14":"agua_centro","15":"agua_canto_direita_cima","16":"agua_centro_cima","17":"agua_direita_cima","23":"tronco_arvores_verde_esquerda_baixo","24":"tronco_arvores_verde_direita_baixo","32":"fogo"},
        "12":{"0":"fogo","9":"agua_esquerda_baixo","10":"agua_canto_esquerda_baixo","11":"agua_centro","12":"agua_centro","13":"agua_centro","14":"agua_centro","15":"agua_centro","16":"agua_centro","17":"agua_direita_baixo","22":"arbusto_verde","27":"folha_arvores_verde_esquerda_cima","28":"folha_arvores_verde_direita_cima"},
        "13":{"1":"fogo","4":"arbusto_verde","5":"arbusto_verde","8":"folha_arvores_verde_esquerda_cima","9":"folha_arvores_verde_direita_cima","10":"agua_esquerda_baixo","11":"agua_centro_baixo","12":"agua_canto_esquerda_baixo","13":"agua_centro","14":"agua_canto_direita_baixo","15":"agua_centro_baixo","16":"agua_direita_baixo","19":"arbusto_verde","27":"tronco_arvores_verde_esquerda_baixo","28":"tronco_arvores_verde_direita_baixo","30":"arbusto_verde","31":"arbusto_verde"},
        "14":{"0":"fogo","4":"arbusto_verde","5":"arbusto_verde","6":"arbusto_verde","8":"tronco_arvores_verde_esquerda_baixo","9":"tronco_arvores_verde_direita_baixo","12":"agua_esquerda_baixo","13":"agua_centro_baixo","14":"agua_direita_baixo","18":"arbusto_verde","20":"folha_arvores_verde_esquerda_cima","21":"folha_arvores_verde_direita_cima","23":"arbusto_verde","24":"arbusto_verde","31":"arbusto_verde","32":"arbusto_verde"},
        "15":{"5":"arbusto_verde","6":"arbusto_verde","20":"tronco_arvores_verde_esquerda_baixo","21":"tronco_arvores_verde_direita_baixo","22":"arbusto_verde","23":"arbusto_verde","26":"agua_esquerda_cima","27":"agua_centro_cima","28":"agua_direita_cima","32":"arbusto_verde"},
        "16":{"14":"arbusto_verde","15":"arbusto_verde","25":"agua_esquerda_cima","26":"agua_canto_esquerda_cima","27":"agua_centro","28":"agua_centro","29":"agua_centro_cima","30":"agua_direita_cima"},
        "17":{"5":"folha_arvores_verde_esquerda_cima","6":"folha_arvores_verde_direita_cima","13":"arbusto_verde","14":"arbusto_verde","15":"arbusto_verde","16":"folha_arvores_verde_esquerda_cima","17":"folha_arvores_verde_direita_cima","25":"agua_esquerda","26":"agua_centro","27":"agua_centro","28":"agua_centro","29":"agua_canto_direita_baixo","30":"agua_direita_baixo","32":"folha_arvores_verde_esquerda_cima","33":"folha_arvores_verde_direita_cima"},
        "18":{"5":"tronco_arvores_verde_esquerda_baixo","6":"tronco_arvores_verde_direita_baixo","10":"folha_arvores_verde_esquerda_cima","11":"folha_arvores_verde_direita_cima","16":"tronco_arvores_verde_esquerda_baixo","17":"tronco_arvores_verde_direita_baixo","24":"agua_esquerda_cima","25":"agua_canto_esquerda_cima","26":"agua_centro","27":"agua_centro","28":"agua_canto_direita_baixo","29":"agua_direita_baixo","32":"tronco_arvores_verde_esquerda_baixo","33":"tronco_arvores_verde_direita_baixo"},
        "19":{"10":"tronco_arvores_verde_esquerda_baixo","11":"tronco_arvores_verde_direita_baixo","23":"agua_esquerda_cima","24":"agua_canto_esquerda_cima","25":"agua_centro","26":"agua_canto_direita_baixo","27":"agua_centro_baixo","28":"agua_direita_baixo"},
        "20":{"3":"agua_esquerda_cima","4":"agua_centro_cima","5":"agua_direita_cima","19":"arbusto_verde","20":"arbusto_verde","23":"agua_esquerda_baixo","24":"agua_centro_baixo","25":"agua_centro_baixo","26":"agua_direita_baixo"},
        "21":{"2":"agua_esquerda_cima","3":"agua_canto_esquerda_cima","4":"agua_centro","5":"agua_canto_direita_cima","6":"agua_direita_cima","13":"fogo","15":"fogo","19":"arbusto_verde","20":"arbusto_verde","28":"folha_arvores_verde_esquerda_cima","29":"folha_arvores_verde_direita_cima"},
        "22":{"2":"agua_esquerda","3":"agua_centro","4":"agua_centro","5":"agua_centro","6":"agua_canto_direita_cima","7":"agua_direita_cima","10":"arbusto_verde","12":"fogo","14":"fogo","16":"fogo","19":"arbusto_verde","20":"arbusto_verde","21":"arbusto_verde","28":"tronco_arvores_verde_esquerda_baixo","29":"tronco_arvores_verde_direita_baixo"},
        "23":{"2":"agua_esquerda_baixo","3":"agua_canto_esquerda_baixo","4":"agua_centro","5":"agua_centro","6":"agua_centro","7":"agua_direita","10":"arbusto_verde","11":"arbusto_verde","13":"fogo","15":"fogo","20":"arbusto_verde","21":"arbusto_verde","32":"fogo"},
        "24":{"3":"agua_esquerda","4":"agua_centro","5":"agua_centro","6":"agua_centro","7":"agua_canto_direita_cima","8":"agua_direita_cima","11":"arbusto_verde","12":"arbusto_verde","13":"arbusto_verde","24":"folha_arvores_verde_esquerda_cima","25":"folha_arvores_verde_direita_cima","31":"fogo","33":"fogo"},
        "25":{"0":"arbusto_verde","3":"agua_esquerda_baixo","4":"agua_centro_baixo","5":"agua_centro_baixo","6":"agua_canto_esquerda_baixo","7":"agua_centro","8":"agua_direita","12":"arbusto_verde","13":"arbusto_verde","24":"tronco_arvores_verde_esquerda_baixo","25":"tronco_arvores_verde_direita_baixo","27":"arbusto_verde","28":"arbusto_verde","32":"fogo"},
        "26":{"0":"arbusto_verde","1":"arbusto_verde","6":"agua_esquerda_baixo","7":"agua_centro_baixo","8":"agua_direita_baixo","11":"folha_arvores_verde_esquerda_cima","12":"folha_arvores_verde_direita_cima","18":"agua_esquerda_cima","19":"agua_centro_cima","20":"agua_centro_cima","21":"agua_direita_cima","27":"arbusto_verde","28":"arbusto_verde","31":"fogo","33":"fogo"},
        "27":{"1":"arbusto_verde","11":"tronco_arvores_verde_esquerda_baixo","12":"tronco_arvores_verde_direita_baixo","16":"agua_esquerda_cima","17":"agua_centro_cima","18":"agua_canto_esquerda_cima","19":"agua_centro","20":"agua_centro","21":"agua_direita","26":"arbusto_verde","27":"arbusto_verde","32":"fogo"},
        "28":{"3":"folha_arvores_verde_esquerda_cima","4":"folha_arvores_verde_direita_cima","15":"agua_esquerda_cima","16":"agua_canto_esquerda_cima","17":"agua_centro","18":"agua_centro","19":"agua_centro","20":"agua_canto_direita_baixo","21":"agua_direita_baixo","29":"agua_esquerda_cima","30":"agua_centro_cima","31":"agua_direita_cima"},
        "29":{"3":"tronco_arvores_verde_esquerda_baixo","4":"tronco_arvores_verde_direita_baixo","15":"agua_esquerda_baixo","16":"agua_canto_esquerda_baixo","17":"agua_centro","18":"agua_centro_baixo","19":"agua_centro_baixo","20":"agua_direita_baixo","24":"folha_arvores_verde_esquerda_cima","25":"folha_arvores_verde_direita_cima","28":"agua_esquerda_cima","29":"agua_canto_esquerda_cima","30":"agua_centro","31":"agua_direita"},
        "30":{"5":"arbusto_verde","6":"arbusto_verde","16":"agua_esquerda_baixo","17":"agua_direita_baixo","24":"tronco_arvores_verde_esquerda_baixo","25":"tronco_arvores_verde_direita_baixo","27":"agua_esquerda_cima","28":"agua_canto_esquerda_cima","29":"agua_canto_direita_baixo","30":"agua_centro_baixo","31":"agua_direita_baixo"},
        "31":{"0":"agua_centro_cima","1":"agua_centro_cima","2":"agua_direita_cima","4":"arbusto_verde","5":"arbusto_verde","6":"arbusto_verde","13":"arbusto_verde","14":"arbusto_verde","27":"agua_esquerda_baixo","28":"agua_centro_baixo","29":"agua_direita_baixo"},
        "32":{"0":"agua_centro","1":"agua_centro","2":"agua_canto_direita_cima","3":"agua_direita_cima","4":"arbusto_verde","5":"arbusto_verde","6":"arbusto_verde","9":"fogo","11":"fogo","14":"arbusto_verde","15":"arbusto_verde","16":"arbusto_verde","17":"arbusto_verde","18":"arbusto_verde","21":"fogo","23":"fogo"},
        "33":{"0":"agua_centro","1":"agua_centro","2":"agua_centro","3":"agua_canto_direita_cima","4":"agua_centro_cima","5":"agua_centro_cima","6":"agua_direita_cima","8":"fogo","10":"fogo","12":"fogo","15":"arbusto_verde","16":"arbusto_verde","17":"arbusto_verde","20":"fogo","22":"fogo","24":"fogo"}
    }
}

const macaco = { 
    "nome": "Zeca, o macaco prego.", 
    "animal": "macaco",
    "dialogo": [
        'Olá querido companheiro, eu sou o macaco Zeca, seu novo amigo, e você está na Amazônia, a maior floresta tropical do mundo! Aqui temos uma biodiversidade gigantesca, com plantas que produzem remédios e animais raros. O clima é quente e úmido, e estamos na região Norte do Brasil. Mas, infelizmente, incêndios e desmatamento estão ameaçando nossa casa. Será que você pode me ajudar a acabar com os focos de incêndio e começar a reflorestar essa área? Juntos, podemos salvar essa floresta!',
        "Ufa! Nós conseguimos querido companheiro! Obrigado por salvar a nossa Amazônia. Esse bioma é o pulmão do mundo, e ele também ajuda a regular o clima do Brasil e do planeta. Graças a você, muitos animais e plantas continuarão a viver. Proteger a Amazônia é proteger o futuro de todos nós! Urruuuu!",
        "Oh não! O tempo acabou e não conseguimos salvar a Amazônia a tempo. As queimadas continuam a devastar nosso lar, e muitas espécies estão em risco. Mas não desanime! Aprendemos com essa experiência. Vamos tentar novamente e lutar pela proteção da floresta!"
    ],
    "anda": ["grama", "arvore"],
    "coleta": ["agua","semente"],
    
    "direcao": {
        "vertical": "baixo", //cima
        "horizontal": "direita" //esquerda
    },
    "posicao_mira": {
        "x": 1,
        "y": 0
    },
    "posicao": {
        "x": 31,
        "y": 14
    },
    "quantidade": {
        "agua": 0,
        "semente": 0,
        "fogoApagado": 0,
        "plantada": 0,
    },
    "meta": {
        "fogoApagado": 42,
        "plantada": 15
    },
    "estadoDoJogo":"jogando"
}

const faseAmazonia = {
    "animal": macaco,
    "tamanho":{
        "x":40,
        "y":40
    },
    "bioma":"chao_verde",
    "objetos":{"0":{"0":"agua_centro","1":"agua_canto_direita_baixo","2":"agua_centro_baixo","3":"agua_centro_baixo","4":"agua_centro_baixo","5":"agua_centro_baixo","6":"agua_centro_baixo","7":"agua_centro_baixo","8":"agua_centro_baixo","9":"agua_centro_baixo","10":"agua_centro_baixo","11":"agua_centro_baixo","12":"agua_centro_baixo","13":"agua_centro_baixo","14":"agua_centro_baixo","15":"agua_centro_baixo","16":"agua_centro_baixo","17":"agua_centro_baixo","18":"agua_centro_baixo","19":"agua_centro_baixo","20":"agua_centro_baixo","21":"agua_canto_esquerda_baixo","22":"agua_centro","23":"agua_canto_direita_baixo","24":"agua_centro_baixo","25":"agua_centro_baixo","26":"agua_centro_baixo","27":"agua_centro_baixo","28":"agua_centro_baixo","29":"agua_centro_baixo","30":"agua_centro_baixo","31":"agua_centro_baixo","32":"agua_centro_baixo","33":"agua_centro_baixo","34":"agua_centro_baixo","35":"agua_centro_baixo","36":"agua_centro_baixo","37":"agua_centro_baixo","38":"agua_canto_esquerda_baixo","39":"agua_centro"},
        "1":{"0":"agua_centro_baixo","1":"agua_direita_baixo","5":"folha_floresta_verde_esquerda_cima","6":"folha_floresta_verde_esquerda_centro_cima","7":"folha_floresta_verde_esquerda_centro_cima","8":"folha_floresta_verde_esquerda_centro_cima","9":"folha_floresta_verde_esquerda_centro_cima","10":"folha_floresta_verde_esquerda_centro_cima","11":"folha_floresta_verde_esquerda_centro_cima","12":"folha_floresta_verde_esquerda_centro_cima","13":"folha_floresta_verde_esquerda_centro_cima","14":"folha_floresta_verde_direita_cima","21":"agua_esquerda_baixo","22":"agua_centro_baixo","23":"agua_direita_baixo","24":"arbusto_verde","25":"arbusto_verde","38":"agua_esquerda_baixo","39":"agua_canto_esquerda_baixo"},
        "2":{"3":"folha_floresta_verde_esquerda_cima","4":"folha_floresta_verde_esquerda_centro_cima","5":"folha_floresta_verde_esquerda_centro_cima_continua_cima","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_direita_centro_cima_continua_cima","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_esquerda_centro_cima","17":"folha_floresta_verde_esquerda_centro_cima","18":"folha_floresta_verde_direita_cima","19":"arbusto_verde","20":"arbusto_verde","21":"arbusto_verde","23":"arbusto_verde","24":"arbusto_verde","25":"arbusto_verde","26":"folha_floresta_verde_esquerda_cima","27":"folha_floresta_verde_direita_centro_cima","28":"folha_floresta_verde_esquerda_centro_cima","29":"folha_floresta_verde_esquerda_centro_cima","30":"folha_floresta_verde_esquerda_centro_cima","31":"folha_floresta_verde_esquerda_centro_cima","32":"folha_floresta_verde_esquerda_centro_cima","33":"folha_floresta_verde_esquerda_centro_cima","34":"folha_floresta_verde_esquerda_centro_cima","35":"folha_floresta_verde_direita_cima","39":"agua_esquerda"},
        "3":{"2":"folha_floresta_verde_esquerda_cima","3":"folha_floresta_verde_esquerda_centro","4":"folha_floresta_verde_esquerda_centro","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"folha_floresta_verde_esquerda_centro","16":"folha_floresta_verde_esquerda_centro","17":"folha_floresta_verde_esquerda_centro","18":"folha_floresta_verde_direita_centro_cima_continua_cima","19":"folha_floresta_verde_esquerda_centro_cima","20":"folha_floresta_verde_direita_cima","22":"arbusto_verde","23":"arbusto_verde","25":"arbusto_verde","26":"folha_floresta_verde_esquerda","27":"folha_floresta_verde_direita_centro","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"folha_floresta_verde_esquerda_centro","35":"folha_floresta_verde_direita_centro_cima_continua_cima","36":"folha_floresta_verde_esquerda_centro_cima","37":"folha_floresta_verde_direita_cima","39":"agua_esquerda"},
        "4":{"1":"folha_floresta_verde_esquerda_cima","2":"folha_floresta_verde_esquerda_centro","3":"folha_floresta_verde_esquerda_centro","4":"folha_floresta_verde_esquerda_centro","5":"tronco_floresta_verde_esquerda_baixo","6":"tronco_floresta_verde_esquerda_centro_baixo","7":"tronco_floresta_verde_esquerda_centro_baixo","8":"tronco_floresta_verde_esquerda_centro_baixo","9":"tronco_floresta_verde_direita_baixo","10":"folha_floresta_verde_direita_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"tronco_floresta_verde_esquerda_baixo","15":"tronco_floresta_verde_esquerda_centro_baixo","16":"tronco_floresta_verde_esquerda_centro_baixo","17":"tronco_floresta_verde_esquerda_centro_baixo","18":"tronco_floresta_verde_direita_centro_baixo","19":"tronco_floresta_verde_esquerda_centro_baixo","20":"tronco_floresta_verde_direita_baixo","21":"folha_floresta_verde_direita_centro_cima","22":"folha_floresta_verde_esquerda_centro_cima","23":"folha_floresta_verde_direita_cima","24":"arbusto_verde","25":"arbusto_verde","26":"tronco_arvores_verde_esquerda_baixo","27":"tronco_floresta_verde_direita_baixo","28":"folha_floresta_verde_direita_centro","29":"folha_floresta_verde_esquerda_centro","30":"tronco_floresta_verde_esquerda_baixo","31":"tronco_floresta_verde_esquerda_centro_baixo","32":"tronco_floresta_verde_esquerda_centro_baixo","33":"tronco_floresta_verde_esquerda_centro_baixo","34":"tronco_floresta_verde_esquerda_centro_baixo","35":"tronco_floresta_verde_direita_baixo","36":"folha_floresta_verde_direita_centro","37":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "5":{"1":"folha_floresta_verde_esquerda","2":"folha_floresta_verde_esquerda_centro","3":"folha_floresta_verde_esquerda_centro","4":"tronco_floresta_verde_esquerda_baixo","5":"tronco_arvores_verde_direita_baixo","7":"fogo","9":"tronco_arvores_verde_esquerda_baixo","10":"tronco_floresta_verde_direita_baixo","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"tronco_floresta_verde_esquerda_baixo","14":"tronco_arvores_verde_direita_baixo","16":"fogo","18":"fogo","20":"tronco_arvores_verde_esquerda_baixo","21":"tronco_floresta_verde_direita_baixo","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"tronco_arvores_verde_esquerda_baixo","28":"tronco_floresta_verde_direita_baixo","29":"folha_floresta_verde_direita_centro","30":"folha_floresta_verde_direita","32":"fogo","35":"folha_floresta_verde_esquerda","36":"folha_floresta_verde_direita_centro","37":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "6":{"1":"folha_floresta_verde_esquerda","2":"folha_floresta_verde_direita_centro","3":"folha_floresta_verde_esquerda_centro","4":"folha_floresta_verde_direita","6":"fogo","8":"fogo","10":"folha_floresta_verde_esquerda","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_direita","15":"fogo","19":"fogo","21":"folha_floresta_verde_esquerda","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","28":"folha_floresta_verde_esquerda","29":"folha_floresta_verde_direita_centro","30":"folha_floresta_verde_direita","31":"fogo","33":"fogo","35":"folha_floresta_verde_esquerda","36":"folha_floresta_verde_direita_centro","37":"folha_floresta_verde_direita_centro_cima_continua_cima","38":"folha_floresta_verde_direita_cima","39":"agua_esquerda"},
        "7":{"1":"tronco_arvores_verde_esquerda_baixo","2":"tronco_floresta_verde_direita_baixo","3":"folha_floresta_verde_direita_centro","4":"folha_floresta_verde_direita_centro_cima_continua_cima","5":"folha_floresta_verde_direita_cima","7":"fogo","9":"folha_floresta_verde_esquerda_cima","10":"folha_floresta_verde_esquerda_centro_cima_continua_cima","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_direita_centro_cima_continua_cima","14":"folha_floresta_verde_direita_cima","16":"fogo","18":"fogo","21":"folha_floresta_verde_esquerda","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","28":"tronco_arvores_verde_esquerda_baixo","29":"tronco_floresta_verde_direita_baixo","30":"folha_floresta_verde_direita","32":"fogo","35":"tronco_arvores_verde_esquerda_baixo","36":"tronco_floresta_verde_direita_baixo","37":"folha_floresta_verde_esquerda_centro","38":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "8":{"0":"arbusto_verde","2":"folha_floresta_verde_esquerda","3":"folha_floresta_verde_direita_centro","4":"folha_floresta_verde_esquerda_centro","5":"folha_floresta_verde_direita_centro_cima_continua_cima","6":"folha_floresta_verde_esquerda_centro_cima","7":"folha_floresta_verde_esquerda_centro_cima","8":"folha_floresta_verde_esquerda_centro_cima","9":"folha_floresta_verde_esquerda_centro_cima_continua_cima","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_direita_centro_cima_continua_cima","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_direita_cima","20":"folha_floresta_verde_esquerda_cima","21":"folha_floresta_verde_esquerda_centro","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","29":"tronco_arvores_verde_esquerda_baixo","30":"tronco_floresta_verde_direita_baixo","31":"folha_floresta_verde_direita_cima","36":"folha_floresta_verde_esquerda","37":"folha_floresta_verde_esquerda_centro","38":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "9":{"0":"arbusto_verde","2":"folha_floresta_verde_esquerda","3":"folha_floresta_verde_direita_centro","4":"folha_floresta_verde_esquerda_centro","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"folha_floresta_verde_esquerda_centro","16":"folha_floresta_verde_direita_centro_cima_continua_cima","17":"folha_floresta_verde_esquerda_centro_cima","18":"folha_floresta_verde_esquerda_centro_cima","19":"folha_floresta_verde_esquerda_centro_cima","20":"folha_floresta_verde_esquerda_centro","21":"folha_floresta_verde_esquerda_centro","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde","30":"folha_floresta_verde_esquerda","31":"folha_floresta_verde_direita","34":"fogo","36":"folha_floresta_verde_esquerda","37":"folha_floresta_verde_esquerda_centro","38":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "10":{"0":"arbusto_verde","1":"arbusto_verde","2":"tronco_arvores_verde_esquerda_baixo","3":"tronco_floresta_verde_direita_baixo","4":"folha_floresta_verde_direita_centro","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"tronco_floresta_verde_esquerda_baixo","9":"tronco_floresta_verde_esquerda_centro_baixo","10":"tronco_floresta_verde_esquerda_centro_baixo","11":"tronco_floresta_verde_esquerda_centro_baixo","12":"tronco_floresta_verde_direita_baixo","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"folha_floresta_verde_esquerda_centro","16":"folha_floresta_verde_esquerda_centro","17":"folha_floresta_verde_direita_centro","18":"folha_floresta_verde_esquerda_centro","19":"folha_floresta_verde_esquerda_centro","20":"folha_floresta_verde_esquerda_centro","21":"folha_floresta_verde_esquerda_centro","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde","30":"folha_floresta_verde_esquerda","31":"folha_floresta_verde_direita_centro","32":"folha_floresta_verde_direita_cima","36":"folha_floresta_verde_esquerda","37":"tronco_floresta_verde_esquerda_baixo","38":"tronco_arvores_verde_direita_baixo","39":"agua_esquerda"},
        "11":{"0":"arbusto_verde","1":"arbusto_verde","3":"tronco_arvores_verde_esquerda_baixo","4":"tronco_floresta_verde_direita_baixo","5":"folha_floresta_verde_direita_centro","6":"folha_floresta_verde_direita_centro","7":"tronco_floresta_verde_esquerda_baixo","8":"tronco_arvores_verde_direita_baixo","12":"tronco_arvores_verde_esquerda_baixo","13":"tronco_floresta_verde_esquerda_centro_baixo","14":"tronco_floresta_verde_esquerda_centro_baixo","15":"tronco_floresta_verde_esquerda_centro_baixo","16":"tronco_floresta_verde_esquerda_centro_baixo","17":"tronco_floresta_verde_direita_baixo","18":"folha_floresta_verde_esquerda_centro","19":"folha_floresta_verde_esquerda_centro","20":"folha_floresta_verde_esquerda_centro","21":"folha_floresta_verde_esquerda_centro","22":"tronco_floresta_verde_esquerda_baixo","23":"tronco_arvores_verde_direita_baixo","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde","30":"tronco_arvores_verde_esquerda_baixo","31":"tronco_floresta_verde_direita_baixo","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro_cima","34":"folha_floresta_verde_esquerda_centro_cima","35":"folha_floresta_verde_esquerda_centro_cima","36":"tronco_floresta_verde_esquerda_baixo","37":"tronco_arvores_verde_direita_baixo","39":"agua_esquerda"},
        "12":{"0":"arbusto_verde","1":"arbusto_verde","2":"arbusto_verde","3":"arbusto_verde","4":"tronco_arvores_verde_esquerda_baixo","5":"tronco_floresta_verde_direita_baixo","6":"folha_floresta_verde_direita_centro","7":"folha_floresta_verde_direita","9":"fogo","11":"fogo","17":"folha_floresta_verde_esquerda","18":"folha_floresta_verde_esquerda_centro","19":"folha_floresta_verde_esquerda_centro","20":"folha_floresta_verde_esquerda_centro","21":"tronco_floresta_verde_esquerda_baixo","22":"tronco_arvores_verde_direita_baixo","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","31":"tronco_arvores_verde_esquerda_baixo","32":"tronco_floresta_verde_esquerda_centro_baixo","33":"tronco_floresta_verde_esquerda_centro_baixo","34":"tronco_floresta_verde_esquerda_centro_baixo","35":"tronco_floresta_verde_esquerda_centro_baixo","36":"tronco_arvores_verde_direita_baixo","39":"agua_esquerda"},
        "13":{"3":"arbusto_verde","5":"folha_floresta_verde_esquerda","6":"folha_floresta_verde_direita_centro","7":"folha_floresta_verde_direita_centro_cima_continua_cima","8":"folha_floresta_verde_direita_cima","10":"fogo","14":"folha_floresta_verde_esquerda_cima","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_esquerda_centro_cima","17":"folha_floresta_verde_esquerda_centro_cima_continua_cima","18":"folha_floresta_verde_esquerda_centro","19":"folha_floresta_verde_esquerda_centro","20":"tronco_floresta_verde_esquerda_baixo","21":"tronco_arvores_verde_direita_baixo","30":"arbusto_verde","31":"arbusto_verde","38":"agua_esquerda_cima","39":"agua_canto_esquerda_cima"},
        "14":{"0":"agua_centro_cima","1":"agua_direita_cima","3":"arbusto_verde","4":"arbusto_verde","5":"tronco_arvores_verde_esquerda_baixo","6":"tronco_floresta_verde_direita_baixo","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_direita_centro_cima_continua_cima","9":"folha_floresta_verde_esquerda_centro_cima","10":"folha_floresta_verde_esquerda_centro_cima","11":"folha_floresta_verde_esquerda_centro_cima","12":"folha_floresta_verde_esquerda_centro_cima","13":"folha_floresta_verde_esquerda_centro_cima","14":"folha_floresta_verde_esquerda_centro_cima_continua_cima","15":"folha_floresta_verde_esquerda_centro","16":"tronco_floresta_verde_esquerda_baixo","17":"tronco_floresta_verde_esquerda_centro_baixo","18":"tronco_floresta_verde_esquerda_centro_baixo","19":"tronco_floresta_verde_esquerda_centro_baixo","20":"tronco_arvores_verde_direita_baixo","24":"folha_floresta_verde_esquerda_cima","25":"folha_floresta_verde_esquerda_centro_cima","26":"folha_floresta_verde_direita_cima","30":"arbusto_verde","31":"arbusto_verde","32":"arbusto_verde","33":"arbusto_verde","34":"arbusto_verde","35":"arbusto_verde","36":"arbusto_verde","37":"agua_esquerda_cima","38":"agua_canto_esquerda_cima","39":"agua_centro"},
        "15":{"0":"agua_centro","1":"agua_canto_direita_cima","2":"agua_direita_cima","4":"arbusto_verde","5":"arbusto_verde","6":"tronco_arvores_verde_esquerda_baixo","7":"tronco_floresta_verde_esquerda_centro_baixo","8":"tronco_floresta_verde_direita_centro_baixo","9":"tronco_floresta_verde_esquerda_centro_baixo","10":"tronco_floresta_verde_esquerda_centro_baixo","11":"tronco_floresta_verde_esquerda_centro_baixo","12":"tronco_floresta_verde_esquerda_centro_baixo","13":"tronco_floresta_verde_esquerda_centro_baixo","14":"tronco_floresta_verde_esquerda_centro_baixo","15":"tronco_floresta_verde_esquerda_centro_baixo","16":"tronco_arvores_verde_direita_baixo","23":"folha_floresta_verde_esquerda_cima","24":"folha_floresta_verde_esquerda_centro","25":"folha_floresta_verde_esquerda_centro","26":"folha_floresta_verde_esquerda_centro","27":"folha_floresta_verde_esquerda_centro","28":"folha_floresta_verde_esquerda_centro_cima","29":"folha_floresta_verde_esquerda_centro_cima","30":"folha_floresta_verde_direita_cima","35":"arbusto_verde","36":"arbusto_verde","37":"agua_esquerda_baixo","38":"agua_canto_esquerda_baixo","39":"agua_centro"},
        "16":{"0":"agua_centro","1":"agua_centro","2":"agua_canto_direita_cima","3":"agua_direita_cima","5":"arbusto_verde","6":"arbusto_verde","7":"arbusto_verde","8":"arbusto_verde","18":"folha_arvores_verde_esquerda_cima","19":"folha_floresta_verde_esquerda_centro_cima","20":"folha_floresta_verde_esquerda_centro_cima","21":"folha_floresta_verde_direita_cima","23":"folha_floresta_verde_esquerda","24":"folha_floresta_verde_esquerda_centro","25":"folha_floresta_verde_esquerda_centro","26":"folha_floresta_verde_esquerda_centro","27":"folha_floresta_verde_esquerda_centro","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro_cima","32":"folha_floresta_verde_esquerda_centro_cima","33":"folha_floresta_verde_esquerda_centro_cima","34":"folha_floresta_verde_direita_cima","38":"agua_esquerda_baixo","39":"agua_canto_esquerda_baixo"},
        "17":{"0":"agua_centro","1":"agua_centro","2":"agua_canto_direita_baixo","3":"agua_direita_baixo","7":"arbusto_verde","8":"arbusto_verde","9":"folha_floresta_verde_esquerda_cima","10":"folha_floresta_verde_esquerda_centro_cima","11":"folha_floresta_verde_esquerda_centro_cima","12":"folha_floresta_verde_esquerda_centro_cima","13":"folha_floresta_verde_esquerda_centro_cima","14":"folha_floresta_verde_esquerda_centro_cima","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_esquerda_centro_cima","17":"folha_floresta_verde_esquerda_centro_cima","18":"folha_floresta_verde_esquerda_centro_cima_continua_cima","19":"folha_floresta_verde_esquerda_centro_cima","20":"folha_floresta_verde_esquerda_centro","21":"folha_floresta_verde_direita","23":"folha_floresta_verde_esquerda","24":"folha_floresta_verde_esquerda_centro","25":"folha_floresta_verde_esquerda_centro","26":"folha_floresta_verde_esquerda_centro","27":"folha_floresta_verde_esquerda_centro","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"folha_floresta_verde_esquerda_centro","35":"folha_floresta_verde_direita_cima","39":"agua_esquerda"},
        "18":{"0":"agua_centro_baixo","1":"agua_centro_baixo","2":"agua_direita_baixo","4":"folha_floresta_verde_esquerda_cima","5":"folha_floresta_verde_esquerda_centro_cima","6":"folha_floresta_verde_direita_cima","9":"tronco_arvores_verde_esquerda_baixo","10":"tronco_floresta_verde_esquerda_centro_baixo","11":"tronco_floresta_verde_esquerda_centro_baixo","12":"tronco_floresta_verde_esquerda_centro_baixo","13":"tronco_floresta_verde_esquerda_centro_baixo","14":"tronco_floresta_verde_esquerda_centro_baixo","15":"tronco_floresta_verde_esquerda_centro_baixo","16":"tronco_floresta_verde_esquerda_centro_baixo","17":"tronco_floresta_verde_esquerda_centro_baixo","18":"tronco_floresta_verde_esquerda_centro_baixo","19":"tronco_floresta_verde_esquerda_centro_baixo","20":"tronco_floresta_verde_esquerda_centro_baixo","21":"tronco_arvores_verde_direita_baixo","23":"tronco_arvores_verde_esquerda_baixo","24":"tronco_floresta_verde_direita_baixo","25":"folha_floresta_verde_esquerda_centro","26":"folha_floresta_verde_esquerda_centro","27":"folha_floresta_verde_esquerda_centro","28":"tronco_floresta_verde_esquerda_baixo","29":"tronco_floresta_verde_esquerda_centro_baixo","30":"tronco_floresta_verde_esquerda_centro_baixo","31":"tronco_floresta_verde_esquerda_centro_baixo","32":"tronco_floresta_verde_esquerda_centro_baixo","33":"tronco_floresta_verde_direita_baixo","34":"folha_floresta_verde_direita_centro","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro_cima","37":"folha_floresta_verde_direita_cima","39":"agua_esquerda"},
        "19":{"3":"folha_floresta_verde_esquerda_cima","4":"folha_floresta_verde_esquerda_centro","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_direita_cima","24":"tronco_arvores_verde_esquerda_baixo","25":"tronco_floresta_verde_direita_baixo","26":"folha_floresta_verde_esquerda_centro","27":"folha_floresta_verde_esquerda_centro","28":"folha_floresta_verde_direita","33":"tronco_arvores_verde_esquerda_baixo","34":"tronco_floresta_verde_direita_baixo","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro","37":"folha_floresta_verde_esquerda_centro","38":"folha_floresta_verde_direita_cima","39":"agua_esquerda"},
        "20":{"2":"folha_floresta_verde_esquerda_cima","3":"folha_floresta_verde_esquerda_centro","4":"folha_floresta_verde_esquerda_centro","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro_cima","11":"folha_floresta_verde_esquerda_centro_cima","12":"folha_floresta_verde_esquerda_centro_cima","13":"folha_floresta_verde_esquerda_centro_cima","14":"folha_floresta_verde_esquerda_centro_cima","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_esquerda_centro_cima","17":"folha_floresta_verde_esquerda_centro_cima","18":"folha_floresta_verde_esquerda_centro_cima","19":"folha_floresta_verde_direita_centro_cima","20":"folha_floresta_verde_direita_cima","24":"arbusto_verde","25":"tronco_arvores_verde_esquerda_baixo","26":"tronco_floresta_verde_esquerda_centro_baixo","27":"tronco_floresta_verde_direita_baixo","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_direita_cima","31":"fogo","34":"folha_floresta_verde_esquerda","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro","37":"folha_floresta_verde_esquerda_centro","38":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "21":{"0":"arbusto_verde","2":"folha_floresta_verde_esquerda","3":"folha_floresta_verde_esquerda_centro","4":"folha_floresta_verde_esquerda_centro","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_direita_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"tronco_floresta_verde_esquerda_baixo","16":"tronco_floresta_verde_esquerda_centro_baixo","17":"tronco_floresta_verde_esquerda_centro_baixo","18":"tronco_floresta_verde_esquerda_centro_baixo","19":"tronco_floresta_verde_direita_baixo","20":"folha_floresta_verde_direita_centro_cima_continua_cima","21":"folha_floresta_verde_direita_centro_cima","22":"folha_floresta_verde_esquerda_centro_cima","23":"folha_floresta_verde_direita_cima","24":"arbusto_verde","25":"arbusto_verde","27":"tronco_arvores_verde_esquerda_baixo","28":"tronco_floresta_verde_direita_baixo","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_direita_cima","33":"fogo","34":"folha_floresta_verde_esquerda","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro","37":"tronco_floresta_verde_esquerda_baixo","38":"tronco_arvores_verde_direita_baixo","39":"agua_esquerda"},
        "22":{"0":"arbusto_verde","2":"folha_floresta_verde_esquerda","3":"folha_floresta_verde_esquerda_centro","4":"folha_floresta_verde_esquerda_centro","5":"tronco_floresta_verde_esquerda_baixo","6":"tronco_floresta_verde_esquerda_centro_baixo","7":"tronco_floresta_verde_esquerda_centro_baixo","8":"tronco_floresta_verde_esquerda_centro_baixo","9":"tronco_floresta_verde_direita_baixo","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_direita_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"tronco_floresta_verde_esquerda_baixo","15":"tronco_arvores_verde_direita_baixo","19":"tronco_arvores_verde_esquerda_baixo","20":"tronco_floresta_verde_direita_centro_baixo","21":"tronco_floresta_verde_direita_baixo","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita_centro","24":"folha_floresta_verde_direita_cima","25":"arbusto_verde","26":"arbusto_verde","28":"tronco_arvores_verde_esquerda_baixo","29":"tronco_floresta_verde_direita_baixo","30":"folha_floresta_verde_direita","32":"fogo","33":"fogo","34":"folha_floresta_verde_esquerda","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro","37":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "23":{"0":"arbusto_verde","2":"folha_floresta_verde_esquerda","3":"folha_floresta_verde_esquerda_centro","4":"tronco_floresta_verde_esquerda_baixo","5":"tronco_arvores_verde_direita_baixo","9":"tronco_arvores_verde_esquerda_baixo","10":"tronco_floresta_verde_esquerda_centro_baixo","11":"tronco_floresta_verde_direita_baixo","12":"folha_floresta_verde_direita_centro","13":"tronco_floresta_verde_esquerda_baixo","14":"tronco_arvores_verde_direita_baixo","16":"fogo","21":"tronco_arvores_verde_esquerda_baixo","22":"tronco_floresta_verde_esquerda_centro_baixo","23":"tronco_floresta_verde_direita_baixo","24":"folha_floresta_verde_direita_centro_cima_continua_cima","25":"folha_floresta_verde_direita_cima","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde","29":"folha_floresta_verde_esquerda","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_direita_cima","34":"folha_floresta_verde_esquerda","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro","37":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "24":{"0":"arbusto_verde","2":"folha_floresta_verde_esquerda","3":"folha_floresta_verde_direita_centro","4":"folha_floresta_verde_direita","6":"fogo","11":"tronco_arvores_verde_esquerda_baixo","12":"tronco_floresta_verde_direita_baixo","13":"folha_floresta_verde_direita","15":"fogo","17":"fogo","23":"folha_floresta_verde_esquerda","24":"folha_floresta_verde_direita_centro","25":"folha_floresta_verde_direita","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde","29":"folha_floresta_verde_esquerda","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro_cima","33":"folha_floresta_verde_esquerda_centro_cima","34":"folha_floresta_verde_esquerda_centro","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_esquerda_centro","37":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "25":{"0":"arbusto_verde","1":"arbusto_verde","2":"tronco_arvores_verde_esquerda_baixo","3":"tronco_floresta_verde_direita_baixo","4":"folha_floresta_verde_direita_centro","5":"folha_floresta_verde_direita_cima","9":"fogo","12":"folha_floresta_verde_esquerda","13":"folha_floresta_verde_direita","16":"fogo","19":"fogo","23":"folha_floresta_verde_esquerda","24":"tronco_floresta_verde_esquerda_baixo","25":"tronco_arvores_verde_direita_baixo","26":"arbusto_verde","27":"arbusto_verde","28":"arbusto_verde","29":"folha_floresta_verde_esquerda","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"folha_floresta_verde_esquerda_centro","35":"folha_floresta_verde_esquerda_centro","36":"tronco_floresta_verde_esquerda_baixo","37":"tronco_arvores_verde_direita_baixo","39":"agua_esquerda"},
        "26":{"1":"arbusto_verde","3":"tronco_arvores_verde_esquerda_baixo","4":"tronco_floresta_verde_direita_baixo","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_direita_cima","8":"fogo","10":"fogo","12":"folha_floresta_verde_esquerda","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_direita_cima","18":"fogo","20":"fogo","23":"folha_floresta_verde_esquerda","24":"folha_floresta_verde_direita","26":"arbusto_verde","27":"arbusto_verde","29":"folha_floresta_verde_esquerda","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"folha_floresta_verde_esquerda_centro","35":"folha_floresta_verde_esquerda_centro","36":"folha_floresta_verde_direita","39":"agua_esquerda"},
        "27":{"1":"arbusto_verde","4":"folha_floresta_verde_esquerda","5":"folha_floresta_verde_esquerda_centro","6":"folha_floresta_verde_direita","9":"fogo","12":"folha_floresta_verde_esquerda","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_direita_cima","19":"fogo","23":"folha_floresta_verde_esquerda","24":"folha_floresta_verde_direita","25":"arbusto_verde","26":"arbusto_verde","27":"arbusto_verde","28":"folha_floresta_verde_esquerda_cima","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"tronco_floresta_verde_esquerda_baixo","35":"tronco_floresta_verde_esquerda_centro_baixo","36":"tronco_arvores_verde_direita_baixo","38":"agua_esquerda_cima","39":"agua_canto_esquerda_cima"},
        "28":{"1":"arbusto_verde","4":"folha_floresta_verde_esquerda","5":"folha_floresta_verde_direita_centro","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro_cima","8":"folha_floresta_verde_esquerda_centro_cima","9":"folha_floresta_verde_esquerda_centro_cima","10":"folha_floresta_verde_esquerda_centro_cima","11":"folha_floresta_verde_esquerda_centro_cima","12":"folha_floresta_verde_esquerda_centro_cima_continua_cima","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"folha_floresta_verde_esquerda_centro","16":"folha_floresta_verde_esquerda_centro","17":"folha_floresta_verde_esquerda_centro_cima","18":"folha_floresta_verde_esquerda_centro_cima","19":"folha_floresta_verde_direita_cima","23":"folha_floresta_verde_esquerda","24":"folha_floresta_verde_direita","26":"arbusto_verde","28":"folha_floresta_verde_esquerda","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"folha_floresta_verde_direita","37":"agua_esquerda_cima","38":"agua_canto_esquerda_cima","39":"agua_centro"},
        "29":{"1":"arbusto_verde","4":"tronco_arvores_verde_esquerda_baixo","5":"tronco_floresta_verde_direita_baixo","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"folha_floresta_verde_esquerda_centro","16":"folha_floresta_verde_esquerda_centro","17":"folha_floresta_verde_esquerda_centro","18":"folha_floresta_verde_esquerda_centro","19":"folha_floresta_verde_esquerda_centro","20":"folha_floresta_verde_direita_centro_cima","21":"folha_floresta_verde_esquerda_centro_cima","22":"folha_floresta_verde_esquerda_centro_cima","23":"tronco_floresta_verde_esquerda_baixo","24":"tronco_arvores_verde_direita_baixo","25":"arbusto_verde","26":"arbusto_verde","27":"folha_floresta_verde_esquerda_cima","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_esquerda_centro","34":"folha_floresta_verde_direita","37":"agua_esquerda","38":"agua_centro","39":"agua_centro"},
        "30":{"1":"arbusto_verde","2":"arbusto_verde","5":"folha_floresta_verde_esquerda","6":"folha_floresta_verde_esquerda_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"folha_floresta_verde_esquerda_centro","15":"tronco_floresta_verde_esquerda_baixo","16":"tronco_floresta_verde_esquerda_centro_baixo","17":"tronco_floresta_verde_esquerda_centro_baixo","18":"tronco_floresta_verde_esquerda_centro_baixo","19":"tronco_floresta_verde_esquerda_centro_baixo","20":"tronco_floresta_verde_direita_baixo","21":"folha_floresta_verde_esquerda_centro","22":"folha_floresta_verde_esquerda_centro","23":"folha_floresta_verde_direita","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"folha_floresta_verde_esquerda","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro","32":"folha_floresta_verde_esquerda_centro","33":"folha_floresta_verde_direita_centro","34":"folha_floresta_verde_direita","37":"agua_esquerda_baixo","38":"agua_canto_esquerda_baixo","39":"agua_centro"},
        "31":{"2":"arbusto_verde","3":"arbusto_verde","5":"folha_floresta_verde_esquerda","6":"folha_floresta_verde_direita_centro","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro","14":"tronco_floresta_verde_esquerda_baixo","15":"tronco_arvores_verde_direita_baixo","20":"folha_floresta_verde_esquerda","21":"folha_floresta_verde_esquerda_centro","22":"tronco_floresta_verde_esquerda_baixo","23":"tronco_arvores_verde_direita_baixo","24":"arbusto_verde","25":"arbusto_verde","26":"arbusto_verde","27":"folha_floresta_verde_esquerda","28":"folha_floresta_verde_esquerda_centro","29":"tronco_floresta_verde_esquerda_baixo","30":"tronco_floresta_verde_esquerda_centro_baixo","31":"tronco_floresta_verde_esquerda_centro_baixo","32":"tronco_floresta_verde_esquerda_centro_baixo","33":"tronco_floresta_verde_direita_baixo","34":"folha_floresta_verde_direita_centro_cima_continua_cima","35":"folha_floresta_verde_direita_cima","38":"agua_esquerda_baixo","39":"agua_canto_esquerda_baixo"},
        "32":{"3":"arbusto_verde","5":"tronco_arvores_verde_esquerda_baixo","6":"tronco_floresta_verde_direita_baixo","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"tronco_floresta_verde_esquerda_baixo","14":"tronco_arvores_verde_direita_baixo","17":"fogo","20":"folha_floresta_verde_esquerda","21":"tronco_floresta_verde_esquerda_baixo","22":"tronco_arvores_verde_direita_baixo","24":"arbusto_verde","25":"arbusto_verde","27":"folha_floresta_verde_esquerda","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_direita","33":"tronco_arvores_verde_esquerda_baixo","34":"tronco_floresta_verde_direita_baixo","35":"folha_floresta_verde_direita_centro","36":"folha_floresta_verde_esquerda_centro_cima","37":"folha_floresta_verde_direita_cima","38":"arbusto_verde","39":"agua_esquerda"},
        "33":{"0":"agua_centro_cima","1":"agua_direita_cima","3":"arbusto_verde","6":"folha_floresta_verde_esquerda","7":"folha_floresta_verde_esquerda_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"tronco_floresta_verde_esquerda_baixo","13":"tronco_arvores_verde_direita_baixo","16":"fogo","20":"folha_floresta_verde_esquerda","21":"folha_floresta_verde_direita","23":"arbusto_verde","24":"arbusto_verde","25":"arbusto_verde","26":"folha_floresta_verde_esquerda_cima","27":"folha_floresta_verde_esquerda_centro","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_direita","32":"fogo","34":"tronco_arvores_verde_esquerda_baixo","35":"tronco_floresta_verde_direita_baixo","36":"folha_floresta_verde_direita_centro","37":"folha_floresta_verde_direita","38":"arbusto_verde","39":"agua_esquerda"},
        "34":{"0":"agua_centro","1":"agua_direita","3":"arbusto_verde","4":"arbusto_verde","6":"folha_floresta_verde_esquerda","7":"folha_floresta_verde_direita_centro","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"tronco_floresta_verde_esquerda_baixo","12":"tronco_arvores_verde_direita_baixo","14":"fogo","18":"folha_floresta_verde_esquerda_cima","19":"folha_floresta_verde_esquerda_centro_cima","20":"folha_floresta_verde_esquerda_centro_cima_continua_cima","21":"folha_floresta_verde_direita","23":"arbusto_verde","24":"arbusto_verde","25":"arbusto_verde","26":"folha_floresta_verde_esquerda","27":"folha_floresta_verde_direita_centro","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_direita","31":"fogo","33":"fogo","35":"tronco_arvores_verde_esquerda_baixo","36":"tronco_floresta_verde_direita_baixo","37":"folha_floresta_verde_direita","38":"arbusto_verde","39":"agua_esquerda"},
        "35":{"0":"agua_centro","1":"agua_canto_direita_cima","2":"agua_direita_cima","6":"tronco_arvores_verde_esquerda_baixo","7":"tronco_floresta_verde_direita_baixo","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_direita_centro_cima_continua_cima","12":"folha_floresta_verde_direita_cima","16":"folha_floresta_verde_esquerda_cima","17":"folha_floresta_verde_esquerda_centro_cima","18":"folha_floresta_verde_esquerda_centro_cima_continua_cima","19":"folha_floresta_verde_esquerda_centro","20":"tronco_floresta_verde_esquerda_baixo","21":"tronco_arvores_verde_direita_baixo","22":"arbusto_verde","23":"arbusto_verde","24":"arbusto_verde","25":"arbusto_verde","26":"tronco_arvores_verde_esquerda_baixo","27":"tronco_floresta_verde_direita_baixo","28":"folha_floresta_verde_esquerda_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_direita_cima","32":"fogo","34":"folha_arvores_verde_esquerda_cima","35":"folha_floresta_verde_esquerda_centro_cima","36":"folha_floresta_verde_esquerda_centro","37":"folha_floresta_verde_direita","38":"arbusto_verde","39":"agua_esquerda"},
        "36":{"0":"agua_centro","1":"agua_centro","2":"agua_direita","7":"folha_floresta_verde_esquerda","8":"folha_floresta_verde_esquerda_centro","9":"folha_floresta_verde_esquerda_centro","10":"folha_floresta_verde_esquerda_centro","11":"folha_floresta_verde_esquerda_centro","12":"folha_floresta_verde_esquerda_centro","13":"folha_floresta_verde_esquerda_centro_cima","14":"folha_floresta_verde_esquerda_centro_cima","15":"folha_floresta_verde_esquerda_centro_cima","16":"folha_floresta_verde_esquerda_centro","17":"folha_floresta_verde_esquerda_centro","18":"folha_floresta_verde_esquerda_centro","19":"tronco_floresta_verde_esquerda_baixo","20":"tronco_arvores_verde_direita_baixo","22":"arbusto_verde","25":"arbusto_verde","27":"folha_floresta_verde_esquerda","28":"folha_floresta_verde_direita_centro","29":"folha_floresta_verde_esquerda_centro","30":"folha_floresta_verde_esquerda_centro","31":"folha_floresta_verde_esquerda_centro_cima","32":"folha_floresta_verde_esquerda_centro_cima","33":"folha_floresta_verde_esquerda_centro_cima","34":"folha_floresta_verde_esquerda_centro","35":"tronco_floresta_verde_esquerda_baixo","36":"tronco_floresta_verde_esquerda_centro_baixo","37":"tronco_arvores_verde_direita_baixo","38":"arbusto_verde","39":"agua_esquerda"},
        "37":{"0":"agua_centro","1":"agua_centro","2":"agua_canto_direita_cima","3":"agua_direita_cima","7":"tronco_arvores_verde_esquerda_baixo","8":"tronco_floresta_verde_esquerda_centro_baixo","9":"tronco_floresta_verde_esquerda_centro_baixo","10":"tronco_floresta_verde_esquerda_centro_baixo","11":"tronco_floresta_verde_esquerda_centro_baixo","12":"tronco_floresta_verde_esquerda_centro_baixo","13":"tronco_floresta_verde_esquerda_centro_baixo","14":"tronco_floresta_verde_esquerda_centro_baixo","15":"tronco_floresta_verde_esquerda_centro_baixo","16":"tronco_floresta_verde_esquerda_centro_baixo","17":"tronco_floresta_verde_esquerda_centro_baixo","18":"tronco_floresta_verde_esquerda_centro_baixo","19":"tronco_arvores_verde_direita_baixo","23":"agua_esquerda_cima","24":"agua_direita_cima","27":"tronco_arvores_verde_esquerda_baixo","28":"tronco_floresta_verde_direita_centro_baixo","29":"tronco_floresta_verde_esquerda_centro_baixo","30":"tronco_floresta_verde_esquerda_centro_baixo","31":"tronco_floresta_verde_esquerda_centro_baixo","32":"tronco_floresta_verde_esquerda_centro_baixo","33":"tronco_floresta_verde_esquerda_centro_baixo","34":"tronco_floresta_verde_esquerda_centro_baixo","35":"tronco_arvores_verde_direita_baixo","38":"arbusto_verde","39":"agua_esquerda"},
        "38":{"0":"agua_centro","1":"agua_centro","2":"agua_centro","3":"agua_direita","5":"arbusto_verde","7":"arbusto_verde","8":"arbusto_verde","9":"arbusto_verde","10":"arbusto_verde","11":"arbusto_verde","12":"arbusto_verde","13":"arbusto_verde","14":"arbusto_verde","15":"arbusto_verde","16":"arbusto_verde","17":"arbusto_verde","18":"arbusto_verde","19":"arbusto_verde","21":"agua_esquerda_cima","22":"agua_centro_cima","23":"agua_canto_esquerda_cima","24":"agua_canto_direita_cima","25":"agua_centro_cima","26":"agua_direita_cima","28":"arbusto_verde","29":"arbusto_verde","30":"arbusto_verde","31":"arbusto_verde","32":"arbusto_verde","33":"arbusto_verde","34":"arbusto_verde","35":"arbusto_verde","36":"arbusto_verde","38":"agua_esquerda_cima","39":"agua_centro"},
        "39":{"0":"agua_centro","1":"agua_centro","2":"agua_centro","3":"agua_direita","6":"arbusto_verde","7":"arbusto_verde","8":"arbusto_verde","9":"arbusto_verde","10":"arbusto_verde","11":"arbusto_verde","12":"arbusto_verde","13":"arbusto_verde","14":"arbusto_verde","15":"arbusto_verde","16":"arbusto_verde","17":"arbusto_verde","21":"agua_esquerda","22":"agua_centro","23":"agua_centro","24":"agua_centro","25":"agua_centro","26":"agua_direita","27":"arbusto_verde","28":"arbusto_verde","29":"arbusto_verde","30":"arbusto_verde","31":"arbusto_verde","32":"arbusto_verde","33":"arbusto_verde","34":"arbusto_verde","35":"arbusto_verde","38":"agua_esquerda","39":"agua_centro"}}
}


const fases = {
    "cerrado": faseCerrado,
    "amazonia": faseAmazonia,
    "pantanal": fasePantanal,
    "caatinga": faseCaatinga
}

module.exports = {
    nomeDosTiles,
    fases,
    faseAmazonia,
    faseCaatinga,
    faseCerrado,
    fasePantanal,
    animalBase
};