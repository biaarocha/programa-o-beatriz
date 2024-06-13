const perguntas = [
    {
    enunciado: "você prefere comida doce ou salgada?",
    alternativas: [
    "prefiro doce",
    "prefiro salgado"
    ]
    },
    {
    enunciado: "você prefere vôlei ou futebol?",
    alternativas: [
    "prefiro vôlei",
    "prefiro futebol"
    ]
    },
    {
    enunciado: "você prefere dinheiro ou fama?",
    alternativas: [
    "prefiro dinheiro",
    "prefiro fama"
    ]
    },
    {
    enunciado: "você prefere cachorro ou gato?",
    alternativas: [
    "prefiro cachorro",
    "prefiro gato"
    ]
    
    },
    {
    enunciado: "você prefere praia ou piscina?",
    alternativas: [
    "prefiro praia",
    "prefiro piscina"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário, parabéns!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
