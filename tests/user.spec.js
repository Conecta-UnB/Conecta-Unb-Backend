const request = require('supertest');
const app = require('../src/app');

describe('criacao_de_usuario', () => {
  it('success', async (done) => {
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
  it('fail', async (done) => {
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

describe('ler_usuario', () => {
  it('success', async (done) => {
    const response = await request(app).get('/api/user/160234845');
    expect(response.status).toBe(200);
    expect(response.body.data.user).toHaveProperty('matricula');
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).get('/api/user/000000000');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Usuário não encontrado!');
    done();
  });
});

describe('atualizacao_de_usuario', () => {
  it('success', async (done) => {
    const response = await request(app).put('/api/user/160234845').send({
      nome: 'Julio',
      email: 'emaildojulio@email.com',
      senha: 'juliodaeletronica>sfotware',
      telefone: '61999999999',
    });
    expect(response.status).toBe(200);
    expect(response.body.data).toBe(1);
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).put('/api/user/160234845wrong').send({
      nome: 'Julio',
      email: 'emaildojulio@email.com',
      senha: 'juliodaeletronica>sfotware',
      telefone: '61999999999',
    });
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao atualizar usuário!');
    done();
  });
});

describe('remocao_de_usuario', () => {
  it('success', async (done) => {
    const response = await request(app).delete('/api/user/160234845');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário deletado com sucesso!');
    expect(response.body.data).toBe(1);
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).delete('/api/user/160234845wrong');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao deletar usuário!');
    done();
  });
});
