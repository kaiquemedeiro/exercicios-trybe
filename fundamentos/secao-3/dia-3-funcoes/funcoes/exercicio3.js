const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(nome) {
  if (typeof nome !== 'string') {
    return 'O parâmetro passado deve ser do tipo string';
  }

  trybeBankCustomers.push(nome);
  return 'Cliente adicionado com sucesso!';
}

// Testando a função
console.log(addCustomer('Ana'));  // Cliente adicionado com sucesso!
console.log(addCustomer(42));     // O parâmetro passado deve ser do tipo string

console.log(trybeBankCustomers);  // ['Oliva', 'Nat', 'Gus', 'Ana']
