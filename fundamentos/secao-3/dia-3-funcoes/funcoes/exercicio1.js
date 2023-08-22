function adicionar(balance, valorAgregado) {
    let total = balance + valorAgregado;
    console.log(`Adicionando o valor ficará: ${total}`);
}

function subtrair(balance, valorSubtrainte) {
    let total = balance - valorSubtrainte;
    console.log(`Subtraindo o valor ficará: ${total}`);
}

function multiplicar(balance, multiplicador) {
    let total = balance * multiplicador;
    console.log(`Multiplicando o valor ficará: ${total}`);
}

function dividir(balance, divisor) {
    let total = balance / divisor;
    console.log(`Dividindo o valor ficará: ${total}`);
}


let balance = 500;

adicionar(balance, 500);
subtrair(balance, 200);
multiplicar(balance, 2);
dividir(balance, 2);



