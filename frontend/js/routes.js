const URL = 'http://127.0.0.1:8000/ordem'

function buscarOS(){
    fetch(URL)
        .then(function(resposta){
            return resposta.json();
        })

        .then(function(dados){
            renderizar(dados);
        })
    }

function criarOS(cCliente,cDefeito, cAparelho){
    fetch(URL,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({cliente: cCliente, aparelho: cAparelho, problema: cDefeito })
    })
    .then(function(resposta){
        return resposta.json();
    })
    .then (function(dados){
        buscarOS();
    })  
}

function concluirOS(id){
    fetch(URL + '/' +id ,{
        method: 'PUT'
    })

    .then (function(resposta){
        return resposta.json();
    })

    .then (function(dados){
        buscarOS();
    })
}

function removerOS(id){
    fetch(URL + '/' + id, {
        method: 'DELETE'
    })
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){
        buscarOS();
    })
}
