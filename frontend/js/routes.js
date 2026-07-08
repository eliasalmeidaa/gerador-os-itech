const URL = 'http://127.0.0.1:8000'

function buscarOS(){
    fetch(URL)
        .then(function(resposta){
            return resposta.json();
        })

        .then(function(dados){
            renderizar(dados);
        })
    }

function criarOS(){
    fetch(URL,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({cliente: campCliente, aparelho: campAparelho, problema: campDefeito })
    })
    .then(function(resposta){
        return resposta.json();
    })
    .then (function(dados){
        buscarOS();
    })  
}
