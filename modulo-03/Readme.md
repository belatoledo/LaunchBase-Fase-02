<h1 align="center">Módulo 3 - Iniciando no Back-end</h1>

<p align="center">
    <img src="https://ik.imagekit.io/l7cwocexhc/LaunchBase_kzLdte5vZ.png" width=300>
</p>

<p align="center">
  <img alt="Made by Nadia Ligia" src="https://img.shields.io/badge/made%20by-Nadia%20Ligia-informational">
  
  <a href="license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational">
  </a>
</p>

___

<h3 align="center">
  <a href="#interrobang-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#rocket-desafios-propostos">Desafios</a>&nbsp;|&nbsp;
  <a href="#memo-licença">Licença</a>
</h3>

___

<br>

<h2 align="center">
  
</h2>

# :interrobang: Sobre

Este projeto faz parte das atividades do curso Bootcamp LaunchBase e visa praticar os conhecimentos teóricos do módulo.

<br>

# :rocket: Desafios Propostos
<br>

## :pushpin: Desafio 3-1: Primeiro servidor

<br><h3>
Criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de Cursos e Sobre). 

Além disso, deve ser implementando um arquivo padrão (*layout.njk*) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.
</h3>

**Arquivos HTML**

- **courses.njk**: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.

- **about.njk**: Arquivo referente à pagina de descrição, deve ser servido na rota /about.

- **layout.njk**: Arquivo referente à base comum entre as páginas.

- **not-found.njk**: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter *layout.njk* como base e um texto infortivo sobre o erro.
<br><br>

## :pushpin: Desafio 3-2: Arquivos nunjucks e dados dinâmicos

<br><h3>
Atualizar os arquivos com informações de cursos e descrição de forma dinâmica.
</h3>
<br><br>

## :pushpin: Desafio 3-3: Página de descrição do curso

<br><h3>
Criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.
</h3>

**Rota**
A rota também será a */courses*, porém o id do curso será passado via route params (ex.: /courses/id_do_curso).

**Informações**
- Layout padrão
- Card do curso
- Link que redireciona para a página do curso
<br><br>


# 📚 Conteúdo Extra

<h3>
Fiz um pequeno roteiro do que é necessário para se rodar um servidor. 
Esse roteiro será atualizado conforme avançar no conteúdo.
</h3>

### Pastas:
- views - arquivos njk
- public - arquivos css, js e /assets

### Arquivos:
- server.js
- data.js - dados da aplicação

## Terminal
- npm init -y - cria o package.json
- npm install express
- npm install -D nodemon
- npm install nunjucks - reload automatico do servidor
- npm install browser-sync npm-run-all -D - reload automático do browser

**Obs:** caso você tenha um package.json, pode-se instalar todas as dependências simultaneamente:
- npm install

## Configurações package.json
```js
"scripts": {  
    "start": "npm-run-all -p nodemon browsersync",  
    "nodemon": "nodemon server.js",  
    "browsersync": "browser-sync start --proxy http://localhost:5000  --files 'public,views'"  
 }
```
**Obs:** verificar a porta que está no *server.js* deve ser a mesma do *localhost*.

## Server.js
```js
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

//COLOCAR AS ROTAS GET

server.listen(5000, function(){
    console.log('SERVER IS RUNNING');
    
})
```
<br>

##  :memo: Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br>

<p align="center">
    <a href="https://github.com/nlnadialigia/LaunchBase-Fase-02.git" >
        <img src="https://ik.imagekit.io/l7cwocexhc/iconfinder_agt_home_17821_M8bhUSrzv.ico" width="30">
    </a>
</p>