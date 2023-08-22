let numeroFatorado = 10;

process.stdout.write(`!${numeroFatorado} = `);

let fatorial = 1;

for (let index = numeroFatorado; index > 0; index -= 1) {
    fatorial = fatorial * index;
    if (index < 2) {
        process.stdout.write(`${index} =`);
    } else {
        process.stdout.write(`${index} x `);
    }
}

process.stdout.write(` ${fatorial}`);
