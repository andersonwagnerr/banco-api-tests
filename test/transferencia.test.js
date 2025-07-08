const request = require('supertest');
const { expect } = require('chai')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$10 Reais', async () => {
            const responselogin = await request('http://localhost:3000')
                        .post('/login')
                        .set('Content-Type', 'application/json')
                        .send(
                            {
                            'username': 'julio.lima',
                            'senha': '123456'
                            }
                        )
            const token = responselogin.body.token
                        
            const response = await request('http://localhost:3000')
                            .post('/transferencias')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', `Bearer ${token}`)
                            .send({
                                contaOrigem: 1,
                                contaDestino: 2,
                                valor: 11,
                                token: ""
                                }
                            )
                        expect(response.status).to.equal(201)

                        console.log(response.body)
                    
        })
        it('Deve retornar erro com 422 quando o valor da transferência for abaixo de R$10 Reais', async () => {
 const responselogin = await request('http://localhost:3000')
                        .post('/login')
                        .set('Content-Type', 'application/json')
                        .send(
                            {
                            'username': 'julio.lima',
                            'senha': '123456'
                            }
                        )
            const token = responselogin.body.token
                        
            const response = await request('http://localhost:3000')
                            .post('/transferencias')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', `Bearer ${token}`)
                            .send({
                                contaOrigem: 1,
                                contaDestino: 2,
                                valor: 8,
                                token: ""
                                }
                            )
                        expect(response.status).to.equal(422)

                        console.log(response.body)
                    
        })    
    })
})