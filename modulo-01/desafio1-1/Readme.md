<h2 align="center">
  Desafio 01-1 - Primeiros passos com js
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

##  :pushpin: Teoria Aplicada
<br>

### Condicional IF ELSE

As condicionais nos possibilitam escrever trechos de códigos que só serão executados se passarem pela verificação.

**Sintaxe do IF** <br>
O comando *if* sempre será seguido de parênteses ( ), que englobam a condição e chaves { } que englobam o código que deve ser executado caso a condição seja verdadeira.


```js
if (condição) {
    // código que será executado
}
```

*Exemplo:*

```js
var favoriteColor = 'purple'

if (favoriteColor == 'purple'){
    console.log ('Essa é minha cor favorita!')
}
```
**Sintaxe do IF ELSE**
O comando *else* complementa o *if*. Ele é inserido após o fechamento das chaves do *if* e seu bloco de código também é englobado com chaves { }.

```js
if (condição){
    //código que será executado se a condição for verdadeira
} else {
    // código que será executado caso a condição seja falsa
}
```
*Exemplo:*

```js
var favoriteColor = 'red'

if (favoriteColor == 'purple'){
    console.log ('Essa é minha cor favorita!')
} else {
    console.log ('Essa não é minha cor favorita!')
}
```
<br>

## :rocket: Desafios
<br>

### ✨ Cálculo de IMC

Criar um programa para calcular o IMC e nível de obesidade de uma pessoa.

**Premissas**

- IMC = peso / (altura*altura);
- IMC >= 30 - pessoa acima do peso
- Informar a pessoa se ela está ou não acima do peso

- [Resposta](/desafio1-1a)

<br>

### ✨ Cálculo de Aposentadoria

Criar um programa para calcular a aposentadoria de uma pessoa.

**Premissas**

- O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
- Informar se a pessoa pode ou não se aposentar.

- [Resposta](/desafio1-1b)

<br>

##  :memo: Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br>

<p align="center">
    <a href=".." >
        <img src="https://ik.imagekit.io/l7cwocexhc/iconfinder_agt_home_17821_M8bhUSrzv.ico" width="30">
    </a>
</p>