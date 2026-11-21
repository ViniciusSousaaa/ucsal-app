angular.module('ucsalApp')
  .service('AlunoService', function () {
    var CHAVE_STORAGE = 'ucsal.alunos';

    var alunosMock = [
      {
        matricula: '20261001',
        nome: 'Vinícius Santos Oliveira',
        curso: 'Engenharia de Software',
        email: 'vinicius.oliveira@email.com',
        telefone: '(71) 99876-5432',
        endereco: {
          cep: '41740-090',
          rua: 'Av. Prof. Pinto de Aguiar, 2589',
          bairro: 'Pituaçu',
          cidade: 'Salvador'
        }
      },
      {
        matricula: '20261002',
        nome: 'Mariana Costa Ribeiro',
        curso: 'Engenharia de Software',
        email: 'mariana.ribeiro@email.com',
        telefone: '(71) 98765-1234',
        endereco: {
          cep: '40210-730',
          rua: 'Rua Barão de Jeremoabo, 120',
          bairro: 'Federação',
          cidade: 'Salvador'
        }
      }
    ];

    var alunos = carregarDoStorage() || alunosMock;

    function carregarDoStorage() {
      try {
        var salvo = localStorage.getItem(CHAVE_STORAGE);
        return salvo ? JSON.parse(salvo) : null;
      } catch (e) {
        return null;
      }
    }

    function salvarNoStorage() {
      try {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(alunos));
      } catch (e) {}
    }

    this.buscarPorMatricula = function (matricula) {
      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula === matricula) {
          return alunos[i];
        }
      }
      return null;
    };

    this.atualizarContato = function (matricula, dados) {
      var aluno = this.buscarPorMatricula(matricula);
      if (!aluno) {
        return null;
      }

      aluno.email = dados.email;
      aluno.telefone = dados.telefone;
      aluno.endereco = {
        cep: dados.endereco.cep,
        rua: dados.endereco.rua,
        bairro: dados.endereco.bairro,
        cidade: dados.endereco.cidade
      };

      salvarNoStorage();
      return aluno;
    };
  });
