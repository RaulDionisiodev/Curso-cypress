# Curso Testes automátizados com Cypress (básico)

Anotações do curso de cypress js da [Escola Talking About Testing](https://talkingabouttesting.coursify.me/) 


### Aula 1 - Instalação e setup inicial

* Inicializar um repositório git e criar o arquivo _.gitignore_.
* Inicializar um projeto com NPM usando `npm init` o qual vai criar o arquivo _package.json_
* Instalar o cypress com o comando `npm instal cypress --dev` - Eu só consegui instalar com o yarn: `yarn add cypress --dev`
* Para rodar o cypress usa-se o comando `npx cypress open`. No meu caso precisei usar o `yarn run cypress open`

O npx cypress open, quando rodado pela primeira vez, cria a pasta _cypress_ e o arquivo _cypress.json_. Nossos testes ficam na pasta _integrations_. Na pasta _suport_ ficam os comandos customizados.

Na aplicação Eletron (Aplicação desktop que usamos para rodar os testes) podemos ver as comfigurações default do Cypress. Essas configurações podem ser sobrescritas usando o arquivo _cypress.json_

### Aula 2 - Navegando através de URLs

Para criar um teste precisamos criar um arquivo _nome_da_suite.spec.js_.
A primeira coisa é colocar um nome na suíte de teste na função _describe_. Essa função recebe como parâmetros o nome da suíte e as outras funções de teste.
Se algo precisa ser repetido antes de todos os testes usanmos a função _beforeEach_. 
O comando/função que abre uma url é o `cy.visit`, em cada `it` codificamos um teste diferente.

### Aula  3 - Digitando em campos de texto

Uma das formas de localizar elementos com cypres é usando seletores css (id, class, etc..). 
O comando  `cy.get` é o comando usado para identificar elementos através de seletores css.
O comando `type` é usado para dizer ao cypress qual o valor que será digitado no campo selecionado pelo cy.get
É possível usar variáveis para valores que são repetidos muitas vezes no script. O cypress entende as especificações do ES6 (arrow functions, template literals, const e etc)
Quando eu quero rodar somente um teste da minha suíte eu uso a palavra reservada `only` após o `it`.
O cypress usa a biblioteca mocha e tem as mesmas funcionalidades da mesma. O only é uma funcionalidade do mocha.
Quando salvamos o arquivo o cypress roda automáticamente os testes.

### Aula 4 - Interagindo com inputs do tipo select

Para interagir com um select nós usamos o cy.get para selecionar o elemento e usamos o comando `select` para dizer ao cypress qual a option que deve ser selecionada.

### Aula 5 - Interagindo com Radio buttons

Quando um input radio é selecionado o outro e desselecionado automáticamente.
O comando para selecionar um radio button é o `check`. Selecionamos o elemento pelo id e usamos a função check nele.


### Aula 6 - Interagindo com checkboxes

Diferentes dos radio buttons, os checkboxes podem ser selecionados todos ao mesmo tempo.
Também usamos a função check para selecionar um checkbox. A forma de fazer é a mesma para radio buttons.
Para desselecionar um checkbox a função usada é o `uncheck`


### Aula 7 - Realizando verificações (assertions)

Existem vários tipos de verficação que podemos fazer. Um deles é o de verificar se um determinado trecho de html tem um texto específico.
Uso o `cy.get` para selecionar o elemento e a função `should` para selecionar o que deve ser verificado (primeiro parâmetro) e qual texto deve ter (segundo parâmetro).
É possível verificar sem um elemento existe, se um elemento especifico tem um texto entre outras coisas.
A verificação por texto é case-sensitive, ou seja, diferencia as maiúsculas das minúsculas. Caso haja diferença entre letras maiúsculas e minúsculas o teste vai falhar.
No cypress é possível criar um álias para um seletor css para repetí-lo ao longo dos testes.
Para criar o álias de um elemento devemos usar a função `as` e colocar no parâmatro o nome que queremos dar ao mesmo. Para usar o àlias devemos colocar uma `@` e o nome selecionado. Quando criamos um álias ele salva o estado do elemento na hora em que ele foi criado. Se o elemento mudar ao longo do teste precisamos identificá-lo 
A função `clear` limpa campos de texto.


### Aula 8 - Testes end-to-end com Cypress

Uso das informações das aulas anteriores para criar um teste completo na aplicação exemplo. Vamos preencher todos os campos e verificar se o botão de confirmação fica habilitado. Depois usaremos o botão reset para apagar todos os campos e verificaremos se o botão de confirmação fica dasabilitado.
A função `click` pode ser usada para clicar no elemento selecionado, sejam botões, checkboxes, radio buttons e outros.

### Aula 9 - Comandos Customizados
