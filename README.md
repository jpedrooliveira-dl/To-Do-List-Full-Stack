# 🚀 Projeto Full Stack: Lista de Tarefas (To-Do List)

![Badge de Licença](https://img.shields.io/badge/license-MIT-blue.svg)
![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow.svg)

Este é um projeto de exemplo de uma aplicação **Full Stack** de uma Lista de Tarefas (To-Do List). O objetivo principal é demonstrar a arquitetura e a comunicação entre um frontend interativo e um backend robusto que expõe uma API RESTful.

O frontend é construído com HTML, CSS e JavaScript puro, consumindo os serviços fornecidos pelo backend. O backend, por sua vez, é desenvolvido em Node.js com Express e utiliza um banco de dados **MySQL** para persistir as informações.

## ✨ Funcionalidades

- **Visualizar Tarefas**: Carrega e exibe a lista de tarefas ao iniciar a aplicação.
- **Criar Novas Tarefas**: Permite que o usuário adicione novas tarefas à lista.
- **Interface Reativa**: A lista de tarefas é atualizada dinamicamente sem a necessidade de recarregar a página.
- **Comunicação Cliente-Servidor**: Demonstração clara de requisições assíncronas (Fetch API) para uma API REST.

*(Funcionalidades futuras planejadas: Edição, Exclusão e Marcação de tarefas como concluídas).*

---

## 🛠️ Tecnologias Utilizadas

O projeto é dividido em duas partes principais:

### Frontend
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização (pode ser adicionado posteriormente).
- **JavaScript (ES6+)**: Lógica do cliente, manipulação do DOM e comunicação com a API via `fetch`.

### Backend
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express.js**: Framework para criação da API RESTful e gerenciamento de rotas.
- **MySQL**: Banco de dados relacional para a persistência das tarefas.
- **Nodemon** (Desenvolvimento): Para reiniciar o servidor automaticamente durante o desenvolvimento.
- **CORS**: Middleware para permitir requisições de origens diferentes (do frontend para o backend).

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
- Node.js (versão 18.x ou superior recomendada)
- Git (para clonar o repositório)

---

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente.

1. **Clone o repositório:**
   ```bash
   git clone(https://github.com/jpedrooliveira-dl/To-Do-List-Full-Stack.git
   cd projeto_full
   ```

2. **Configure e inicie o Backend:**
   ```bash
   # Navegue até a pasta do backend
   cd backend

   # Instale as dependências
   npm install

   # Inicie o servidor em modo de desenvolvimento
   npm run dev
   ```
   O servidor backend estará rodando em `http://localhost:3000`.

3. **Abra o Frontend:**
   - Navegue até a pasta `frontend`.
   - Abra o arquivo `index.html` diretamente no seu navegador de preferência (ex: Chrome, Firefox).

A aplicação deve carregar e buscar as tarefas do backend automaticamente!

---

## 🔌 Endpoints da API

A API RESTful expõe os seguintes endpoints para manipulação das tarefas:

| Método HTTP | Rota             | Descrição                      |
|-------------|------------------|--------------------------------|
| `GET`       | `/api/tasks`     | Retorna a lista de todas as tarefas. |
| `POST`      | `/api/tasks`     | Cria uma nova tarefa.          |

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
