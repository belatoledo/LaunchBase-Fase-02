const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const lessons = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoscape: false,
    noCache: true
})

server.get('/', function(req,res){
    const about = {
        contacts: [
            {url:'https://discordapp.com/invite/gCRAFhc', name:'Comunidade', target:'_blank'},
            {url:'malito: oi@rocketseat.com.br', name:'Email', target:''},
            {url:'tel: +5547992078767', name:'Telefone', target:''},
            {url:'/courses', name:'Conteúdos', target:''},
        ],
        description:'Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀 <br> Em um mundo onde a informação fica obsoleta cada vez mais rápido, velocidade de aprendizado é a chave para o sucesso. <br> Por isso a Rocketseat oferece através de uma plataforma inteligente e metodologia prática, além de comunidade, eventos, conteúdo e conexão com o mercado de trabalho, todas as ferramentas que você precisa para masterizar no menor tempo possível as tecnologias mais modernas de desenvolvimento web e mobile, e dessa forma avançar para o próximo nível como programador. <br>',
        sub_title:'Principais tecnologias utilizadas',
        images:[
            {img:'https://img2.gratispng.com/20180527/oio/kisspng-javascript-programming-language-ajax-5b0b285b692210.3071468515274578834306.jpg', name:"Javascript"},
            {img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png', name: 'NodeJs'},
            {img: 'https://img2.gratispng.com/20180820/pql/kisspng-react-logo-redux-webpack-babel--5b7b7258327b51.9184659615348168562068.jpg', name: 'ReactJS'},
            {img: 'https://miro.medium.com/fit/c/1838/551/1*rszSEfCsKDEwPhFk2Zvmhw.png', name: 'React Native'}
        ],
        links: [
            {icon:"/assets/github.png", name: 'Github', url: 'https://github.com/Rocketseat'},
            {icon:"/assets/facebook.png", name: 'Facebook', url: 'https://www.facebook.com/rocketseat/'},
            {icon:"/assets/linkedin.png", name: 'Linkedin', url: 'https://www.linkedin.com/school/rocketseat/'},
            {icon:"/assets/instagram.png", name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/'}
    ]   
    }
    return res.render("about", {about:about})
})

server.get('/courses', function(req,res){
    return res.render("courses", {items:lessons})
})

server.get('/not-found', function(req,res){
    return status(404).render("not-found")
})

server.listen(3000, function(){
    console.log("SERVER IS RUNNING")
    
})
