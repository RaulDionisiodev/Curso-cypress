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
O comando que abre uma url é o `cy.visit`, em cada `it` codificamos um teste diferente.