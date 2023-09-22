const express = require("express")
const router =  express.Router() /*configuação de rota*/

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/ola', mostraOla)) /* chama a funcao */
app.listen(porta, mostraPorta)