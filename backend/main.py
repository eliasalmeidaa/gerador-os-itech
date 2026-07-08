from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#Garantido que os dados sejam autenticados
from pydantic import BaseModel
import dados

class OsEntrada(BaseModel):
    cliente:str
    aparelho:str
    problema:str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_methods = ['*'],
    allow_headers = ['*'],
)
# teste básico da API
@app.get('/')
def teste():
    return {'mensagem' : 'API está funcionando'}

@app.get('/ordem')
def rotaOS():
    return dados.OS # Verifica la a rota da lista OS no arquivo dados

@app.post('/ordem')
def criarOS(base: OsEntrada):

    novaOS = { 
        'cliente': base.cliente,
        'aparelho': base.aparelho,
        'problema': base.problema,
        'id_os': dados.id_ordem,#Pega o valor atual do Id
        'concluido': False, #Começa com OS em andamento
    }

    dados.OS.append(novaOS)
    dados.id_ordem += 1 #Incrementa OS

    return novaOS

@app.put('/ordem/{id}')
def concluido(id: int):
    for y in dados.OS:
        if y ['id_os'] == id:
           y['concluido'] = not y['concluido']
           return y

@app.delete('/ordem/{id}')
def removerOS(id: int):
    for y in dados.OS:
        if y['id_os'] == id:
            dados.OS.remove(y)
            return {'mensagem' : 'Removido OS'}        



