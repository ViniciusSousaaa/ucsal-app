angular.module('ucsalApp', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
        publica: true
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.noticias', {
        url: '/noticias',
        views: {
          menuContent: {
            templateUrl: 'templates/noticias.html',
            controller: 'NoticiasCtrl'
          }
        }
      })

      .state('app.noticia-detalhe', {
        url: '/noticias/:id',
        views: {
          menuContent: {
            templateUrl: 'templates/noticia-detalhe.html',
            controller: 'NoticiaDetalheCtrl'
          }
        }
      })

      .state('app.perfil', {
        url: '/perfil',
        cache: false,
        views: {
          menuContent: {
            templateUrl: 'templates/perfil.html',
            controller: 'PerfilCtrl'
          }
        }
      })

      .state('app.financeiro', {
        url: '/financeiro',
        views: {
          menuContent: {
            templateUrl: 'templates/financeiro.html',
            controller: 'FinanceiroCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  })

  .run(function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      var autenticado = AuthService.estaAutenticado();

      if (!toState.publica && !autenticado) {
        event.preventDefault();
        $state.go('login');
      } else if (toState.name === 'login' && autenticado) {
        event.preventDefault();
        $state.go('app.noticias');
      }
    });
  });
