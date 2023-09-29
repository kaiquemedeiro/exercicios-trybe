const students = [
    {
      name: 'Jorge',
      lastName: 'Silva',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 67 },
        { name: 'Português', grade: 79 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 65 },
      ],
    },
    {
      name: 'Mario',
      lastName: 'Ferreira',
      age: 15,
      turn: 'Tarde',
      courses: [
        { name: 'Matemática', grade: 59 },
        { name: 'Português', grade: 80 },
        { name: 'Química', grade: 78 },
        { name: 'Biologia', grade: 92 },
      ],
    },
    {
      name: 'Jorge',
      lastName: 'Santos',
      age: 15,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 76 },
        { name: 'Português', grade: 90 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 80 },
      ],
    },
    {
      name: 'Maria',
      lastName: 'Silveira',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 91 },
        { name: 'Português', grade: 85 },
        { name: 'Química', grade: 92 },
        { name: 'Biologia', grade: 90 },
      ],
    },
    {
      name: 'Natalia',
      lastName: 'Castro',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 70 },
        { name: 'Português', grade: 70 },
        { name: 'Química', grade: 60 },
        { name: 'Biologia', grade: 50 },
      ],
    },
    {
      name: 'Wilson',
      lastName: 'Martins',
      age: 14,
      turn: 'Manhã',
      courses: [
        { name: 'Matemática', grade: 80 },
        { name: 'Português', grade: 82 },
        { name: 'Química', grade: 79 },
        { name: 'Biologia', grade: 75 },
      ],
    },
  ];


  const bestCourse = (courses) => {
    const name = courses.reduce((acc, course) => {
        if (acc.best === undefined || acc.best < course.grade) {
            acc.best = course.grade;
            acc.name = course.name;
        }

        return acc;
    }, { best: undefined, name: '' });
    return name.name;

  };

  const dataBestCourse = (students) => {
    const newArray = students.map((student) => {
        const objFinal = {
            name: student.name,
            course: bestCourse(student.courses),
        };

        return objFinal;
    });
    return newArray;
  };

  console.log(dataBestCourse(students));


