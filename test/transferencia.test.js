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
})