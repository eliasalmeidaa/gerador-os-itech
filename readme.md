# OS Place 📱

Sistema de gerenciamento de ordens de serviço para assistência técnica de celular, com backend em **Python (FastAPI)** e frontend em **JavaScript puro**.

## 🛠️ Tecnologias

- **Python** + **FastAPI** — API REST com CRUD completo
- **JavaScript (Vanilla)** — frontend consumindo a API via `fetch`
- **Plotly.js** — gráfico de pizza (OS concluídas vs pendentes)
- **HTML5** + **CSS3** — interface simples e funcional

## ⚙️ Funcionalidades

- ✅ Criar nova ordem de serviço (cliente, aparelho, problema)
- ✅ Listar todas as ordens de serviço
- ✅ Marcar/desmarcar OS como concluída
- ✅ Remover ordem de serviço
- 🚧 Renderização dinâmica dos cards via JS (em desenvolvimento)
- 🚧 Gráfico de pizza com Plotly (OS concluídas vs pendentes)
- 🚧 Contador de OS abertas em tempo real

## 📋 Campos de uma Ordem de Serviço

- `id_os` — número único gerado automaticamente
- `cliente` — nome do cliente
- `aparelho` — modelo do celular (ex: iPhone 13, Samsung A54)
- `problema` — descrição do defeito relatado
- `concluido` — `false` (pendente) ou `true` (concluída)

## 📁 Estrutura

```
os-place/
├── backend/
│   ├── main.py     # FastAPI: rotas GET, POST, PUT, DELETE
│   └── dados.py    # lista de OS em memória
└── frontend/
    ├── index.html
    ├── css/style.css
    └── js/
        ├── routes.js   # funções fetch (GET, POST, PUT, DELETE)
        └── script.js   # lógica principal (renderizar, eventos, gráfico)
```

## 🚀 Como rodar

**Backend:**
```bash
cd backend
python3 -m uvicorn main:app --reload
```

**Frontend:**
Abra `frontend/index.html` no navegador.

**Documentação automática (Swagger):**
```
http://localhost:8000/docs
```

## 📡 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/ordem` | Lista todas as OS |
| POST | `/ordem` | Cria nova OS |
| PUT | `/ordem/{id}` | Marca/desmarca como concluída |
| DELETE | `/ordem/{id}` | Remove uma OS |

## 💡 O que pratiquei com este projeto

- API REST com FastAPI e Pydantic (validação automática de dados)
- CORS — comunicação entre origens diferentes
- `fetch` com GET, POST, PUT e DELETE no frontend
- Separação de responsabilidades no frontend (`routes.js` e `script.js`)
- Renderização dinâmica de elementos via JS
- Gráfico interativo com Plotly.js
- Comunicação real entre frontend JS e backend Python

## 🚧 Status

Em desenvolvimento — backend completo. Falta: frontend JS (fetch, renderização dos cards e gráfico Plotly).

---

Desenvolvido por [Elias Martins de Almeida](https://github.com/eliasalmeidaa) como prática de desenvolvimento fullstack com Python e JavaScript.