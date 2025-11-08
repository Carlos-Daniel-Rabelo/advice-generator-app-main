const botao = document.getElementById('botao')
const numeroDoConselho = document.getElementById('numero-conselho')
const descricaoDoConselho = document.querySelector('.descricao-do-conselho')

botao.addEventListener('click', pegarConselho)

async function pegarConselho() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice')
        const objeto = await resposta.json()
        numeroDoConselho.innerHTML = objeto.slip.id
        descricaoDoConselho.innerHTML = objeto.slip.advice
        console.log(objeto.slip.advice)
    } catch (err) {
        console.log('Ocorreu um erro: ' + err)
    }
}

const navigationType = performance.getEntriesByType('navigation')[0].type

if (navigationType === 'reload') {
    pegarConselho()
}

// 💬 Explicação

// performance.getEntriesByType('navigation') retorna uma lista com informações sobre a navegação atual.

// [0].type indica o tipo:

// 'navigate' → primeira vez que entrou na página;

// 'reload' → recarregamento (F5, botão de recarregar, etc.);

// 'back_forward' → navegação pelo histórico;

// 'prerender' → carregamento antecipado (raro).

// O código verifica se o tipo é 'reload' e, se for, chama a função pegarConselho() para buscar um novo conselho ao recarregar a página.