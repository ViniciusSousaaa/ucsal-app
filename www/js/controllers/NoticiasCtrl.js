angular.module('ucsalApp')
  .controller('NoticiasCtrl', function ($scope, $state, NoticiasService) {
    $scope.noticias = NoticiasService.listarTodas();
    $scope.categorias = NoticiasService.listarCategorias();

    $scope.filtro = { categoria: '' };

    $scope.selecionarCategoria = function (categoria) {
      $scope.filtro.categoria = categoria;
    };

    $scope.abrirDetalhe = function (noticia) {
      $state.go('app.noticia-detalhe', { id: noticia.id });
    };
  })

  .controller('NoticiaDetalheCtrl', function ($scope, $stateParams, NoticiasService) {
    $scope.noticia = NoticiasService.buscarPorId($stateParams.id);
  });
