const myFizzBuzz = require('./MyFizzBuzz');

describe('verificar a função MyFizzBuzz', () => {
    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });

    it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
        expect(myFizzBuzz(8)).toBe(8);
    });

    it('Caso num não seja um número, a função retorna false', () => {
        expect(myFizzBuzz('kaique')).toBe(false);
    });

});