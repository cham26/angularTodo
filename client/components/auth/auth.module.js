'use strict';

angular.module('chamAppApp.auth', ['chamAppApp.constants', 'chamAppApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
