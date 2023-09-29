Default Parameters
Os default parameters (parâmetros padrão) permitem que você atribua valores predefinidos para os parâmetros de uma função. Esses valores serão usados se nenhum valor for passado explicitamente ao chamar a função.

Aqui está um exemplo simples para ilustrar como os parâmetros padrão funcionam em JavaScript:

Copiar
const greeting = (name, message = "Olá") => console.log(`${message} ${name}, tudo bem?`);

// Chamada da função sem o segundo argumento
greeting("João"); // Olá João, tudo bem?
Neste exemplo, temos uma função chamada greeting que recebe dois parâmetros: name e message. O parâmetro message tem um valor padrão definido como “Olá”.

Quando chamamos a função greeting sem especificar o segundo argumento, o valor padrão “Olá” será automaticamente usado.

No entanto, se passarmos um valor para o parâmetro message na chamada da função, o default parameters não entrará em ação:

Copiar
greeting("Maria", "Oi"); // Oi Maria, tudo bem?
👀 De olho na dica: os parâmetros padrão podem ser definidos para qualquer parâmetro de função, não apenas para o último parâmetro. Mas tenha cuidado ao usar parâmetros padrão no meio da lista de parâmetros, pois isso pode causar confusão na ordem dos argumentos.

Passar um parâmetro como default é um detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido à função. Você pode adicionar mais de um parâmetro default, caso sua função receba vários argumentos, se achar necessário.

Para Fixar
Escreva uma função chamada multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.