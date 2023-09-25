const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione seu código aqui

  const peopleSortedOfAge = people.sort((a, b) => a.age - b.age); 

  const peopleSortedOfAgeReverse = people.sort((a, b) => b.age - a.age);
  
  console.log(peopleSortedOfAge);

//   console.log(peopleSortedOfAgeReverse);