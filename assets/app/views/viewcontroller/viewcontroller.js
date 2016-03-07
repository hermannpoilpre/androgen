angular.module('app.views.viewcontroller', [])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.viewcontroller', {
        url: 'viewcontroller/',
        views: {
          'main@': {
            controller: 'ViewControllerCtl as viewControllerCtl',
            templateUrl: '/app/views/viewcontroller/viewcontroller.html'
          }
        }
      })
    ;
  })

  .controller('ViewControllerCtl', function ViewControllerCtl(AppFct) {
    var viewControllerCtl = this;
    AppFct.title = 'View Controller Generator';
  });
