
const supertest = require('supertest');
const app = require('../src/app');

describe("Testes do App", () => {
    test("GET /", async () => {
        const response = await supertest(app)
            .get('/');

        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual('Funcionando!');
    });

    test("Aplicar Desconto - GET /aplicarDesconto/10/5", async () => {
        const response = await supertest(app)
            .get('/aplicarDesconto/10/5');

        expect(response.statusCode).toEqual(200);
        expect(response.body.valorDescontado).toEqual(5);
    });
});
