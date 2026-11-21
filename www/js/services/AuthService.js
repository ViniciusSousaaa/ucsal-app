angular.module('ucsalApp')
  .service('AuthService', function ($rootScope, AlunoService) {
    var CHAVE_SESSAO = 'ucsal.sessao';

    var credenciaisMock = [
      { matricula: '20261001', senha: '123456' },
      { matricula: '20261002', senha: '654321' }
    ];

    var alunoLogado = null;

    function definirAlunoLogado(aluno) {
      alunoLogado = aluno;
      $rootScope.alunoLogado = aluno;
    }

    this.login = function (matricula, senha) {
      var credencial = null;
      for (var i = 0; i < credenciaisMock.length; i++) {
        if (credenciaisMock[i].matricula === matricula && credenciaisMock[i].senha === senha) {
          credencial = credenciaisMock[i];
          break;
        }
      }

      if (!credencial) {
        return null;
      }

      definirAlunoLogado(AlunoService.buscarPorMatricula(credencial.matricula));
      sessionStorage.setItem(CHAVE_SESSAO, credencial.matricula);
      return alunoLogado;
    };

    this.logout = function () {
      definirAlunoLogado(null);
      sessionStorage.removeItem(CHAVE_SESSAO);
    };

    this.getAlunoLogado = function () {
      return alunoLogado;
    };

    this.estaAutenticado = function () {
      return alunoLogado !== null;
    };

    var matriculaSessao = sessionStorage.getItem(CHAVE_SESSAO);
    if (matriculaSessao) {
      definirAlunoLogado(AlunoService.buscarPorMatricula(matriculaSessao));
    }
  });
