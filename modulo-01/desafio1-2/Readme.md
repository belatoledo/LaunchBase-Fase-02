<h2 align="center">
  Desafio 01-2 - Lidando com objetos e vetores
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

### Objetos

Um **objeto** é um tipo especial de variável que contém propriedades e métodos.
Cada *propriedade* é composta por um par de "nome: valor". 
O *método* é uma propriedade que armazena uma *função*.

**Sintaxe do Objeto** <br>
O *objeto* é criado dentro de chaves { } e cada propriedade será separada por vírgula.

```js
const cadastro = {
  nome: 'Luzia',
  idade: 60,
  preferencia: 'passar roupa'
}
```
### Vetores

O objeto **array** (vetores) é utilizado para salvar vários dados em uma única matriz. 
Ele é um objeto como todos os outros, porém, conta com índices para identificar cada um dos valores que estão dentro dele. 
Tais índices são números que vão de zero (0) ao número de elementos presentes no array, menos um.

**Sintaxe do Array**<br>
O *array* são declarados com com colchetes [ ] e para acessar um elemento dentro de um *array* usamos o operador de índice, que é escrito dentro de colchetes [ ].

```js
const navegadores = ['Safari', 'IE', 'Firefox', 'Chrome', 'Opera'];

navegadores[0] = 'Safari'; // Índice 0
navegadores[1] = 'IE'; // Índice 1
navegadores[2] = 'Firefox'; // Índice 2
navegadores[3] = 'Chrome'; // Índice 3
navegadores[4] = 'Opera'; // Índice 4
```
<br>

## :rocket: Desafios Propostos

### :sparkles: Armazenamento de dados cadastrais

- Criar um programa que armazena dados da empresa Rocketseat dentro 
de um objeto chamado empresa, com os seguintes dados: nome, cor, foco,
endereço.

- Para o endereço utilizar duas propriedades: rua e número.

- Imprimir em tela utilizando console.log e o o formato de template 
strings no nome da empresa e seu endereço no seguinte formato:

  *A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260*

- [Resposta](Desafio1-2a.js)
<br>

## :sparkles: Armazenar dados de um programador

 - Crie um programa com um objeto para armazenar dados de um programador como nome, 
idade e tecnologias que trabalha.

- Um programador pode trabalhar com várias tecnologias, por isso armazene essas 
tecnologias em um array.

- As tecnologias também devem ser objetos contendo nome e especialidade

- Imprima em tela o nome e especialidade da primeira tecnologia que o usuário 
utiliza no seguinte formato:

  *O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop*

- [Resposta](Desafio1-2b.js)

<br>

##  :memo: Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br>

<p align="center">
    <a href=".." >
        <img src="https://ik.imagekit.io/l7cwocexhc/iconfinder_agt_home_17821_M8bhUSrzv.ico" width="30">
    </a>
</p>