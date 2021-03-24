const request = require('supertest');
const app = require('../src/app');

describe('criacao_de_usuario', () => {
  it('created successfully', async (done) => {
    const response = await request(app).post('/api/user/create').send({
      nome: 'Julio',
      matricula: '160031233',
      email: 'emaildojulio@email.com',
      senha: 'juliodaeletronica>sfotware',
      telefone: '61999999999',
    });
    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty('matricula');
    done();
  });
  it('fails', async (done) => {
    const response = await request(app).post('/api/user/create').send({
      nome: 'Julio',
      matricula: '160031',
      email: 'emaildojulio@email.com',
      senha: 'aaaaa',
    });
    expect(response.status).toBe(500);
    done();
  });
});
