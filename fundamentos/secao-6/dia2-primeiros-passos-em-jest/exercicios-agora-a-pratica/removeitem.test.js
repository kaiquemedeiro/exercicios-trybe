const removeItem = require('./removeItem.js');

describe('verificar a função removeItem()', () => {
    
    it('Deve retornar um array removendo o item correto', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);

    });

 }) ;