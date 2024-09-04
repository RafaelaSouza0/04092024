const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de terminar o ensino médio e está diante de uma grande decisão: seguir uma carreira tradicional ou explorar o mundo das novas tecnologias, como a Inteligência Artificial. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Seguir uma carreira tradicional, como Direito ou Medicina.",
                afirmacao: "Decidiu se dedicar a uma carreira consolidada, garantindo um futuro seguro e estável."
            },
            {
                texto: "Explorar o mundo das novas tecnologias e descobrir oportunidades inovadoras com IA.",
                afirmacao: "Enxerga o futuro nas novas tecnologias e está determinado a fazer parte dessa revolução digital."
            }
        ]
    },
    {
        enunciado: "Durante a universidade, você recebe uma oferta de estágio: uma em uma grande empresa tradicional e outra em uma startup de tecnologia focada em IA. Qual oferta você aceita?",
        alternativas: [
            {
                texto: "Aceitar o estágio na empresa tradicional para garantir uma experiência sólida no mercado.",
                afirmacao: "Valorizou a estabilidade e o prestígio de uma grande empresa para construir sua carreira."
            },
            {
                texto: "Aceitar o estágio na startup para aprender sobre inovação e crescer no mercado de IA.",
                afirmacao: "Decidiu arriscar e apostar em uma empresa que trabalha com tecnologia de ponta, abraçando o futuro."
            }
        ]
    },
    {
        enunciado: "Depois de alguns anos no mercado, você tem a chance de abrir seu próprio negócio. O que você faz?",
        alternativas: [
            {
                texto: "Abrir um negócio tradicional, como uma loja física ou escritório de consultoria.",
                afirmacao: "Escolheu criar algo seguro e estável, focado no mercado que já conhece."
            },
            {
                texto: "Abrir uma startup de tecnologia com foco em soluções inovadoras, utilizando IA e automação.",
                afirmacao: "Decidiu apostar no futuro, inovando com tecnologia e se destacando no mercado digital."
            }
        ]
    },
    {
        enunciado: "Seu negócio está crescendo e você precisa decidir como expandir. Qual caminho escolhe?",
        alternativas: [
            {
                texto: "Expandir de forma gradual, mantendo o controle sobre cada nova etapa do crescimento.",
                afirmacao: "Preferiu um crescimento mais lento e seguro, priorizando a sustentabilidade do negócio."
            },
            {
                texto: "Buscar investimentos e expandir rapidamente, apostando em novas tecnologias para dominar o mercado.",
                afirmacao: "Acredita que a inovação rápida é a chave do sucesso e está pronto para conquistar novos horizontes."
            }
        ]
    },
    {
        enunciado: "Com o avanço da IA no mercado de trabalho, você se depara com a necessidade de adaptar seus conhecimentos para o futuro. Qual abordagem você toma?",
        alternativas: [
            {
                texto: "Aprender o básico de IA e automação, apenas para garantir que sua carreira permaneça relevante.",
                afirmacao: "Optou por adaptar-se às mudanças de forma conservadora, assegurando que o essencial esteja coberto."
            },
            {
                texto: "Se especializar em IA e tecnologias emergentes para se tornar um líder nesse campo.",
                afirmacao: "Abraçou o futuro com entusiasmo, buscando se posicionar como pioneiro nas inovações tecnológicas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();