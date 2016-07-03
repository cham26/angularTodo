'use strict';

angular.module('angularTodoApp', ['angularTodoApp.auth', 'angularTodoApp.admin',
    'angularTodoApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
