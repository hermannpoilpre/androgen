
'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ui.materialize', 'app.views.home', 'app.views.model', 'app.views.viewcontroller', 'app.views.menu'])

  .config(function ($urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  })

  .controller('AppCtl', function AppCtl() {
    var appCtl = this;

  })

  .factory('AppFct', function AppFct() {
  return {
    title: 'Androgen'
  }
})
