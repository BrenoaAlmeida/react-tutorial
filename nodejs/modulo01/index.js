const express = require('express');

const server = express();
server.use(express.json());

// localhost:3000/curso
// Query params = ?nomde=NodeJS
// Route params = /curso/2
// Request body = {nome: 'John', tipo: 'backend'}
// req => dados na nossa aplicação
// res => informações para retornar uma resposta para o front-end

const cursos = ['Node JS', 'Java Script', 'React Native'];


//Executado independente da rota => MiddleWare Global
// MiddleWare também pode ter o next para ele seguir o fluxo
server.use((req, res, next) => {
    console.log("requisição middleware")

    console.log(`URL chamada ${req.url}`)

    return next();
})

server.get('/cursos/:index', (req, res) => {
    //const nome = req.query.nome
    const { index } = req.params;
    //return res.json({curso: `Aprendendo ${nome}`})
    return res.json(cursos[index])
});

server.get('/cursos', (req, res) => {
    return res.json(cursos)
})

//Inserção
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);
    return res.json(cursos);
})

//Atualização
server.put('/cursos/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body
    cursos[index] = name;
    return res.json(cursos);
})

//Deletar
server.delete('/cursos/:index', (req,res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.send();
})

server.listen(3000);