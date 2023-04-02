const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 3000
const server = require('http').createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/DsKBlog',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/DsKBlog/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html')
})
let data = []
app.get('/DsKBlog/api/data',(req,res) =>{
    res.send(data)
})
app.post('/DsKBlog/data_blog',(req,res)=>{
    const newData = req.body
    data.push(newData)
    res.send(`publicado  <a href='/DsKBlog'>Voltar</a>`)
    
})







server.listen(port,() =>{
console.log(`servidor rodando na porta ${port}`)
})