
const traducoes = {
    pt: {
        ola: "Olá, eu sou",
        descricao: "Estudante de Desenvolvimento de Sistemas e desenvolvedora front-end",
        discord: "Discord",
        email: "Email",
        tecnologias: "Tecnologias usadas",
        setup: "Setup",
        placa: "Placa de vídeo",
        processador: "Processador",
        ram: "RAM",
        armazenamento: "Armazenamento",
        tem: "Tem algum",
        projeto: "projeto?",
        conversar: "Vamos conversar"
    },

    en: {
        ola: "Hello, I'm",
        descricao: "Systems Development student and front-end developer",
        discord: "Discord",
        email: "Email",
        tecnologias: "Technologies used",
        setup: "PC Setup",
        placa: "Graphics card",
        processador: "Processor",
        ram: "RAM",
        armazenamento: "Storage",
        tem: "Got a",
        projeto: "project?",
        conversar: "Let's talk"
    },

    es: {
        ola: "Hola, soy",
        descricao: "Estudiante de Desarrollo de Sistemas y desarrolladora front-end",
        discord: "Discord",
        email: "Correo electrónico",
        tecnologias: "Tecnologías utilizadas",
        setup: "Equipo",
        placa: "Tarjeta gráfica",
        processador: "Procesador",
        ram: "RAM",
        armazenamento: "Almacenamiento",
        tem: "¿Tienes algún",
        projeto: "proyecto?",
        conversar: "Hablemos"
    }
};

function mudarIdioma(idioma) {
    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const chave = elemento.dataset.i18n;
        elemento.textContent = traducoes[idioma][chave];
    });

    document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
    
    localStorage.setItem("idioma", idioma);
}

document.querySelectorAll("[data-idioma]").forEach(botao => {
    botao.addEventListener("click", () => {
        mudarIdioma(botao.dataset.idioma);
    });
});

const idiomaSalvo = localStorage.getItem("idioma") || "pt";
mudarIdioma(idiomaSalvo);
