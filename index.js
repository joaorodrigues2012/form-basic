const quiz = document.getElementById('quiz');
    const template = document.querySelector('template');

    const perguntas = [
        {
            pergunta: 'Qual é o nome do encanador italiano famoso nos jogos da Nintendo?',
            respostas: [
                "Mario",
                "Luigi",
                "Yoshi",
            ],
            correta: 0
        },
        {
            pergunta: 'Qual desses jogos é conhecido por ser um battle royale?',
            respostas: [
                "Fortnite",
                "Minecraft",
                "World of Warcraft",
            ],
            correta: 0
        },
        {
            pergunta: 'Em que filme Leonardo DiCaprio interpreta um ladrão de ideias?',
            respostas: [
                "Inception",
                "The Departed",
                "Shutter Island",
            ],
            correta: 0
        },
        {
            pergunta: 'Qual é o nome do dragão principal em Skyrim?',
            respostas: [
                "Alduin",
                "Smaug",
                "Toothless",
            ],
            correta: 0
        },
        {
            pergunta: 'Qual destes personagens é um encanador que luta contra tartarugas e dinossauros?',
            respostas: [
                "Sonic",
                "Crash Bandicoot",
                "Mario",
            ],
            correta: 2
        },
        {
            pergunta: 'Qual desses jogos é conhecido por ser uma simulação de vida?',
            respostas: [
                "The Sims",
                "Call of Duty",
                "Grand Theft Auto",
            ],
            correta: 0
        },
        {
            pergunta: 'Em que filme de ficção científica os humanos usam Jaegers para lutar contra monstros gigantes?',
            respostas: [
                "Pacific Rim",
                "Transformers",
                "Godzilla",
            ],
            correta: 0
        },
        {
            pergunta: 'Qual é o nome do personagem principal no jogo "The Legend of Zelda"?',
            respostas: [
                "Link",
                "Zelda",
                "Ganondorf",
            ],
            correta: 0
        },
        {
            pergunta: 'Qual destes jogos é baseado em construir e sobreviver em um mundo de blocos?',
            respostas: [
                "Terraria",
                "Stardew Valley",
                "Minecraft",
            ],
            correta: 2
        },
        {
            pergunta: 'Em qual filme Uma Thurman interpreta uma assassina que busca vingança?',
            respostas: [
                "Kill Bill",
                "Pulp Fiction",
                "Reservoir Dogs",
            ],
            correta: 0
        },
    ];

    const corretas = new Set();
    const TotalPerguntas = perguntas.length;
    const mostrarTotal = document.querySelector('#acertos span');

    for (const item of perguntas) {
        const quizItem = template.content.cloneNode(true);
        quizItem.querySelector('h3').textContent = item.pergunta;

        for (let resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt').cloneNode(true);
            dt.querySelector('span').textContent = resposta;
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
            dt.querySelector('input').value = item.respostas.indexOf(resposta);
            dt.querySelector('input').onchange = (event) => {
                const iscorreta = event.target.value == item.correta;
                corretas.delete(item);
                if (iscorreta) {
                    corretas.add(item);
                }
                mostrarTotal.textContent = corretas.size + ' de ' + TotalPerguntas;
            };
            quizItem.querySelector('dl').appendChild(dt);
        }
        quizItem.querySelector('dl dt').remove();

        quiz.appendChild(quizItem);
    }