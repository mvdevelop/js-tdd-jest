
//const { test } = require('@jest/core');

const index = require('./index');

test("Aplicar Desconto", () => {
    const result = index.aplicarDesconto(10, 5);
    expect(result).toEqual(5);
});

test("Aplicar Desconto - Desconto Maior", () => {
    const result = index.aplicarDesconto(10, 15);
    expect(result).toEqual(0);
});
