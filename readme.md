# OS PLACE — Ordens de Serviço para Assistência Técnica 📱

Sistema de gerenciamento de ordens de serviço para assistência técnica de celular, com backend em **Python (FastAPI)** e frontend em **JavaScript puro**.

## 🛠️ Tecnologias

- **Python** + **FastAPI** — API REST com CRUD completo
- **JavaScript (Vanilla)** — frontend consumindo a API via `fetch`
- **HTML5** + **CSS3** — interface simples e funcional

## ⚙️ Funcionalidades

- ✅ Criar nova ordem de serviço
- ✅ Listar todas as ordens de serviço
- ✅ Atualizar status da OS (Aguardando, Em andamento, Concluído)
- ✅ Remover ordem de serviço
- ✅ Renderização dinâmica dos cards via JS
- ✅ Contador de OS abertas em tempo real

## 📋 Campos de uma Ordem de Serviço

- `id` — número único gerado automaticamente
- `cliente` — nome do cliente
- `aparelho` — modelo do celular (ex: iPhone 13, Samsung A54)
- `problema` — descrição do defeito relatado
- `status` — `aguardando` | `em_andamento` | `concluido`
- `data` — data de entrada gerada automaticamente

## 📁 Estrutura

```
os-manager/
├── backend/
│   ├── app.py      # FastAPI: rotas GET, POST, PUT, DELETE
│   └── dados.py    # lista de ordens em memória
└── frontend/
    ├── index.html
    ├── css/style.css
    └── js/script.js
```

## 🚀 Como rodar

**Backend:**
```bash
cd backend
python3 -m uvicorn app:app --reload
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
| GET | `/ordens` | Lista todas as ordens de serviço |
| POST | `/ordens` | Cria uma nova OS |
| PUT | `/ordens/{id}` | Atualiza o status da OS |
| DELETE | `/ordens/{id}` | Remove uma OS |

## 💡 O que pratiquei com este projeto

- API REST com FastAPI e Pydantic
- CORS — comunicação entre origens diferentes
- `fetch` com GET, POST, PUT e DELETE no frontend
- Renderização dinâmica de elementos via JS
- Comunicação real entre frontend JS e backend Python

---

Desenvolvido por [Elias Martins de Almeida](https://github.com/eliasalmeidaa) como prática de integração entre frontend JS e backend Python.