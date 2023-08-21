let salarioBruto = 3000.00;
let salarioBase;
let salarioLiquido;


//INSS
if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * 0.07);    
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);    
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);    
} else {
    salarioBase = salarioBruto - (570.88);    
}

//IR
if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.8);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.8);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13); 
} else {
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}

console.log(`o meu salário bruto é R$${salarioBruto}, meu salário base (descontado INSS) é R$${salarioBase}, e ao final meu salário liquido é: R$${salarioLiquido}`);