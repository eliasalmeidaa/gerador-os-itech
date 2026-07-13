const campCliente = document.getElementById('campo-cliente');
const campAparelho = document.getElementById('campo-aparelho');
const campDefeito = document.getElementById('campo-problema');
const botaoOS = document.getElementById('botao-adicionar');
const mensFeedback = document.getElementById('mensagem-feedback');
const contaOS = document.getElementById('contador-ordens');
const listaOS = document.getElementById('lista-ordens');
const itensPorPagina = 5;
let paginaAtual = 1;

document.addEventListener('DOMContentLoaded', function(){
    buscarOS();
})

function renderizar(dados){
    listaOS.innerHTML = '';

    // Basicamente ele pega a pagina atual e multiplica por 5
    // ex: (1-1) * 5 == 0, então começa de 0
    const inicio = (paginaAtual - 1) * itensPorPagina;

    // Aqui serve como uma base para ir do inicio até o fim da pagina somente
    const fim = inicio + itensPorPagina;

    const osPagina = dados.slice(inicio, fim);

    osPagina.forEach(function(OS){
        const main = document.createElement('div');
        main.classList.add('card-os');

        if(OS.concluido){
            main.classList.add('concluida');
        }

        const infoOrdem = document.createElement('div');
        infoOrdem.classList.add('info-os');
        main.appendChild(infoOrdem);

        const clienteOS = document.createElement('p');
        clienteOS.classList.add('cliente-os');
        clienteOS.textContent = OS.cliente;
        infoOrdem.appendChild(clienteOS);

        const aparelhoOS = document.createElement('p');
        aparelhoOS.classList.add('aparelho-os');
        aparelhoOS.textContent = OS.aparelho;
        infoOrdem.appendChild(aparelhoOS);

        const problemaOS = document.createElement('p');
        problemaOS.classList.add('problema-os');
        problemaOS.textContent = OS.problema;
        infoOrdem.appendChild(problemaOS);

        const idOS = document.createElement('p');
        idOS.classList.add('id-os');
        idOS.textContent = 'OS# ' + OS.id_os;
        infoOrdem.appendChild(idOS);

        const acaoBotoes = document.createElement('div');
        acaoBotoes.classList.add('acoes-os');
        main.appendChild(acaoBotoes);

        const botaCriarOS = document.createElement('button');
        botaCriarOS.classList.add('botao-concluir');
        botaCriarOS.textContent = 'Concluir';
        botaCriarOS.addEventListener('click', function(){
            concluirOS(OS.id_os);
        });
        acaoBotoes.appendChild(botaCriarOS);

        const deleteOS = document.createElement('button');
        deleteOS.classList.add('botao-remover');
        deleteOS.textContent = 'Cancelar';
        deleteOS.addEventListener('click', function(){
            removerOS(OS.id_os);
        });
        acaoBotoes.appendChild(deleteOS);

        listaOS.appendChild(main);
    });

    contaOS.textContent = `${dados.length} Ordem de serviço`;

    // Paginação

    //Math.ceil tem como função arredondar para o número maior
    //Faz a divisão da quantidade de ordem de serviço pelo itens por pagina, e se for ex: 2.2 o math.ceil arredonda o numero para o maior, 3.
    const totalPaginas = Math.ceil(dados.length / itensPorPagina);
    const paginacaoAntiga = document.getElementById('paginacao');
    if(paginacaoAntiga){ 
        paginacaoAntiga.remove(); 
    }

    if(totalPaginas > 1){

        const paginacao = document.createElement('div');
        //Cria a classe ID para paginação
        paginacao.id = 'paginacao';

        const btnAnterior = document.createElement('button');
        btnAnterior.textContent = '< Anterior';
        btnAnterior.classList.add('botao-pagina');
        btnAnterior.disabled = paginaAtual === 1;
        btnAnterior.addEventListener('click', function(){
            paginaAtual--;
            renderizar(dados);
        });
        paginacao.appendChild(btnAnterior);

        const indicador = document.createElement('span');
        indicador.textContent = `${paginaAtual} / ${totalPaginas}`;
        indicador.id = 'indicador-pagina';
        paginacao.appendChild(indicador);

        const btnProxima = document.createElement('button');
        btnProxima.textContent = 'Proxima >';
        btnProxima.classList.add('botao-pagina');
        btnProxima.disabled = paginaAtual === totalPaginas;
        btnProxima.addEventListener('click', function(){
            paginaAtual++;
            renderizar(dados);
        });
        paginacao.appendChild(btnProxima);

        listaOS.appendChild(paginacao);

        
    }
    
    graficoOS(dados);
}

botaoOS.addEventListener('click', function(){
    const cCliente = campCliente.value;
    const cDefeito = campDefeito.value;
    const cAparelho = campAparelho.value;

    if(cCliente === '' || cDefeito === '' || cAparelho === ''){
        alert('Preencha todos os dados!');
    } else {
        criarOS(cCliente, cDefeito, cAparelho);
        campCliente.value = '';
        campDefeito.value = '';
        campAparelho.value = '';
    }
});
