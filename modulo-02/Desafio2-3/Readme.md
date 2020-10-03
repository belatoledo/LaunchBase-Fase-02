<h2 align="center">
  Desafio 2-3 Página de descrição
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
  <a href="#rocket-desafio-proposto">Desafios</a>&nbsp;|&nbsp;
  <a href="#books-conteudo-extra">Extra</a>&nbsp;|&nbsp;
  <a href="#memo-licença">Licença</a>
</h3>

___

<br>

## 🚀 Desafio Proposto
    
A partir do arquivo do desafio 2.2, adicionar no header um link chamado Conteúdos. 

Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. 

Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.

:white_check_mark: **Requisitos obrigatórios:**

*Informações da página*
- Título da página
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos

*Informações do card*
- Logo do curso (Starter, Launchbase e GoStack)
- Título do curso
- Quantidade de módulos dos cursos
- Informação se o curso é gratuito ou pago

*Modal*
-O modal deve conter um iframe que busca a página do curso (dica: basta adicionar starter, launchbase ou gostack ao final de https://rocketseat.com.br/). - Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal.

*Estilização*
- Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- Deve ser utilizado o grid para organizar os cursos
O modal nunca deve abrir maximizado

<br>

## :books: Conteúdo Extra

:white_check_mark: **Modal**

*Modal* é basicamente uma janela que abre sobre o conteúdo da página sem se desfazer dele e é feito com *HTML*, *CSS* e *JavaScript*.

Neste desafio além de criar o modal, foi pedido para implementar duas funcionalidades: o botão de fechar e maximizar o modal.

Para o fechamento do modal, foram realizadas, pelo javascript, modificações no css, através do **setAttribute()**, alternando entre o display configurado e o display *none*.

Já a maximização foi elaborada com o mesmo elemento *classlist*, no entanto foi utilizado o *toggle* para alternar entre maximizado e normal.

Para maiores informações sobre esses elementos consulte:

[Element.classList](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)
[Element.setAttribute](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute)


<br>

##  :memo: Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br>

<p align="center">
    <a href=".." >
        <img src="https://ik.imagekit.io/l7cwocexhc/iconfinder_agt_home_17821_M8bhUSrzv.ico" width="30">
    </a>
</p>
