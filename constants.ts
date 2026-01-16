import { MaskData, RankData } from './types';

export const CHARACTER_INFO = {
  name: "J",
  code: "Subject V",
  race: "Ciborgue",
  class: "Guerreiro Tático",
  subclass: "Especialista em CQC e Armas Improvisadas",
  rank: "G",
  age: "28 Anos",
  affiliation: "Operativo Autônomo (Ex-Setor de Inteligência)",
  personality: `"J" é um indivíduo de poucas palavras e muita ação. Em serviço, ele opera com uma frieza mecânica, executando ordens brutais sem demonstrar prazer ou remorso, vendo a violência apenas como uma ferramenta de trabalho. Ele se comunica exclusivamente através de um gravador, o que cria uma barreira entre ele e o mundo. No entanto, sua lealdade à missão é absoluta, acreditando que seu "trabalho sujo" é o que mantém o caos sob controle.`,
  appearance: `Um homem de estatura média com constituição atlética. Ele veste uma jaqueta estilo "Letterman" em tons de marrom e creme (reforçada com trama balística), calça jeans e tênis brancos. O rosto é cansado, com olheiras visíveis e uma expressão neutra, quase sempre iluminado pela luz ciano fria das projeções holográficas quando em combate.`,
  history: `Originalmente um tenente de forças especiais condecorado, "J" foi voluntário do "Projeto Persona", uma iniciativa militar ultra-secreta desenhada para criar o soldado perfeito. O objetivo era fragmentar a psique humana para isolar emoções e maximizar a eficiência de combate através de implantes cibernéticos experimentais. Enquanto dezenas de outros cobaias sucumbiram à loucura ou rejeição sistêmica, "J" foi o único sucesso estável.\n\nA nação que criou o projeto colapsou e desapareceu dos registros históricos, mas a arma que eles criaram permaneceu. Hoje, "J" atua como um mercenário de elite e "limpador", aceitando contratos que exijam precisão cirúrgica e brutalidade controlada. Sua vida é um ciclo de violência: ele cumpre a missão, limpa a cena e desaparece para seu apartamento silencioso no subúrbio, onde a máquina de matar dá lugar à rotina mundana de um homem comum, aguardando o próximo telefonema.`,
  personaSystem: `Instalado na base do crânio, este dispositivo experimental permite que "J" altere a frequência de sua Alma instantaneamente. Ao ativar um modo, o dispositivo projeta uma Máscara Holográfica de Luz Sólida sobre seu rosto. O sistema possui um bloqueio de segurança que libera novos protocolos (máscaras) conforme o usuário sobe de Rank e prova estabilidade mental.`,
  abilities: [
    {
      title: "Fôlego Sintético",
      description: "Seus pulmões e sistema cardiovascular foram reforçados com biotecnologia militar. Ele possui uma estamina muito superior a de um humano comum, capaz de correr, lutar e operar em alta performance por períodos estendidos sem fadiga respiratória."
    },
    {
      title: "Interface Neural (Passiva)",
      description: "Sua visão é sobreposta por um HUD tático. Ele recebe dados constantes sobre trajetória balística, contagem de munição, status vital do próprio corpo e mini-mapa de terreno conhecido."
    }
  ],
  weapons: [
    {
      name: "Taco de Beisebol",
      description: "Um taco de alumínio esportivo comum, com a empunhadura gasta. Simples, durável e intimidante. Nas mãos de \"J\", a velocidade do balanço é suficiente para neutralizar alvos blindados com trauma contuso."
    },
    {
      name: "Pistola Silenciada",
      description: "Uma arma de fogo compacta padrão militar, modificada para aceitar munição perfurante e operar com ruído mínimo."
    },
    {
      name: "O Gravador",
      description: "Um dispositivo acoplado ao pescoço ou cinto que substitui sua fala, reproduzindo frases táticas ou sons pré-gravados para comunicação."
    }
  ]
};

