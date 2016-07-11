'use strict';

angular.module('chamAppApp.clogentry')
  .config(function($stateProvider) {
    $stateProvider.state('clogentry', {
      url: '/clogentry',
      templateUrl: 'app/clogentry/clogentry.html',
      controller: 'ClogentryController',
      controllerAs: 'vm'
    });
  });