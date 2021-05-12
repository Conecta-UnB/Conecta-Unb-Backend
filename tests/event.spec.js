const request = require('supertest');
const app = require('../src/app');

describe('criacao_de_evento', () => {
  it('created successfully', async (done) => {
    const response = await request(app).post('/api/event/create').send({
      titulo: 'teste',
      organizador: 'teste',
      descricao: 'teste',
      imagem: 'teste',
    });
    expect(response.status).toBe(200);
    expect(response.body.data.event).toHaveProperty('titulo');
    done();
  });
  it('fails', async (done) => {
    const response = await request(app).post('/api/event/create').send({
      organizador: 'teste',
      descricao: 'teste',
      imagem: 'teste',
    });
    expect(response.status).toBe(500);
    done();
  });
});

describe('ler_evento', () => {
  it('success', async (done) => {
    const response = await request(app).get('/api/event/read/6234a2a2-b917-4c5c-9ec5-f815694ff429');
    expect(response.status).toBe(200);
    expect(response.body.data.event).toHaveProperty('id');
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).get('/api/event/read/wrong000');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Evento não encontrado!');
    done();
  });
});

describe('atualizacao_de_evento', () => {
  it('success', async (done) => {
    const response = await request(app).put('/api/event/update/6234a2a2-b917-4c5c-9ec5-f815694ff429').send({
      nome: 'teste',
      email: 'teste',
      senha: 'teste',
      telefone: 'teste',
    });
    expect(response.status).toBe(200);
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).put('/api/event/update/wrong000').send({
      nome: 'teste',
      email: 'teste',
      senha: 'teste',
      telefone: 'teste',
    });
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao atualizar evento!');
    done();
  });
});

describe('remocao_de_evento', () => {
  it('success', async (done) => {
    const response = await request(app).delete('/api/event/delete/6234a2a2-b917-4c5c-9ec5-f815694ff429');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Evento deletado com sucesso!');
    expect(response.body.data).toBe(1);
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).delete('/api/event/delete/wrong000');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao deletar evento!');
    done();
  });
});