export const MASKS: MaskData[] = [
  {
    id: 'richard',
    name: 'RICHARD',
    animal: 'O Galo',
    description: 'Foco: Tático e Preditivo. A projeção assume a forma de um Galo. A capacidade de processamento neural é acelerada drasticamente. "J" não se torna mais forte, mas ganha leitura de combate avançada. Ele consegue antecipar a trajetória de golpes inimigos, calcular ricochetes e encontrar rotas de ataque que passariam despercebidas por um soldado comum. É o modo padrão para tiroteios e controle de multidão.',
    stats: 'SYSTEM: PREDICTIVE_COMBAT_V1',
    imageSrc: '/Richard.png',
    color: '#00FFFF'
  },
  {
    id: 'tony',
    name: 'TONY',
    animal: 'O Tigre',
    description: 'Foco: Força Bruta e Adrenalina. A projeção se torna um Tigre. O dispositivo desliga os limitadores de segurança muscular e redireciona todo o fluxo de energia para os membros. Seus golpes desarmados tornam-se letais, capazes de amassar metal e quebrar ossos com um único soco. A desvantagem é que a destreza fina é perdida; ele não consegue usar armas de fogo ou operar máquinas complexas neste modo.',
    stats: 'SYSTEM: LIMITER_RELEASE_FULL',
    imageSrc: '/Tony.png',
    color: '#FF003C'
  },
  {
    id: 'rasmus',
    name: 'RASMUS',
    animal: 'A Coruja',
    description: 'Foco: Reconhecimento e Espionagem. A projeção assume a forma de uma Coruja. A energia é desviada para os sensores ópticos e auditivos, expandindo a percepção sensorial. Ele pode ver assinaturas de calor através de paredes finas e ouvir conversas distantes. A desvantagem crítica é que sua defesa física cai drasticamente, pois a energia é consumida pelos sensores.',
    stats: 'SYSTEM: SENSORY_OVERDRIVE',
    imageSrc: '/Rasmus.png',
    color: '#EAFF00'
  },
  {
    id: 'jake',
    name: 'JAKE',
    animal: 'A Cobra',
    description: 'Foco: Balística e Arremessos Táticos. Transforma J em um assassino cirúrgico. [Trajetória Letal]: Garante 100% de acerto em ricochetes geométricos. [Retorno Magnético]: Eletroímanes permitem chamar a arma arremessada de volta ou desarmar inimigos. [Balística Aprimorada]: Anula o recuo de armas de fogo, dando a uma pistola a precisão de um rifle sniper. Possui Visão Termal e pode carregar objetos com choque "Veneno".',
    stats: 'SYSTEM: VECTOR_CALC_OPTIMIZED',
    imageSrc: '/Jake.png',
    color: '#39FF14'
  }
];

