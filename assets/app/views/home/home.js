angular.module('app.views.home', [])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'menu@': {
            controller: 'MenuCtl as menuCtl',
            templateUrl: '/app/views/menu/menu.html'
          },
          'main@': {
            controller: 'HomeCtl as homeCtl',
            templateUrl: '/app/views/home/home.html'
          }
        }
      })
    ;
  })

  .controller('HomeCtl', function HomeCtl(AppFct) {
    var homeCtl = this;
    AppFct.title = 'Home';
  });
