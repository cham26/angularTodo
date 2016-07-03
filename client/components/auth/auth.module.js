'use strict';

angular.module('angularTodoApp.auth', ['angularTodoApp.constants', 'angularTodoApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
