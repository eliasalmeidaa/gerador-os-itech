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
