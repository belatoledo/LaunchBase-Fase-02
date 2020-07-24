<h1 align="center">
    <img src="https://ik.imagekit.io/l7cwocexhc/LaunchBase_kzLdte5vZ.png">
</h1>

<h2 align="center">
  Desafio 01-4 - Aplicação: Operações bancárias
</h2>

# Indice

  - [🔖Sobre](#sobre)
  - [📌Teoria aplicada](#-teoria-aplicada)
  - [✨Operações Bancárias](#operações-bancárias)

# 🔖Sobre

Este projeto faz parte das atividades do curso **Bootcamp LaunchBase** e visa desenvolver o conhecimento adquirido no estudo de booleanos, organização, padronização e escrita.

---

## 📌Teoria Aplicada

### Boolean

- Tipo de dado que só tem dois valores possíveis: **true** ou **false**.
- Usamos os booleanos em situações de afirmação, ou seja, quando
precisamos dizer se uma coisa é verdadeira ou falsa.

### Organização, padronização e escrita

Algumas dicas valiosas de padronização do código:

- manter no código somente comentários necessários;
- padronizar o uso ou não de vírgulas;
- procurar manter a identação do código conforme é escrito. Caso perceba no final do processo que ele não está bem identado pode-se utilizar, no vscode, o *format selection*;
- manter espaçamento entre os blocos de códigos, para melhor visualização e compreensão;
- dar às *funções* nomes que correspondam ao seu funcionamento; e
- padronizar o código todo em inglês.
---

## ✨Operações Bancárias

### Intro

- Crie um programa para realizar operações bancárias na conta de um usuário.

- Comece criando um objeto com o nome do usuário, suas transações e saldo.

- As *transações* (transactions) devem iniciar como um array vazio [] e o *saldo* (balance) em 0 (zero).

### Adicionar transações

- Crie uma função *createTransaction* para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

```js
{
  type: 'credit',
  value: 50.5
}
```
- O *type* pode ser *credit* para créditos e *debit* para débitos da conta do usuário.

- Quanto uma transação for do tipo *credit* ela deve também somar o valor do crédito no saldo (balance) do usuário.

Se for uma transação do tipo *debit* ela deve subtrair o valor do débito no saldo (balance) do usuário.

Dica.: Você pode usar o método *user.transactions.push(transaction)* para adicionar um novo item no array de transações.

### Relatórios

- Crie uma função chamada *getHigherTransactionByType* que recebe como parâmetro o tipo de transação *credit/debit*, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
```js
getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
```

- Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
```js
getAverageTransactionValue(); // 83.3
```

-Crie uma função chamada *getTransactionsCount* que retorna o número de transações de cada tipo *credit/debit*, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
```js
getTransactionsCount(); // { credit: 5, debit: 3 }
```

### Exemplo de resultado final do projeto

```js
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
```

<h4><i>Resposta: Desafio1-4.js</i></h4>

---
<br>


<a href="../Readme.md">
<img src="https://ik.imagekit.io/l7cwocexhc/iconfinder_agt_home_17821_M8bhUSrzv.ico" width="30">
</a>


Desenvolvido 💖 por Nádia Ligia
