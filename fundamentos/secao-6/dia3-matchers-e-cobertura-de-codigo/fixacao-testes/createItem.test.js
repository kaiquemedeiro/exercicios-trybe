const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('Picanha', 'kg', 60, 1)).toEqual({name: 'Picanha', quantity: 1, unit: 'kg', price: 60});
  });

  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99 )).toEqual({name: 'banana', quantity: 0, unit: 'kg', price: 1.99});
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(true, 'kg', 60, 1)).toThrow('O nome do item deve ser uma string');
  });

  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('Picanha', 'kg', -60, 1)).toThrow('O preço do item deve ser maior que zero');
  });
  
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('Picanha', 'kg', 0, 1)).toThrow('O preço do item deve ser maior que zero');
  });
});