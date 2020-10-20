import express from 'express'
import nunjucks from 'nunjucks'

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
    
})

server.get('/', function (request, response) {
    return response.render('about');
})

server.get('/portfolio', function (request, response) {
    return response.render('portfolio')
})

server.get('/not-found', function(request, response) {
    return response.status(404).render('not-found')
})



server.listen(5000, () => {console.log('SERVER IS RUNNING')})



