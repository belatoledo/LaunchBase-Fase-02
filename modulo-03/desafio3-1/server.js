const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoscape: false,
    noCache: true
})

server.get('/', function(req,res){
    return res.render("about")
})

server.get('/courses', function(req,res){
    return res.render("courses")
})

server.get('/not-found', function(req,res){
    return status(404).render("not-found")
})

server.listen(3000, function(){
    console.log("SERVER IS RUNNING")
    
})
