const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'tododb'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err.stack);
        return;
    }
        console.log('✅ Conectado ao Mysql com o id ' +  db.threadId);
});
 app.get('/api/tasks', (req, res) => {
    const  sql = 'SELECT * FROM tasks ORDER BY id DESC';

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({error: 'Erro ao buscar tarefas.'});
        }
        res.json(results);
    });
 });


 app.post('/api/tasks', (req, res) => {
    const { descricao} = req.body;

    const  sql = 'INSERT INTO tasks (descricao) VALUES (?)';

    db.query(sql, [descricao], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao ao criar a tarefa.'});
        };

        res.status(201).json({
            id: results.insertId,
            descricao: descricao,
            concluida: 0
        });
    });
 });

 const PORT = 3000;

 app.listen(PORT, () => {
    console.log(`🌎 Servidor backennd rodando em https://localhost:${PORT} `)
 });