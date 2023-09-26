const people = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Pedro', age: 20 },
    { name: 'Ana', age: 35 },
  ];

const peopleOver30 = people.filter((person) => person.age >= 30);

console.log(peopleOver30);