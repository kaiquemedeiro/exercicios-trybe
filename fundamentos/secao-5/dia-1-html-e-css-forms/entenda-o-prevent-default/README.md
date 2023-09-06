hegou o momento de testar os conhecimentos apresentados no conteúdo do dia. Vamos nessa?

Antes de dar início aos exercícios, siga as instruções:

Crie um arquivo HTML index.html;
Crie um arquivo JavaScript script.js;
Em seu arquivo HTML:
Adicione o <script src="script.js"></script> no final do body do HTML;
Copie esses três elementos em sua página, a saber a, input type="text", checkbox.
Em seu arquivo Javascript, adicione os seletores abaixo no começo do arquivo.
Copiar
<!-- elemento para copiar -->
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
<input type="text" id="input-text"/>
<input type="checkbox" id="input-checkbox" />
Copiar
// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");
Exercício 1
Adicione um evento click no elemento a que possui o id href. 
Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. 
Ou seja, ao clicar no link, nada deve acontecer.

Exercício 2
Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

Exercício 3
Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método preventDefault de forma que somente o caractere a (letra “a” minúscula) possa ser digitado na caixinha.

De olho na dica 👀: para capturar a tecla digitada, utilize o event.key.

Saiba mais 💡: Para entender mais sobre o comportamento do método preventDefault, acesse a documentação do MDN ou a página da w3schools.