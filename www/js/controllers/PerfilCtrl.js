angular.module('ucsalApp')
  .controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {
    $scope.camposInstitucionaisBloqueados = true;
    $scope.mensagemErro = '';

    function carregarFormulario() {
      var aluno = AuthService.getAlunoLogado();
      $scope.aluno = angular.copy(aluno);
    }

    $scope.salvar = function () {
      $scope.mensagemErro = '';

      if (!$scope.aluno.email || !$scope.aluno.telefone) {
        $scope.mensagemErro = 'Preencha o e-mail e o telefone.';
        return;
      }

      AlunoService.atualizarContato($scope.aluno.matricula, $scope.aluno);
      carregarFormulario();

      $ionicPopup.alert({
        title: 'Cadastro atualizado',
        template: 'Seus dados de contato foram salvos com sucesso.',
        okText: 'OK',
        okType: 'button-positive'
      });
    };

    carregarFormulario();
  });
