const { encode, decode } = require('./encodeDecode');

describe('Testar a função encodeDecode', () => {
    it('Teste se encode e decode são funções.', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });

    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    
    it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
        expect(decode('12345')).toBe('aeiou');
    }); 
        
    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(encode('kaique')).toBe('k13q52');
        expect(decode('40285356')).toBe('o0e8uiu6');
    });

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('trybe').length).toEqual(5);
        expect(decode('trybe').length).toEqual(5);
    });

}); 