const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const port = 3132

app.use(express.static(__dirname+'/style.css'))
app.set('views', path.join(__dirname,'views'))
app.set('style.css')

app.get('/', (req, res)=> res.send("<h1>Tente express</h1>"))
app.get("/cafe",(req, res) => res.sendfile(__dirname+'/index.html'))


http.createServer(app).listen(81, ()=> console.log("taonline") )
// app.listen(port, () => console.log(`Seu site está online na porta ${port}`))


