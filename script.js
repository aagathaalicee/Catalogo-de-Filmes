const filmes = [
    {
        nome: "Interestelar",
        genero: "Ficção Científica",
        nota: "9.0",
        imagem: "img/interestelar.png",
        descricao: "Uma equipe de astronautas viaja pelo espaço em busca de um novo lar para a humanidade."
    },
    {
        nome: "Vingadores: Ultimato",
        genero: "Ação",
        nota: "8.4",
        imagem: "img/vingadores.png",
        descricao: "Os Vingadores enfrentam seu maior desafio para tentar reverter os acontecimentos que mudaram o universo."
    },
    {
        nome: "O Rei Leão",
        genero: "Animação",
        nota: "8.5",
        imagem: "img/rei-leão.png",
        descricao: "Simba precisa enfrentar seus medos e assumir seu lugar como rei das Terras do Reino."
    },
    {
        nome: "Corra!",
        genero: "Terror",
        nota: "7.7",
        imagem: "img/corra.png",
        descricao: "Um jovem visita a família de sua namorada e começa a descobrir acontecimentos cada vez mais estranhos."
    },
    {
        nome: "As Branquelas",
        genero: "Comédia",
        nota: "7.1",
        imagem: "img/as-branquelas.png",
        descricao: "Dois agentes do FBI precisam se disfarçar para proteger duas socialites de uma ameaça."
    },
    {
        nome: "Titanic",
        genero: "Romance",
        nota: "7.9",
        imagem: "img/titanic.png",
        descricao: "Um romance inesquecível acontece durante a viagem do famoso navio Titanic."
    }
];

const listaFilmes = document.getElementById("filmes");
const pesquisa = document.getElementById("pesquisa");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = "";

    if (lista.length === 0) {
        listaFilmes.innerHTML = `
            <p class="sem-filmes">
                Nenhum filme encontrado. 😕
            </p>
        `;
        return;
    }

    lista.forEach((filme, index) => {
        const card = document.createElement("div");

        card.classList.add("filme");

        card.innerHTML = `
            <img 
                class="poster" 
                src="${filme.imagem}" 
                alt="Poster do filme ${filme.nome}"
            >

            <div class="informacoes">
                <h2>${filme.nome}</h2>

                <p>🎭 ${filme.genero}</p>

                <p>⭐ Nota: ${filme.nota}</p>
            </div>
        `;

        card.addEventListener("click", function () {
            abrirDetalhes(filme);
        });

        listaFilmes.appendChild(card);
    });
}

function filtrarGenero(genero) {
    if (genero === "Todos") {
        mostrarFilmes(filmes);
        return;
    }

    const filmesFiltrados = filmes.filter(filme =>
        filme.genero === genero
    );

    mostrarFilmes(filmesFiltrados);
}

pesquisa.addEventListener("input", function () {
    const texto = pesquisa.value.toLowerCase();

    const filmesFiltrados = filmes.filter(filme =>
        filme.nome.toLowerCase().includes(texto)
    );

    mostrarFilmes(filmesFiltrados);
});

function abrirDetalhes(filme) {
    const modal = document.createElement("div");

    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-conteudo">

            <button class="fechar">×</button>

            <img 
                src="${filme.imagem}" 
                alt="Poster de ${filme.nome}"
            >

            <div class="modal-info">
                <h2>${filme.nome}</h2>

                <p><strong>Gênero:</strong> ${filme.genero}</p>

                <p><strong>Nota:</strong> ⭐ ${filme.nota}</p>

                <p class="descricao">
                    ${filme.descricao}
                </p>
            </div>

        </div>
    `;

    document.body.appendChild(modal);

    const botaoFechar = modal.querySelector(".fechar");

    botaoFechar.addEventListener("click", function () {
        modal.remove();
    });

    modal.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            modal.remove();
        }
    });
}

mostrarFilmes(filmes);