const campCliente = document.getElementById('campo-cliente');
const campAparelho = document.getElementById('campo-aparelho');
const campDefeito = document.getElementById('campo-problema');
const botaoOS = document.getElementById('botao-adicionar');
const mensFeedback = document.getElementById('mensagem-feedback');
const contaOS = document.getElementById('contador-ordens');
const listaOS = document.getElementById('lista-ordens');

// Tem como finalidade buscar e carregar essa função quando a pagina html estiver toda carregada.
document.addEventListener('DOMContentLoaded', function(){
    buscarOS();
})

function renderizar(dados){
    listaOS.innerHTML=''

    dados.forEach(function(OS){
        
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
        clienteOS.textContent = OS.cliente
        infoOrdem.appendChild(clienteOS);

        const aparelhoOS = document.createElement('p');
        aparelhoOS.classList.add('aparelho-os');
        aparelhoOS.textContent=OS.aparelho;
        infoOrdem.appendChild(aparelhoOS);  

        const problemaOS = document.createElement('p');
        problemaOS.classList.add('problema-os');
        problemaOS.textContent=OS.problema;
        infoOrdem.appendChild(problemaOS);

        const idOS = document.createElement('p');
        idOS.classList.add('id-os');
        idOS.textContent=OS.id_os
        infoOrdem.appendChild(idOS)

        const acaoBotoes = document.createElement('div');
        acaoBotoes.classList.add('acoes-os');
        main.appendChild(acaoBotoes);

        const botaCriarOS = document.createElement('button');
        botaCriarOS.classList.add('botao-concluir');
        acaoBotoes.appendChild(botaCriarOS);
        botaCriarOS.addEventListener('click', function(){
            concluirOS(OS.id_os);
        })

        const deleteOS = document.createElement('button');
        deleteOS.classList.add('botao-remover');
        acaoBotoes.appendChild(deleteOS);
        deleteOS.addEventListener('click', function(){
            removerOS(OS.id_os);
        })

        listaOS.appendChild(main);
    })

    contaOS.innerHTML=`${dados.length} Ordem de serviço`;

}