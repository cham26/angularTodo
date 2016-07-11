'use strict';

angular.module('chamAppApp', ['chamAppApp.auth', 'chamAppApp.admin', 'chamAppApp.clogentry', 'chamAppApp.table-todos', 'chamAppApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
