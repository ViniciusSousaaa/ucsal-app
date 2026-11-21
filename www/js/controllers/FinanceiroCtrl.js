angular.module('ucsalApp')
  .controller('FinanceiroCtrl', function ($scope, $q, $ionicLoading, FinanceiroService) {
    $scope.STATUS = FinanceiroService.STATUS;
    $scope.semestres = FinanceiroService.listarSemestres();

    $scope.filtro = { semestre: $scope.semestres[0] };

    $scope.carregarMensalidades = function () {
      $scope.mensalidades = FinanceiroService.listarMensalidades($scope.filtro.semestre);
    };

    $scope.copiarCodigoBarras = function (mensalidade) {
      copiarTexto(mensalidade.linhaDigitavel).then(function () {
        mensalidade.copiado = true;
        $ionicLoading.show({
          template: '<i class="icon ion-checkmark-circled"></i> Código de barras copiado!',
          duration: 1800,
          noBackdrop: true
        });
      });
    };

    function copiarTexto(texto) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return $q.when(navigator.clipboard.writeText(texto)).catch(function () {
          return copiarComTextarea(texto);
        });
      }
      return copiarComTextarea(texto);
    }

    function copiarComTextarea(texto) {
      var campo = document.createElement('textarea');
      campo.value = texto;
      campo.setAttribute('readonly', '');
      campo.style.position = 'absolute';
      campo.style.left = '-9999px';
      document.body.appendChild(campo);
      campo.select();
      document.execCommand('copy');
      document.body.removeChild(campo);
      return $q.resolve();
    }

    $scope.carregarMensalidades();
  });
