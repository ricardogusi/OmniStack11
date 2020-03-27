const request = require('supertest');
const app = require('../../backend/src/app');
const connection = require('../../backend/src/database/connection');

describe('ONG'), () => {
    beforeEach(async () => {
       await connection.migrate.latest();
    });

    it('sould be able to creat a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@apad.com.br",
            whatsapp: "4799915551",
            city: "Piçarras",
            uf: "SC"
        });

        console.log(response.body);
    })  ;  
}