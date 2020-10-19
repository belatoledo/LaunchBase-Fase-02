import express from 'express'
import nunjucks from 'nunjucks'

const server = express()

server.set('view engine', 'html')
nunjucks.configure('views', {
    express: server
})

server.get('/', function (request, response) {
    return response.render('index');
})

server.listen(5000, () => {console.log('SERVER IS RUNNING')})



