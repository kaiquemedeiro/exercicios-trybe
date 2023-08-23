const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  // Criação da função
  const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
      object[key] = value;
    }
  };
  
  // Chamada da função passando os valores dos parâmetros
  addProperty(customer, 'birthPlace', '19/07/1932');
  
  // Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.
  addProperty(customer,'email', 'roberto@hotmail.com');
  addProperty(customer,'fone', 11977885599);
  addProperty(customer,'userGithub', 'robertodigital');
  addProperty(customer,'linkedIn', 'robertodigital');
  
  // Exibe o objeto transformado
  console.log(customer);