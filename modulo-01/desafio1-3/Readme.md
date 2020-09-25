<h2 align="center">
  Desafio 01-3 - Funções e estruturas de repetição
</h2>

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
  <a href="#pushpin-teoria-aplicada">Teoria</a>&nbsp;|&nbsp;
  <a href="#rocket-desafios-propostos">Desafios</a>&nbsp;|&nbsp;
  <a href="#memo-licença">Licença</a>
</h3>

___

<br>

## :pushpin: Teoria Aplicada

### Estruturas de repetição (Loop)

*Loop* executa um trecho de código quantas vezes for necessário. 
É importante sempre colocar um *ponto de parada*, caso contrário, o código fará repetições infinitas.

#### Loop For
*For* utiliza um contador para definir quantas vezes deve ser repetido.

**Sintaxe do FOR** <br>
É composto por três partes principais que ficam entre parênteses ( ) separados por ponto e vírgula ;.
- **início** : determina em qual número o contador deve iniciar. Não se esqueça de criar uma variável para guardar esse valor!
- **condição de parada**: determina em qual número o contador deve parar. Devemos criar uma condicional. Exemplo: contador < 10
- **incrementador**: para cada vez que o loop é executado, nós alteramos o número do contador, adicionando +1. 

```js
for (inicio; condição de parada; incrementador){
  // código que deve ser repetido
}
```
**Exemplo** <br>
Imprimir "Dia X", sete vezes, sendo que no lugar do X queremos um número dinâmico.

```js
for (let i=1; i<=7; i++){
  console.log('Dia' + i)
}
```

**Sintaxe FOR com ARRAY**
O *for* continua com a mesma sintaxe, mas utlizamos o contador para pegar um elemento da lista.
O valor inicial deve ser 0 para pegar a primeira posição do *array* e a condição de parada deve ser menor que o tamanho do *array*.
Para chegarmos à ultima posição do *array* utilizamos *length*.

```js
const alimentos = ['pão', 'bolacha', 'macarrão']

for (let i=0; i < alimentos.length; i++){
  console.log ('Esse alimento se chama: ' + alimentos[i])
}
```

### Funções
Função é um conjunto de instruções que executa uma tarefa ou calcula um valor.
Podemos fazer qualquer instrução dentro da função, como loops condições e afins!

**Sintaxe FUNCTION**
Uma função é formada pela palavra reservada *function* seguida do nome da função; lista de argumentos para a função, entre parênteses ( ) e separados por vírgulas; e declarações JavaScript que definem a função, entre chaves [ ].

```js
function saudacao (){
  console.log('Olá, seja bem vindo!')
}
```

**Exemplo**
```js
function exibirNomeCarros(){
  const listaDeCarros = ['Fox', 'Celta', 'Uno', 'Astra']

  for (let i=0; i < listaDeCarros.length; i++){
    console.log('Nome do carro é: ' + listaDeCarros[i])
  }
}
```
<br>

## :rocket: Desafios Propostos

### :sparkles: Usuários e tecnologias
- Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome 
  e suas tecnologias.
- Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

    *Carlos trabalha com HTML, CSS*<br>
    *Jarmine trabalha com JavaScript, CSS*<br>
    *Tuane trabalha com HTML, Node.js*

- [Resposta](desafio1-3a.js)

<br>

### :sparkles: Busca por tecnologias

- Baseado no desafio anterior crie uma função que rece os dados de um objeto de usuário e retorna se o usuário trabalha com CSS ou não.
- Essa função deve retornar um boolean true/false.
- Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída

- Se SIM, imprima em tela as informações do usuário: <br>
  *O usuário Carlos trabalha com CSS*
- Se NÃO, imprima em tela:<br>
  *Ninguém trabalha com CSS*

- [Resposta](desafio1-3b.js)

<br>

## ✨Soma de despesas e receitas

- Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
- Percorra o array de usuários e para cada usuário chame uma função chamada *calculaSaldo* que recebe como parâmetro as receitas e despesas do usuário.
- Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função *calculaSaldo*.
- A função *calculaSaldo* deve utilizar a função *somaNumeros* para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.
- No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:<br>
  *Fulano possui saldo POSITIVO de 43.3*<br>
  *Sicrano possui saldo NEGATIVO de -90.3*<br>

- [Resposta](desafio1-3c.js)

<br>

##  :memo: Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br>

<p align="center">
    <a href=".." >
        <img src="https://ik.imagekit.io/l7cwocexhc/iconfinder_agt_home_17821_M8bhUSrzv.ico" width="30">
    </a>
</p>