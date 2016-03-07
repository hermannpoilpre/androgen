angular.module('app.views.model', [])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.model', {
        url: 'model/',
        views: {
          'main@': {
            controller: 'ModelCtl as modelCtl',
            templateUrl: '/app/views/model/model.html'
          }
        }
      })
    ;
  })

  .controller('ModelCtl', function ModelCtl(AppFct) {
    var modelCtl = this;
    AppFct.title = 'Model Generator';

  });
