import request from 'supertest';
import app from '../index'; // Importe corretamente o arquivo index

describe('Testes das rotas', () => {
  it('Deve retornar todos os alunos', async () => {
    const response = await request(app).get('/aluno');
    expect(response.status).toBe(200);
  });

  it('Deve criar um novo aluno', async () => {
    const novoAluno = { nome: 'Novo Aluno', email: 'teste@teste.com', nacionalidade: 'Teste' };
    const response = await request(app).post('/aluno').send(novoAluno);
    expect(response.status).toBe(200);
  });
});
