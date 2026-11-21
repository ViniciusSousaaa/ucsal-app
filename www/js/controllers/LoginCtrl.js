angular.module('ucsalApp')
  .controller('LoginCtrl', function ($scope, $state, $ionicHistory, AuthService) {
    $scope.credenciais = {
      matricula: '',
      senha: ''
    };
    $scope.mensagemErro = '';

    $scope.entrar = function () {
      $scope.mensagemErro = '';

      if (!$scope.credenciais.matricula || !$scope.credenciais.senha) {
        $scope.mensagemErro = 'Informe a matrícula e a senha.';
        return;
      }

      var aluno = AuthService.login($scope.credenciais.matricula.trim(), $scope.credenciais.senha);

      if (!aluno) {
        $scope.mensagemErro = 'Matrícula ou senha inválidas.';
        return;
      }

      $scope.credenciais = { matricula: '', senha: '' };
      $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
      $state.go('app.noticias');
    };
  });
