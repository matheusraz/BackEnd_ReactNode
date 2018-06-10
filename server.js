const express = require('express')
const bodyparser = require('body-parser')
const server = express()
const port = 3000 || process.env.PORT

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended:true}));

server.listen(port, (erro) => {
  if(erro){
    console.log('Erro ao iniciar servidor')
  } else {
    console.log(`Servidor iniciado na porta ${port}`)
  }
});
