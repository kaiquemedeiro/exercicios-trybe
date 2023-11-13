O que vamos aprender?
Testes automatizados são parte fundamental de qualquer software nos dias atuais. E com React não é diferente.

Aqui na Trybe, aprendemos a realizar testes unitários com Jest. Nós utilizamos esse tipo de teste para verificar partes específicas do código, como o funcionamento das funções que criamos.

Hoje, você vai aprender a escrever testes automatizados em React.

Iniciaremos os estudos da react-testing-library, uma biblioteca que vai nos auxiliar a testar o comportamento da pessoa usuária em aplicações React, simulando a ocorrência de eventos, com uma abordagem chamada testes de integração. Naturalmente, tudo isso virá acompanhado de discussões acerca de boas práticas de teste e tradeoffs de diferentes abordagens de teste, ou seja, quando e porque utilizamos uma abordagem em vez da outra.

Você será capaz de:
Utilizar os seletores (queries) da React Testing Library em testes automatizados;
Simular eventos com a React Testing Library em testes automatizados;
Testar fluxos lógicos assíncronos com a React Testing Library;
Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem a necessidade de serem alterados.
Por que isso é importante?
Imagine que você está trabalhando em uma aplicação React e precisa realizar uma atualização de um componente para melhorar o desempenho do programa.

Quando você o acessa, percebe que ele recebe várias props de outros componentes. Além disso, vários outros recebem props desse mesmo componente. O que você deve fazer para garantir que a sua alteração não está impactando o funcionamento desses outros componentes?

Você mesmo poderia checar se a página está funcionando da maneira que deveria. Mas, pense no trabalho de fazer isso cada vez que um commit for realizado! E quando outra pessoa precisar atualizar esse mesmo componente no futuro?

Para não ter dores de cabeça desnecessárias, utilize testes automatizados. Eles são responsáveis por fazer com que a máquina trabalhe a nosso favor. Existem diversas bibliotecas de testes automatizados para serem utilizadas em aplicações React, como react-testing-library e enzyme. Aqui, vamos focar a RTL (React Testing Library).

As vantagens da React Testing Library são:

Mais simples de usar;
Muito menos caveats, isto é, situações que podem causar pequenos problemas e dores de cabeça inesperadas;
Reforça o bom uso das melhores práticas de testes, incentivando e facilitando testes de comportamentos, e não os de implementação;
Permite a refatoração da arquitetura de componentes (com a Enzyme, qualquer mudança na arquitetura quebra parte dos testes).