export const MISSION_RANKS: RankData[] = [
  {
    rank: "H",
    title: "Inicial",
    description: "Missões que envolvem deslocamentos maiores, criaturas mais agressivas, bandidos iniciantes e dungeons superficiais.",
    risk: "Moderado",
    narratorType: "Pode ser feito por auto narração",
    completed: 8,
    required: 8,
    color: "#00FFFF"
  },
  {
    rank: "G",
    title: "Básico",
    description: "Começa a exigir preparo real, criaturas fortes, dungeons pequenas, áreas instáveis, ambientes corrompidos ou missões de captura.",
    risk: "Consistente",
    narratorType: "Pode ser feito por auto narração",
    completed: 0,
    required: 12,
    color: "#00FFAA"
  },
  {
    rank: "F",
    title: "Intermediário I",
    description: "Equilíbrio entre perigo e técnica, ameaças maiores, grupos organizados, anomalias arcanas, monstros pequenos porém ferozes.",
    risk: "Alto",
    narratorType: "Exige Narrador",
    completed: 0,
    required: 13,
    color: "#00FF00"
  },
  {
    rank: "E",
    title: "Intermediário II",
    description: "Missões que podem envolver risco real de morte, bestas grandes, dungeons médias, desvios mágicos, fenômenos naturais hostis.",
    risk: "Alto",
    narratorType: "Exige Narrador",
    completed: 0,
    required: 15,
    color: "#AAFF00"
  },
  {
    rank: "D",
    title: "Avançado I",
    description: "Neste Rank, o mundo já mostra a verdadeira face, criaturas inteligentes, magia hostil, armadilhas elaboradas, conflitos militares menores.",
    risk: "Muito Alto",
    narratorType: "Exige Narrador",
    completed: 0,
    required: 17,
    color: "#EAFF00"
  },
  {
    rank: "C",
    title: "Avançado II",
    description: "Núcleo de aventureiros experientes, monstros de alto escalão, regiões instáveis, investigação de catástrofes, primeira exposição a entidades meta-arcanas.",
    risk: "Extremo a Morte",
    narratorType: "Exige Narrador",
    completed: 0,
    required: 12,
    color: "#FFaa00"
  },
  {
    rank: "B",
    title: "Elite",
    description: "Requer técnica, maestria e preparo, bestas lendárias menores, cultos, operações militares, dungeons profundas e ameaças que desafiam grupos inteiros.",
    risk: "Letal",
    narratorType: "Exige Narrador",
    completed: 0,
    required: 7,
    color: "#FF5500"
  },
  {
    rank: "A",
    title: "Lendário Menor",
    description: "O topo dos aventureiros comuns, ameaças continentais menores, monstros colossais, corrupções antigas, tecnologias perdidas e magia proibida.",
    risk: "Altíssimo e Mortal",
    narratorType: "Exige Narrador",
    completed: 0,
    required: 5,
    color: "#FF0000"
  },
  {
    rank: "A+",
    title: "Lendário",
    description: "Um extra pra provar seu valor, um catástrofe ou uma ameaça de nivel continental maior do que a normal, ameaças nem sempre são da terra...",
    risk: "Mortal",
    narratorType: "Exige Narrador",
    completed: 0,
    required: "Evento",
    color: "#FF003C"
  },
  {
    rank: "S",
    title: "Mítico",
    description: "Reservado para elites e grupos lendários, ameaças que podem devastar cidades, calamidades arcanas, monstros mitológicos, incursões interdimensionais.",
    risk: "Absurdamente Mortal",
    narratorType: "Exige Narrador (Staff)",
    completed: 0,
    required: "Evento",
    color: "#FF00FF"
  },
  {
    rank: "SS",
    title: "Divino Menor",
    description: "Apenas heróis lendários ou vilões equivalentes. Catástrofes que mudam eras, entidades superiores, ruínas, fusões de magia e tecnologia proibida.",
    risk: "Destruição em Massa",
    narratorType: "Exige Narrador + Supervisor",
    completed: 0,
    required: "Evento",
    color: "#9900FF"
  },
  {
    rank: "SSS+",
    title: "Fim dos Tempos",
    description: "A própria história tem seu desfecho. Guerras \"divinas\", Despertos Ancestrais, corrupções totais ou rupturas entre realidades.",
    risk: "Nível Extinção",
    narratorType: "Evento Staff Exclusivo",
    completed: 0,
    required: "Evento",
    color: "#FFFFFF"
  }
];

export const PROGRESSION_RULES = [
  "Meta game está proibido em qualquer situação do RPG.",
  "Limite de 5 missões por semana para evitar rush.",
  "Missões podem ser divididas durante os dias da semana.",
  "Pode fazer missão acima do Rank: se acompanhado (menos risco) ou solo (risco total).",
  "Fazer missão acima do Rank pula 2 missões do Rank atual.",
  "Subir ou cair de Rank zera as missões do Rank atual.",
  "Treinos contam como evolução pessoal (habilidades/poderes).",
  "Morte de persona: Sem exceções em PV. Resultado é perda de Rank.",
  "Narrador pode recusar subida por imprudência.",
  "Ranks altos são títulos por feitos, não apenas farm.",
  "Players ausentes perdem chance de subir.",
  "Staff pode alterar requisitos para equilíbrio."
];