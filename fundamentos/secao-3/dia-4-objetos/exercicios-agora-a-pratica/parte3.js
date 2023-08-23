const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

//   Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

function values (objeto, posicao) {
    let valores = Object.values(objeto['lessons'][posicao]);
    return valores;
}
// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

function somaTotalEstudantes (objeto) {
    let total = 0;
    for (lessons of objeto.lessons) {
        total += lessons['students'];
    }
    return total;
}

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

function verifyKey (objeto, nomeChave) {
    let confer;
    for (lesson of objeto.lessons) {
        lesson.course === nomeChave ? confer = true : confer = false;
    }
    return confer;
}

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

function alterCourse (objeto, nomeChave, novoNome) {
    let confer;
    for (lesson of objeto.lessons) {
        if (lesson.course === nomeChave) {
            lesson['shift'] = novoNome;
            return lesson        
        } 
    }
}


console.log(values(school, 1));
console.log(somaTotalEstudantes(school));
console.log(verifyKey(school, 'MongoDB'));
console.log(alterCourse(school, 'Python', 'Noite'));