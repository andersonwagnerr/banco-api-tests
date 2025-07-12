const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');
require ('dotenv').config()
const postTransferencias = require ('../fixtures/postTransferencias.json')

describe('Transferências', () => {
    let token

    beforeEach(async () => {
        token = await obterToken('julio.lima', '123456')
    })

    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$10 Reais', async () => {   
            const bodyTransferencias = {...postTransferencias}            
            const response = await request(process.env.BASE_URL)
                            .post('/transferencias')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', `Bearer ${token}`)
                            .send(bodyTransferencias)
                        expect(response.status).to.equal(201)

                        console.log(response.body)
                    
        })
        it('Deve retornar erro com 422 quando o valor da transferência for abaixo de R$10 Reais', async () => {      
            const bodyTransferencias = {...postTransferencias}
            bodyTransferencias.valor = 7              
            const response = await request(process.env.BASE_URL)
                            .post('/transferencias')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', `Bearer ${token}`)
                            .send(bodyTransferencias)
                        expect(response.status).to.equal(422)

                        console.log(response.body)
                    
        })    
    })

    describe('Get /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o ID for válido', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias/7')
                .set('Authorization', `Bearer ${token}`)
                
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(7)
            expect(response.body.id).to.be.a('number')
            expect(response.body.conta_origem_id).to.equal(1)
            expect(response.body.valor).to.equal(11.00)
        })
    })

    describe('Get /transferencias', () => {
        it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)

            expect(response.body).to.equal(200)
            expect(response.body.limit).to.equal(10)
            expect(response.body.transferencias).to.have.lengthOf(10)
        })
    })
})