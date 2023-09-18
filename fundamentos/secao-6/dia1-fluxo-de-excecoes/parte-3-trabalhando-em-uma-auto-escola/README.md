Parte III – Trabalhando em uma autoescola
Suponha que você esteja trabalhando em uma autoescola e precise fazer o cadastro de uma nova pessoa que tem interesse em se tornar motorista. Para isso, o sistema que você vai desenvolver tem uma série de validações, que permitem ou não a pessoa a começar as aulas.

Copiar
const studentRegister = (name, age) => {
  // seu código aqui
}
A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'
