// Importar a dependencia
const sqlite3 = require("sqlite3").verbose();
// Iniciar o objeto do banco de dados (operações)
const db = new sqlite3.Database("./src/database/database.db");
// Exportando o arquivo
module.exports = db
// Utilizando o banco de dados
// db.serialize(()=>{
//     // Criar um tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);
//     // Insirir os dados na tabela
//     const query = 
//     `       INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//             ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `
//     const value = [
//         "https://images.unsplash.com/photo-1591186023606-7d859f9d1b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Numero 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos, Lampadas"
//     ];
//     function afterInsertData(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log("Cadastrado com sucesso");
//         console.log(this);
//     }
//     db.run(query,value,afterInsertData);
//     // Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err,rows){
//         if (err){
//             return console.log(err);
//         }
//         console.log("Todos os Registrados");
//         console.log(rows);
//     });

//     // Deletar os dados da tabela
//     // db.run(`DELETE FROM places WHERE id=?`,[1], function(err){
//     //     if(err){
//     //         return console.log(err);
//     //     }
//     //     console.log("Arquivos deletados");
//     // });
// })


