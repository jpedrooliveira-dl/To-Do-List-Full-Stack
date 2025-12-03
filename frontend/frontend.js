const API_BASE_URL = 'http://localhost:3000/api/tasks';
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');

// Função para LER (Read) as tarefas do Backend
async function loadTasks() {
    try {
        // Chama a Rota GET /api/tasks do seu backend
        const response = await fetch(API_BASE_URL); 
        
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        
        // Converte a resposta JSON do backend para objeto JS
        const tasks = await response.json(); 
        
        // Limpa e Renderiza a lista no HTML
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.descricao;
            // Adicione aqui lógica para marcar como concluída, excluir, etc. (os próximos passos do CRUD)
            taskList.appendChild(li);
        });

    } catch (error) {
        console.error('Falha ao carregar tarefas:', error);
        taskList.innerHTML = '<li>Erro ao conectar com o servidor backend.</li>';
        taskList.style.color = '#ff0000';
    }
}

// Função para CRIAR (Create) uma nova tarefa
async function addTask(e) {
    e.preventDefault(); // Impede o recarregamento da página
    
    const taskInput = document.getElementById('taskInput');
    const descricao = taskInput.value.trim();

    if (!descricao) return;

    try {
        // Chama a Rota POST /api/tasks do seu backend
        const response = await fetch(API_BASE_URL, {
            method: 'POST', // Método HTTP para criação
            headers: {
                'Content-Type': 'application/json'
            },
            // Envia a nova tarefa em formato JSON para o backend
            body: JSON.stringify({ descricao: descricao }) 
        });
        
        if (response.status === 201) {
            taskInput.value = ''; // Limpa o input
            loadTasks(); // Recarrega a lista para mostrar a nova tarefa
        } else {
            alert('Erro ao adicionar tarefa.');
        }

    } catch (error) {
        console.error('Erro ao enviar tarefa:', error);
        alert('Falha na comunicação com o servidor.');
    }
}

// Event Listeners
taskForm.addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', loadTasks); // Carrega as tarefas ao iniciar a página