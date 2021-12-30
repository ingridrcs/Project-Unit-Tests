const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
// SOURCE: https://jestjs.io/pt-BR/docs/expect#expectarraycontainingarray , https://deltice.github.io/jest/docs/pt-BR/expect.html#content ,https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toEqual(expect.any(Function));
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel','Máscara')).toEqual(expect.any(Array));
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel','Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool gel','Máscara')).toEqual(expect.any(Object));
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Luva','Pano')).toEqual([{name: 'Luva',details: {productId: 'Luva123'}},{name: 'Pano',details: {productId: 'Pano123'}}]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool gel','Máscara')[0].details.productId.endsWith('123')).toBeTruthy();
    expect(productDetails('Alcool gel','Máscara')[1].details.productId.endsWith('123')).toBeTruthy();
    
  });
});
