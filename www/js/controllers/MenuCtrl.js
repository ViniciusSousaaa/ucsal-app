angular.module('ucsalApp')
  .controller('MenuCtrl', function ($scope, $state, $ionicHistory, AuthService) {
    $scope.sair = function () {
      AuthService.logout();
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
      $state.go('login');
    };
  });
