const request = require('supertest');
const app = require('../src/app');

describe('create_news', () => {
  it('created successfully', async (done) => {
    const response = await request(app).post('/api/news/create').send({
      titulo: 'Uma noticia',
      imagem: 'aaaaaaaaaaaa',
      conteudo: 'Uma noticia mesmo',
      autor: 'nome',
      id_user: '160234845',
    });
    expect(response.status).toBe(200);
    expect(response.body.data.news).toHaveProperty('id');
    done();
  });
  it('fails', async (done) => {
    const response = await request(app).post('/api/news/create').send({
      titulo: 'Uma noticia',
      imagem: 'aaaaaaaaaaaa',
      conteudo: 'Uma noticia mesmo',
      autor: 'nome',
    });
    expect(response.status).toBe(500);
    done();
  });
});

describe('read_news', () => {
  it('successe', async (done) => {
    const response = await request(app).get('/api/news/4aa94e41-822c-4db7-9e42-799187f3be76');
    expect(response.status).toBe(200);
    expect(response.body.data.news).toHaveProperty('titulo');
    done();
  });
  it('fails', async (done) => {
    const response = await request(app).get('/api/news/000000000');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Notícia não encontrado!');
    done();
  });
});

describe('remove_news', () => {
  it('success', async (done) => {
    const response = await request(app).delete('/api/news/41fce677-a031-40d6-91d0-9f68bf72e18f');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Notícia deletada com sucesso!');
    expect(response.body.data).toBe(1);
    done();
  });
  it('fail', async (done) => {
    const response = await request(app).delete('/api/news/41fce677-a031-40d6-91d0-9f68bf72e18fwrong');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao deletar notícia!');
    done();
  });
});

describe('read_all_news', () => {
  it('successe', async (done) => {
    const response = await request(app).get('/api/news');
    expect(response.status).toBe(200);
    expect(response.body.data.news[0]).toHaveProperty('id');
    done();
  });
  it('fails', async (done) => {
    const response = await request(app).get('/api/news/');
    response.body.data.news.map(async (item) => {
      await request(app).delete(`/api/news/${item.id}`);
    });
    const response2 = await request(app).get('/api/news/');
    expect(response2.status).toBe(404);
    expect(response2.body.message).toBe('Notícias não encontradas!');
    done();
  });
});
