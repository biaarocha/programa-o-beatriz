const perguntas = [
    {
        enunciado: "você prefere comida doce ou salgada?",
        alternativas: [
            { texto: "prefiro doce", pontuacao: 2 },
            { texto: "prefiro salgado", pontuacao: 2 }
        ]
    },
    {
        enunciado: "você prefere vôlei ou futebol?",
        alternativas: [
            { texto: "prefiro vôlei", pontuacao: 2 },
            { texto: "prefiro futebol", pontuacao: 1 }
        ]
    },
    {
        enunciado: "você prefere dinheiro ou fama",
        alternativas: [
            { texto: "dinheiro", pontuacao: 2 },
            { texto: "fama", pontuacao: 3 }
        ]
    },
    {
        enunciado: "você prefere cachorro ou gato?",
        alternativas: [
            { texto: "cachorro", pontuacao: 3 },
            { texto: "gato", pontuacao: 2 }
        ]
    },
    {
        enunciado: "você prefere praia ou piscina?",
        alternativas: [
            { texto: "praia.", pontuacao: 2 },
            { texto: "piscina", pontuacao: 3 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta

