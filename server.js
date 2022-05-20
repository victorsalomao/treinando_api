//lembrando que pra utilizar esses conceitos teria que subir o projeto
// com express, iniciando pelo terminal


const express = required('express');
const app = express();
const data = require("./data.json");

app.use(express.json());
//verbos http - usado para criar comunicação com resources - importante
// utilizar os verbos na hora de consumir a api e descobrir o que fazemos
// GET - Receber dados de um resource.
// POST - Enviar dados ou informações para serem processados por um Resouce.
// PUT - Atualizar dados de um resouce.
// DELETE - Deletar um resouce.


//http://localhost:3000/clients 

//endpoint - clients é o nome do meu resouce - meu endpoint
//uri - todo o endereço do meu localhost - endereço - minha chamada

app.get("/clients", function(req, res){

    res.json(data)

}); //request e response


app.get("/clients/:id", function(req, res){

    const { id } = req.params
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);

}); //id porque quero pegar um cliente
app.post("/clients", function(req, res){

    const { name, email} = req.body

    //salvar

    res.json({name, email});

});


app.put("/clients/id:", function(req, res){

    const {id} = req.params;
    const client = data.find(cli => cli.id == id);


}); //quero atualizar um cliente
app.delete("/clients", function(req, res){

    const { id } = req.params;
    const clientFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
});

app.listen(3000, function() {
    console.log("Server Online");
});

