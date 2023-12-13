const express = require('express');
const app = express();

app.use(express.json());

const frases = [
    {id: 10, autor: "Clodoaldo Baltazar", frase: "Minha frase"},
    {id: 20, autor: "Clodo", frase: "frase"},
]

app.get('/', (req, res) => {
    res.send('Prog. Web - Deus me abençoe');
})

app.get('/frases', (req, res) => {
    res.send(frases);
})

app.post('/frases', (req, res) => {
    frases.push(req.body);
    res.status(201).send();
})

app.delete('/frases/:id', (req, res) => {
    let id = req.params.id;
    let index = frases.findIndex((frase) => frase.id == id);
    if (index == -1){
        res.status(404).send();
    }else {
        frases.splice(index, 1);
        res.status(200).send();
    }
})

app.put('/frases/:id', (req, res) => {
    let id = req.params.id;
    let frase = req.body;
    let index = frases.findIndex((frase) => frase.id == id);
    if (index == -1) {
        res.status(404).send();
    }else {
        frases[index].autor = frase.autor;
        frases[index].frase = frase.frase;
        res.status(200).send();
    }
})

const port = 8080;
app.listen(port, (err) =>{
    if (err) {
        console.error('Falha de acesso');
    }else{
        console.log(`Aplicação escutando na porta: ${port}`);
    }
})