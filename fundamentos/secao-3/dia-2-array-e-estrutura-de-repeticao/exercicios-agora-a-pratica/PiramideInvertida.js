let linhas = 5;

let espace = linhas;

for (let index1 = 0; index1 < linhas; index1 += 1) {
    for (let index2 = espace - 1 ; index2 > 0 ; index2 = index2 -1) {
        process.stdout.write(' ');
    }
    for (let index3 = 0; index3 <= index1; index3 += 1) {
        process.stdout.write('*');
    }
    console.log('');

    espace -= 1;
}

