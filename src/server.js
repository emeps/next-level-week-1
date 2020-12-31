// Criação do servidor
const express = require("express");
const server = express();
// Pegar o banco de dados
const db = require("./database/db");
// Configurando pasta publica
// Habilitar o uso do req.body
server.use(express.urlencoded({ extended:true}))
server.use(express.static("public"));
// Tamplate engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
   express: server,
   noCache: true 
});
// Renderizar as paginas html

// Configurar caminhos
// HOME
// req => requisição
// res => resposta
server.get("/",(req,res) =>{
    // Resposta do servidor
    // res.send("Esta quase");
    return res.render("index.html");
});
server.get("/create-point",(req,res) =>{
    // Query strings da URl
    console.log(req.query);
    // Resposta do servidor
    // res.send("Esta quase");
    return res.render("create-point.html");
});
server.post("/savepoint", (req,res)=>{
    // console.log(req.body);
    // return res.send("ok");
    // Insirir dados no banco de dados
    const query = 
        `       INSERT INTO places(
                image,
                name,
                address,
                address2,
                state,
                city,
                items
                ) VALUES (?, ?, ?, ?, ?, ?, ?);
        `
        const value = [req.body.image,req.body.name,req.body.address,req.body.address2,req.body.state,req.body.city,req.body.items];
        function afterInsertData(err){
            if(err){
                return console.log(err);
            }
            console.log("Cadastrado com sucesso");
            console.log(this);
            return res.render("savepoint.html",{saved: true});
        }
        db.run(query,value,afterInsertData);
})
server.get("/search",(req,res) =>{
    const search = req.query.search;
    if(search === ""){
        return res.render("resource.html",{total:0});
    }


    // Pegar os dados do banco de dados
    db.all(`SELECT*FROM places WHERE city LIKE'%${search}%'`, function(err, rows){
                if (err){
                    return console.log(err);
                }
                const total = rows.length
                // console.log("Todos os Registrados");
                // console.log(rows);
                // Resposta do servidor
                // res.send("Esta quase");
                return res.render("resource.html",{places: rows, total});
            });
    
    
});
// Operação do servidor (open)
server.listen(3000);